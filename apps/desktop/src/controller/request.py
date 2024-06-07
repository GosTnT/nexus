import requests
from requests.packages.urllib3.exceptions import InsecureRequestWarning

from logger import Logger


logger = Logger()
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

class Request:
    def __init__(self):
        self.username = "menorgamer123"
        self.password = "alan112233445566"
        self.login_body = {"username":self.username, "password":self.password, "persistLogin": False}
        return
    def send_auth_request(self,port,token):
        try:
            login_endpoint = f"https://127.0.0.1:{port}/rso-auth/v1/session/credentials"
            response = requests.put(login_endpoint, json=self.login_body, headers=self.prepare_headers(port,token), verify=False)
        except Exception as e:
            logger.error(f"{str(e)}, {response}")
        return response
    def prepare_headers(self,port,token):
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
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) (CEF 74) "
            f"Safari/537.36",
            "sec-ch-ua": "Chromium",
            "Referer": f"https://127.0.0.1:{port}/index.html",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
        }
        return headers
    def refresh_session(self,port,token):
        try:
            body = {"clientId":"riot-client","trustLevels":["always_trusted"]}
            endpoint = (
                f"https://127.0.0.1:{port}/rso-auth/v2/authorizations"
            )
            refresh_session = requests.post(endpoint,json=body,headers=self.prepare_headers(port,token),verify=False)
            logger.info(f"session refresh: {refresh_session.status_code}")
        except Exception as exception:
            logger.info(exception)