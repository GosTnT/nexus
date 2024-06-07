import winshell
from dotenv import load_dotenv
import tempfile
import socket
import os
import sys
from loguru import logger
import re
import base64


load_dotenv()
logger.add(sys.stderr, format="{time} {level} {message}", filter="utils", level="INFO")

class RiotUtils:
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
        for port in range(start_port, end_port + 1):
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                try:
                    s.bind(('localhost', port))
                    logger.info(f"Port: {port}")
                    return port
                except OSError:
                    continue
        raise RuntimeError('Não há portas disponíveis no intervalo especificado.')
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
