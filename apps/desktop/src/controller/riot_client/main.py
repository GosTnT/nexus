import time
import subprocess
from utils import Utils
from account import Account
import requests
from logger_cfg import logger
from process import CommandLine, Process
from client_manager import RiotClientManager, Status
import urllib3
import json
urllib3.disable_warnings()


class Request():
    def __init__(self):
        self.base_url = "https://127.0.0.1"  # Corrigido o endereço IP 
    
        return
    def put(self,token:str,port:int,endpoint:str,body:dict):
        headers= Utils.prepare_headers(port,token)
        json_body = json.dumps(body)
        uri = f"{self.base_url}:{port}/{endpoint}"
        logger.debug(f"uri: {uri}")
        logger.debug(f"headers:{headers}")
        response =requests.put(url=uri,headers=headers,data=json_body,verify=False)
        
        if response.status_code == 201:
            logger.info("User authenticated sucessfully ")
        else:
            logger.error(f"text: {response.text}, code: {response.status_code}")


class RiotClient():
    def __init__(self,login_credentials):
        self.login_credentials = login_credentials
        self.request = Request()
        self.riot_client_manager = RiotClientManager()
        
    
    def find_open(self):
        
        self.process = Process()
        self.command_line = CommandLine()
        processes = self.process.get_riot_client()
        for proc in processes:
            cmdline = " ".join(proc["cmdline"])
            token = self.command_line.get_token(cmdline)
            port = self.command_line.get_port(cmdline)
            if port and token:
                logger.debug(f"port:{port}\n token:{token}")
                if not self.riot_client_manager.get_by_port(port=port):
                    self.riot_client_manager.add(port=port,token=token,status=Status.WAITING)
                    return True
        return False
 
    def open(self):
        path = Utils.create_temp_shortcut()
        args = f'"{path}" {f"--allow-multiple-clients --launch-product=league_of_legends --launch-patchline=live"}'
        process = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        if process.pid:
            logger.info(f"League Opened")
            return
        else:
            logger.error(f"Could'nt open League")

   
    def login(self):
        endpoint = "rso-auth/v1/session/credentials"
        if self.riot_client_manager.get_clients_by_status(Status.WAITING):
            port = self.riot_client_manager.get_clients_by_status(Status.WAITING)[0].port
            token = self.riot_client_manager.get_clients_by_status(Status.WAITING)[0].token
            logger.debug(f"Token: {token}" ,f"port: {port}" )
            if port and token:
                self.request.put(port=port,token=token,endpoint=endpoint,body=self.login_credentials)
                self.riot_client_manager.update_status_by_port(port=port,new_status=Status.AUTHENTICATED)
    def start(self):
        if riot_client.find_open():
            riot_client.login()
            return
        riot_client.open()
        logger.debug("waiting for client to be available...")
        while not riot_client.find_open():
            time.sleep(2)
            logger.debug("find_open_executing")
        while not self.riot_client_manager.get_clients_by_status(status=Status.WAITING):
            time.sleep(1)
        riot_client.login()
            
        
            
            
    

if __name__ == "__main__":
    
    accounts = Account()
    for account in accounts.get():
        riot_client = RiotClient(login_credentials=account)
        riot_client.start()
        
        
 #   t = threading.Thread(target = riot_client.run)
    


#     storeurl = f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/authorization/userinfo"
#     userinfores = requests.post(storeurl, headers=headers, verify=False)
#     print(userinfores.text)
