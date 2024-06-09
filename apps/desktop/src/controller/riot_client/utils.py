import winshell
from dotenv import load_dotenv
import tempfile
import os
from logger_cfg import log

load_dotenv()

class Utils:
    @staticmethod
    def create_temp_shortcut():
        path = os.getenv("RIOT_PATH")
        # Crie uma pasta temporária
        temp_dir = tempfile.mkdtemp()

        # Caminho completo para o executável
        exe_file  = os.path.basename(str(path))

        # Caminho completo para o atalho temporário na pasta temporária
        shortcut_path = os.path.join(temp_dir, exe_file + ".lnk")

        # Crie o atalho usando winshell
        winshell.CreateShortcut(
            Path=shortcut_path,
            Target=path,
            Description="Shortcut to RiotClientServices"
        )

        return shortcut_path
    @staticmethod
    def prepare_headers(port, token):
        """
        Prepares and returns HTTP headers for a request.

        This method constructs a dictionary of HTTP headers required for making requests to a local server. 
        It includes headers for host, connection type, authorization, content type, and others necessary for CORS and HTTP requests.

        Parameters:
        - port (int): The port number of the local server to which the request is made.
        - token (str): The authorization token used for the Basic Auth header.

        Returns:
        - dict: A dictionary containing the prepared HTTP headers.
        """
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
            "User-Agent": "",
            "sec-ch-ua": "Chromium",
            "Referer": f"https://127.0.0.1:{port}/index.html",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
        }
        return headers
        
        