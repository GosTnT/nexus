from logger import Logger
import os
import psutil
logger = Logger()

class Process:
    def __init__(self): 
        return
    def get_riot_client(self):
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