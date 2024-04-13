import psutil
import requests
import re
import base64
from requests.packages.urllib3.exceptions import InsecureRequestWarning

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)


def lol_client_login(username, password):
    riot_proc_name = "CrBrowserMain"
    league_client_name = "LeagueClientUx.exe"

    class ClientInfo:
        def __init__(self, riot_token, riot_port):
            self.riot_token = riot_token
            self.riot_port = riot_port

    def create_request_info(client_info):
        headers = {
            "Host": f"127.0.0.1:{client_info.riot_port}",
            "Connection": "keep-alive",
            "Authorization": f"Basic {client_info.riot_token}",
            "Accept": "application/json",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "127.0.0.1",
            "Content-Type": "application/json",
            "Origin": f"https://127.0.0.1:{client_info.riot_port}",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?F",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) (CEF 74) "
            f"Safari/537.36",
            "sec-ch-ua": "Chromium",
            "Referer": f"https://127.0.0.1:{client_info.riot_port}/index.html",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
        }
        return headers

    def get_running_procs():
        procs = {p.pid: p.info for p in psutil.process_iter(["name", "cmdline"])}
        return procs

    def get_riot_pid(procs):
        riot_pid = next(
            (pid for pid, info in procs.items() if info.get("name") == riot_proc_name),
            None,
        )
        return riot_pid

    def get_riot_cmd_line(riot_pid, procs):
        riot_cmd_line = procs.get(riot_pid, {}).get("cmdline")
        return riot_cmd_line

    def get_riot_token(cmd_line):
        regex_str = r"--remoting-auth-token=([\w-]*)"
        match = re.search(regex_str, cmd_line)

        if match:
            token = f"riot:{match.group(1)}"
            return base64.b64encode(token.encode("utf-8")).decode("utf-8")

        return ""

    def get_riot_port(riot_cmd_line):
        riot_port = riot_cmd_line[1].split("=")[1]
        return riot_port

    def send_data_for_client(endpoint, headers, data):
        try:
            response = requests.put(endpoint, json=data, headers=headers, verify=False)
            return response
        except Exception as e:
            return f"Failed request: {e}"

    def login_with_riot_proc_info():
        procs_running = get_running_procs()

        riot_pid = get_riot_pid(procs_running)
        riot_cmd_line = get_riot_cmd_line(riot_pid, procs_running)

        riot_port = get_riot_port(riot_cmd_line)
        riot_token = get_riot_token(" ".join(riot_cmd_line))

        client_info = ClientInfo(riot_token, riot_port)

        headers = create_request_info(client_info)

        login_body = {"username": username, "password": password, "persistLogin": False}
        body = {"clientId": "riot-client", "trustLevels": ["always_trusted"]}
        endpoint = (
            f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v2/authorizations"
        )
        # requests.post(endpoint, json=body, headers=headers, verify=False)
        endpoint = (
            f"https://127.0.0.1:{client_info.riot_port}/rso-auth/v1/session/credentials"
        )
        res = send_data_for_client(endpoint, headers, login_body)
        print(res)

    login_with_riot_proc_info()


if __name__ == "__main__":
    lol_client_login("menorgamer123", "alan112233445566")
