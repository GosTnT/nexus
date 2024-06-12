import os
import psutil
import re 
import base64
class CommandLine():
    def __init__(self):
        return
    
    def get_token(self, cmd_line):
        match = re.search(r"--remoting-auth-token=([\w-]+)", cmd_line)
        if match:
            token = f"riot:{match.group(1)}"
            return base64.b64encode(token.encode("utf-8")).decode("utf-8")
        else:
            return None
        
    def get_port(self, cmd_line)-> int | None:
        match = re.search(r"--app-port=([\w-]+)", cmd_line)
        if match :
            return int(match.group(1))
        else:
            return None
        
class Process:
    def __init__(self):
        self.riot_proc_name = os.getenv("RIOT_PROC_NAME")
        self.riot_processes =  []
        return
    def get_riot_client(self):
        process_list = [p.info for p in psutil.process_iter(["name", "cmdline"])]
        for process in process_list:
            if process["name"] == self.riot_proc_name:
                self.riot_processes.append(process)
        
        if self.riot_processes:
            return self.riot_processes
        else:
            return []