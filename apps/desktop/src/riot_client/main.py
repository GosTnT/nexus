import os
import time
import subprocess
import time
from typing import Optional
from Scripts.bottle import error

from .utils import Utils
from .account import Account
import requests
from .logger_cfg import logger
from .process import CommandLine, Process
import urllib3

import json
from .lcu_connector import start_connector
urllib3.disable_warnings()


class ClientDict:
    def __init__(self, token: str, port: int):
        self.token = token
        self.port = port
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
    def __init__(self):
        self.request = Request()

        self.process = Process()
        self.command_line = CommandLine()

    def open(self):
        exe_path = r'C:\Riot Games\Riot Client\RiotClientServices.exe'
        try:
            # Use subprocess for more control
            process = subprocess.Popen(exe_path)
            exit_code = process.wait()

            if exit_code == 0:
                print("League of Legends opened successfully.")
            else:
                print(f"Failed to open League of Legends with exit code {exit_code}.")

        except FileNotFoundError:
            print(f"The .exe file '{exe_path}' was not found.")
        except PermissionError:
            print(f"Permission denied to open '{exe_path}'.")
        except Exception as e:
            print(f"An error occurred: {e}")



    def is_open(self) -> Optional[ClientDict]:
        processes = self.process.get_riot_client()
        for proc in processes:
            cmdline = " ".join(proc["cmdline"])
            token = self.command_line.get_token(cmdline)
            port = self.command_line.get_port(cmdline)
            if port and token:
                return ClientDict(token, port)
        return None

            
    def login(self, client,login_credentials):
        endpoint = "rso-auth/v1/session/credentials"
        port = client.port
        token = client.token
        if port and token:
            self.request.put(port=port, token=token, endpoint=endpoint, body=login_credentials)
        else:
            logger.error(f"login doenst receive port or token {port,token}")



def start_app():
    accounts = Account()

    riot_client= RiotClient()

    account_list = accounts.get()
    if account_list is None:
        raise 'No accounts provided'
    first_account = account_list[0]
    riot_credentials = riot_client.is_open()
    print('port:',riot_credentials.port,"token:",riot_credentials.token)
    if riot_credentials is None:
        raise 'no client opened'
    riot_client.login(riot_credentials,first_account)







    # Start the connector (previously in a separate thread)
    # start_connector()

    # Replace the infinite loop with a single-threaded version



if __name__ == "__main__":
    start_app()
    
        
    
  
        
 #   t = threading.Thread(target = riot_client.run)
    


#     storeurl = f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/authorization/userinfo"
#     userinfores = requests.post(storeurl, headers=headers, verify=False)
#     print(userinfores.text)
# 