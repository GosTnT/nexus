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


import winshell
import tempfile
logger.add(sys.stderr, format="{time} {level} {message}", filter="nexus", level="INFO")
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
load_dotenv()



def find_open_port(start_port=9050, end_port=65535):
    logger.info("looking for ports")
    for port in range(start_port, end_port + 1):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(('localhost', port))
                return port
            except OSError:
                continue
    raise RuntimeError('Não há portas disponíveis no intervalo especificado.')




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
      

# Chame a função para criar o atalho temporário e executá-lo

class Request:
    def __init__(self):
        return
    def format_headers(riot_client):
        headers = {
            "Host": f"127.0.0.1:{riot_client.port}",
            "Connection": "keep-alive",
            "Authorization": f"Basic {riot_client.token}",
            "Accept": "application/json",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "127.0.0.1",
            "Content-Type": "application/json",
            "Origin": f"https://127.0.0.1:{riot_client.port}",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?F",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) (CEF 74) "
            f"Safari/537.36",
            "sec-ch-ua": "Chromium",
            "Referer": f"https://127.0.0.1:{riot_client.port}/index.html",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
        }
        return headers

utils = Utils()
class RiotClientList:
    def __init__(self):
        self.RiotClientPortList = []
        
class RiotClient:
    def __init__(self):
        self.path = utils.create_temp_shortcut()
        self.token = None
        self.port = find_open_port()
        self.pid = None
        self.command = f'"{self.path}" {f"--app-port={self.port} --allow-multiple-clients"}'
        self.login_endpoint = f"https://127.0.0.1:{self.port}/rso-auth/v1/session/credentials"
        
    def run(self):
        self.open()
        self.login(self.headers, self.login_body)
    def login(self,headers, login_body): 
        response = requests.put(self.login_endpoint, json=login_body, headers=headers, verify=False)
        if response.status_code == 201:
            logger.info(f"text: {response.text}, code: {response.status_code}")
        else:
            logger.error(f"text: {response.text}, code: {response.status_code} \n pid: {self.pid} \n port: {self.port} \n token: {self.token}")
        return
    def open(self):
        process = subprocess.Popen(self.command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        logger.info("subprocess initialized")

        if process.pid:
            self.pid = process.pid
            logger.info(f"League openned: {self.pid}")

            # Aguarda o processo do cliente terminar de carregar
            while True:
                if psutil.pid_exists(self.pid):
                    try:
                        p = psutil.Process(self.pid)
                        if p.status() == psutil.STATUS_RUNNING:
                            break
                    except psutil.NoSuchProcess:
                        logger.error(f"League process terminated unexpectedly")
                        return
                else:
                    logger.error(f"League process terminated unexpectedly")
                    return

            logger.info(f"League fully loaded: {self.pid}")
            return
        else:
            logger.error(f"Could'nt open League {self.pid}")
      
    
    
class Process:
    def __init__(self):
        self.process_list = []
        self.get()
        return
    def get(self):
        procs = {p.pid: p.info for p in psutil.process_iter(["name", "cmdline"])}
        if procs:
            logger.info(f"Processes found")
            self.process_list = procs
            return 
        else:
            logger.info(f"error getting processes: {procs}")

class Extract:
    def __init__(self):
        return
    
    def cmd_line(self,riot_pid,procs):
        riot_cmd_line = procs.get(riot_pid)        
        if riot_cmd_line["command_line"]:
            logger.info(f"cmd_line_found {riot_cmd_line}")
            return riot_cmd_line["command_line"]
        return
    def token(cmd_line):
        regex_str = r"--remoting-auth-token=([\w-]*)"
        match = re.search(regex_str, cmd_line)

        if match:
            token = f"riot:{match.group(1)}"
            logger.info(f"token found: {token}")
            return base64.b64encode(token.encode("utf-8")).decode("utf-8")

        return ""
    def pid(procs):
        riot_pids = []
        for pid, info in procs.items():
            if info.get("name") == selfproc_name:
                riot_pids.append(pid)
        return riot_pids if riot_pids else None
    def port(riot_cmd_line):
        for arg in riot_cmd_line:
            if arg.startswith("--app-port"):
                riot_port = arg.split("=")[1]
                return riot_port
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
    

def login_multiple(username,password):
    extract = Extract()
    riot_client = RiotClient()
    request = Request()
    procs = Process()

    riot_client.run()

    for _, info in procs.process_list.items():
        if info.get("name") == "Riot Client.exe":
            logger.info(info.get("name"))
            

    cmd_line = extract.cmd_line(riot_client.pid,procs.process_list)
    riot_client.token = extract.token(" ".join(cmd_line))

    headers = (request.format_headers(riot_client))
 
    login_body = {"username": username, "password": password, "persistLogin": False}
    riot_client.login(headers,login_body)
   



    

# def login():
#     riot_info = RiotInfo()
#     riot_info.get()
    

#     riot_token = get_riot_token(" ".join(riot_info.cmd_line))

#     headers = create_request_info(client_info)
#     print(client_info.riot_port,headers)
    
#     login_body = {"username": username, "password": password, "persistLogin": False}
#     endpoint = (
#         f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/session/credentials"
#     )

#     res = send_data_for_client(endpoint, headers, login_body)
#     body = {"clientId": "riot-client", "trustLevels": ["always_trusted"]}
#     endpoint = (
#         f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v2/authorizations"
#     )
#     authres = requests.post(endpoint, json=body, headers=headers, verify=False)
#     print(authres.text)

#     print(res.text)
#     storeurl = f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/authorization/userinfo"
#     userinfores = requests.post(storeurl, headers=headers, verify=False)
#     print(userinfores.text)
if __name__ == "__main__":
    login_multiple("menorgamer123","alan112233445566")
    
