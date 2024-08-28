import time
import subprocess
import time

from Scripts.bottle import error

from .utils import Utils
from .account import Account
import requests
from .logger_cfg import logger
from .process import CommandLine, Process
from .client_manager import RiotClientManager
import urllib3
from threading import Thread
import os
from dotenv import load_dotenv
import json
from .lcu_connector import start_connector
urllib3.disable_warnings()
load_dotenv()

class Request():
    def __init__(self):
        self.base_url = "https://127.0.0.1"  # Corrigido o endereço IP 
    
        return
    def put(self,token:str,port:int,endpoint:str,body:dict):
        headers= Utils.prepare_headers(port,token)
        json_body = json.dumps(body)
        uri = f"{self.base_url}:{port}/{endpoint}"
        response =requests.put(url=uri,headers=headers,data=json_body,verify=False)
        
        if response.status_code == 201:
            logger.info("User authenticated successfully ")
        else:
            logger.error(f"text: {response.text}, code: {response.status_code}")


class RiotClient():
    def __init__(self,login_credentials,riot_client_manager):
        self.login_credentials = login_credentials
        self.request = Request()
        self.riot_client_manager = riot_client_manager
        self.process = Process()
        self.command_line = CommandLine()
    
   
#
    def open():
        args = r'C:\Riot Games\Riot Client\RiotClientServices.exe --allow-multiple-clients --launch-product=league_of_legends --launch-patchline=live'
        process = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)

        # Wait for a short period to allow the process to start
        time.sleep(5)

        stdout, stderr = process.communicate()

        if process.returncode == 0 and b'Error' not in stderr and b'Error' not in stdout:
            logger.info("League of Legends opened successfully.")
            return True
        else:
            logger.error("Failed to open League of Legends.")
            logger.error(f"stdout: {stdout.decode('utf-8')}")
            logger.error(f"stderr: {stderr.decode('utf-8')}")
            return False

    def is_open(self):
        while True:
            processes = self.process.get_riot_client()
            for proc in processes:
                cmdline = " ".join(proc["cmdline"])
                token = self.command_line.get_token(cmdline)
                port = self.command_line.get_port(cmdline)
                if port and token:
                    if not self.riot_client_manager.client_exists(port=port):
                        self.riot_client_manager.add(port=port,token=token)
            
    def login(self, client):
        endpoint = "rso-auth/v1/session/credentials"
        port = client.port
        token = client.token
        if port and token:
            self.request.put(port=port, token=token, endpoint=endpoint, body=self.login_credentials)
            self.riot_client_manager.remove(port=port)
        else:
            logger.error(f"login doenst receive port or token {port,token}")
    def start(self):
        time.sleep(1)
        if self.riot_client_manager.is_available():
            client = self.riot_client_manager.get_next_free_client()
            self.login(client)
            return
        if self.open():
            while not self.riot_client_manager.is_available():
                time.sleep(1)
                pass
            client = self.riot_client_manager.get_next_free_client()
            self.login(client)
            return
        raise 'league didn"t open sucessefully'


def start_app():
    accounts = Account()
    riot_manager = RiotClientManager()
    
    riot = RiotClient(login_credentials="a",riot_client_manager=riot_manager)
    client_ready = Thread(target=riot.is_open,daemon=True)
    client_ready.start()
    
    for account in accounts.get():
        riot_client = RiotClient(login_credentials=account,riot_client_manager=riot_manager)
        client_open_thread = Thread(target=riot_client.start,name=f"client_open{account}",daemon=True)
        client_open_thread.start()
    
    
    
        
    connector_thread = Thread(target=start_connector, name="connector_listening",daemon=True)
    connector_thread.start()
 
    while True:
        time.sleep(1)
        
if __name__ == "__main__":
    start_app()
    
        
    
  
        
 #   t = threading.Thread(target = riot_client.run)
    


#     storeurl = f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/authorization/userinfo"
#     userinfores = requests.post(storeurl, headers=headers, verify=False)
#     print(userinfores.text)
# 