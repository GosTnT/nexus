
import os
import subprocess
import time
from utils import RiotUtils,Extract
from system import Process
from request import Request
from logger import Logger


logger = Logger()


    
     
class RiotClient():
    def __init__(self):
        self.ports_list = []
        self.utils = RiotUtils()
        self.path = self.utils.create_temp_shortcut()
        self.port = self.utils.find_open_port()
        self.riot_proc_name = os.getenv("RIOT_PROC_NAME")
        self.command = f'"{self.path}" {f"--app-port={self.port} --allow-multiple-clients --launch-product=league_of_legends --launch-patchline=live"}'
        self.token = None
        self.pid = None
        self.extract = Extract()
        self.process = Process()
        self.request = Request()
        
        
    def run(self):
        timeout = 10  # Tempo limite em segundos
        start_time = time.time()
        if not self.league_is_ready():
            self.open()
            while not self.league_is_ready():
                if time.time() - start_time > timeout:
                   logger.error("Tempo limite excedido ao aguardar processo League of Legends.")
                   break
                time.sleep(0.2)
                logger.debug("Pegando todos os processos novamente")
        self.login()

    def league_is_ready(self):
        logger.info("Procurando por processos...")
        processes = self.process.get_riot_client()
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
            self.ports_list.append(self.port)
            self.pid = process.pid
            return
        else:
            logger.error(f"Could'nt open League")

if __name__ == "__main__":
    riot_client = RiotClient()
    riot_client.run()
    


#     storeurl = f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/authorization/userinfo"
#     userinfores = requests.post(storeurl, headers=headers, verify=False)
#     print(userinfores.text)
