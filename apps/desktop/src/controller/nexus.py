import psutil
import requests
import re
import base64
import sys
import os
import subprocess
import re
import socket
from requests.packages.urllib3.exceptions import InsecureRequestWarning
from dotenv import load_dotenv
from loguru import logger
import time

from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import winshell
import tempfile
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
load_dotenv()






logger.add(sys.stderr, format="{time} {level} {message}", filter="nexus", level="INFO")


class Utils:
    def __init__(self):
        self.path = os.getenv("RIOT_PATH")
        
    def create_temp_shortcut(self):
        # Crie uma pasta temporária
        temp_dir = tempfile.mkdtemp()

        # Caminho completo para o executável
        exe_file = os.path.basename(self.path)

        # Caminho completo para o atalho temporário na pasta temporária
        shortcut_path = os.path.join(temp_dir, exe_file + ".lnk")

        # Crie o atalho usando winshell
        winshell.CreateShortcut(
            Path=shortcut_path,
            Target=self.path,
            Description="Shortcut to RiotClientServices"
        )

        return shortcut_path
    def find_open_port(self, start_port=9050,end_port=65535):
       
        logger.info("looking for ports")
        for port in range(start_port, end_port + 1):
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                try:
                    s.bind(('localhost', port))
                    logger.info(f"port found {port}")
                    return port
                except OSError:
                    continue
        raise RuntimeError('Não há portas disponíveis no intervalo especificado.')
    
        
      

# Chame a função para criar o atalho temporário e executá-lo

class Request:
    def __init__(self):
        return
    def send_auth_request(self,port,token):
        login_endpoint = f"https://127.0.0.1:{port}/rso-auth/v1/session/credentials"
        self.refresh_session(port,token)
        response = requests.put(login_endpoint, json=self.prepare_login_body(), headers=self.prepare_headers(port,token), verify=False)
        return response
    def prepare_login_body(self):
        username = "menorgamer123"
        password = "alan112233445566"
        
        login_body = {"username":username, "password":password, "persistLogin": False}
        logger.info(login_body)
        return login_body
    def prepare_headers(self,port,token):
        headers = {
            "Host": f"127.0.0.1:{port}",
            "Connection": "keep-alive",
            "Authorization": f"Basic {token}",
            "Accept": "application/json",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "127.0.0.1",
            "Content-Type": "application/json",
            "Origin": f"https://127.0.0.1:{port}",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?F",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) (CEF 74) "
            f"Safari/537.36",
            "sec-ch-ua": "Chromium",
            "Referer": f"https://127.0.0.1:{port}/index.html",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
        }
        return headers
    def refresh_session(self,port,token):
        session = requests.Session()
        try:
            body = {"clientId":"riot-client","trustLevels":["always_trusted"]}
            endpoint = (
                f"https://127.0.0.1:{port}/rso-auth/v2/authorizations"
            )
            retry = Retry(connect=3,backoff_factor=0.5)
            adapter = HTTPAdapter(max_retries=retry)
            session.verify = False
            session.mount(endpoint,adapter)
            self.prepare_headers(port,token)
            authres = session.post(endpoint)
            logger.info(f"{authres.text}")
        except:
            logger.error(authres.text)
    
     
class RiotClient():
    def __init__(self):
        
        self.utils = Utils()
        self.path = self.utils.create_temp_shortcut()
        self.port = self.utils.find_open_port()
        self.riot_proc_name = os.getenv("RIOT_PROC_NAME")
        self.command = f'"{self.path}" {f"--app-port={self.port} --allow-multiple-clients"}'
        self.token = None
        self.pid = None
        self.extract = Extract()
        self.process = Process()
        self.request = Request()
        
        
    def run(self):
        self.open()
        self.league_is_ready()
    #     endpoint = (
    #      f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/session/credentials"
    #  )            
        self.login()

    def league_is_ready(self):
        logger.info("Procurando por processos...")
        while self.token is None:
            processes = self.process.get()
            for proc in processes:
                cmdline = " ".join(proc["cmdline"])
                self.token = self.extract.token(cmdline)
                if self.token:
                    logger.info(f"Token {self.token}")
                    return True
        return False
                
    
    def login(self):
        response = self.request.send_auth_request(self.port,self.token)
        if response.status_code == 201:
            logger.info(f"text: {response.text}, code: {response.status_code}")
        else:
            logger.error(f"text: {response.text}, code: {response.status_code} \n pid: {self.pid} \n port: {self.port} \n token: {self.token}")
        return
    def open(self):
        process = subprocess.Popen(self.command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        if process.pid:
            logger.info(f"League Opened")
            self.pid = process.pid
            return
        else:
            logger.error(f"Could'nt open League")
      
    
class Process:
    def __init__(self): 
        return
    def get(self):
        process_list = [p.info for p in psutil.process_iter(["name", "cmdline"])]
        riot_processes = []
        for process in process_list:
            if process["name"] == os.getenv("RIOT_PROC_NAME"):
                riot_processes.append(process)
        
        if riot_processes:
            logger.info("Riot process found")
            return riot_processes
        else:
            return []
class Extract:
    def __init__(self):
        return
    def token(self, cmd_line):
        match = re.search(r"--remoting-auth-token=([\w-]+)", cmd_line)
        if match:
            token = f"riot:{match.group(1)}"
            return base64.b64encode(token.encode("utf-8")).decode("utf-8")
        else:
            return None

    
class RiotInfo():
    def __init__(self):
        self.cmd_line = None
    def get(self):
        process = Process()
        extract = Extract()
        riot = RiotClient()
        procs = process.get()
        pid = extract.pid(procs)
        self.cmd_line = extract.cmd_line(pid,procs)
        
if __name__ == "__main__":
    riot_client = RiotClient()
    riot_client.run()
    
    # def port(self,riot_cmd_line):
    #     for arg in riot_cmd_line:
    #         if arg.startswith("--app-port"):
    #             riot_port = arg.split("=")[1]
    #             return riot_port
    #     return None
    # cmd_line = extract.cmd_line(riot_client.pid,procs.process_list)
    # riot_client.token = extract.token(" ".join(cmd_line))

    # headers = (request.format_headers(riot_client))
 
    
    # riot_client.login(headers,login_body)
   



    

# def login():
#     riot_info = RiotInfo()
#     riot_info.get()
    

#     riot_token = get_riot_token(" ".join(riot_info.cmd_line))

#     headers = create_request_info(client_info)
#     print(client_info.riot_port,headers)
    
#     login_body = {"username": username, "password": password, "persistLogin": False}
  
#     print(authres.text)

#     print(res.text)
#     storeurl = f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/authorization/userinfo"
#     userinfores = requests.post(storeurl, headers=headers, verify=False)
#     print(userinfores.text)
