import json
from .lcu_driver import MultipleClientConnector 
from .window import window
import psutil
import time
from .logger_cfg import log


connector = MultipleClientConnector()
def render_icons(champion_id: int):
    f'https://cdn.communitydragon.org/latest/champion/{champion_id}/square'
STATUS_OK = [200,201,203,204]
class GetOwned:
    def __init__(self, conn):
        self.conn = conn
        self.account ={}

        
    async def _init_account(self):
        log.info("chamou")
        champions_data = await self.champions()
        log.info("cha")
        skins_data = await self.skins()
        log.info("sk")
        rp_data = await self.RP()
        log.info("rp")
        rank_data = await self.current_rank()
        log.info("requisitou")
        # Monta o objeto self.account com os dados obtidos
        self.account = {
            "champion_id": champions_data,
            "skin_id": skins_data,
            "currency": rp_data,
            "current_rank": rank_data
        } 
    async def champions(self):
        champions_ids = []
        response = await self.conn.request('get', '/lol-champ-select-legacy/v1/pickable-champion-ids')
        if response.status == 200:
            items = await response.json()
            for item in items:
                champions_ids.append(item)
        else:
            # Lida com o erro aqui (lança exceção, registra o erro, etc.)
            pass
        return champions_ids
    
    async def skins(self):
        skins = []
        response = await self.conn.request('get', '/lol-champ-select-legacy/v1/pickable-skin-ids')
        if response.status == 200:
            json_res = await response.json()
            for skin_id in json_res:
                skins.append(skin_id)
        else:
            # Lida com o erro aqui (lança exceção, registra o erro, etc.)
            pass
        return skins
        
    async def RP(self):
        response = await self.conn.request('get', '/lol-inventory/v1/wallet/BE')
        if response.status == 200:
            res = await response.json()
            currency = {"BE": res.get("lol_blue_essence", 0), "RP": res.get("RP", 0)} 
            return currency
    
    async def current_rank(self):
        response = await self.conn.request('get', '/lol-ranked/v1/signed-ranked-stats')
        if response.status == 200:
            res = await response.json()
            queues = res["queues"][0]
            rank = queues["rank"]
            lp = queues["leaguePoints"]
            tier = queues["tier"]
            
            ranks = {"rank": rank, "lp": lp, "tier": tier}
            return ranks
        else:
            log.info(response.status)
            # Lida com o erro aqui (lança exceção, registra o erro, etc.)
            pass
        
def close_process(pid : int):
    if psutil.pid_exists(pid):
        log.debug(f"pid {pid}")
        ps = psutil.Process(pid)
        ps.kill()
class Event():
    def __init__(self,window):
        self.window = window
    
    def account_ready(self,account):
        while True:
            window.evaluate_js(f'document.dispatchEvent(new CustomEvent("account_ready", {{ detail: {account} }}))')
            time.sleep(2)
@connector.ready
async def connect(conn):
    log.info("lcu connected")
    while True:
        response = await conn.request('get', '/lol-ranked/v1/signed-ranked-stats') 
        
        if response.status== 200:
            break
        time.sleep(0.1)
        
    event = Event(window)
    get = GetOwned(conn)
    
    await get._init_account()
    
    log.info(get.account)
    event.account_ready(get.account)

    close_process(conn.pid)
    
    
    
   
        
    # Quando a conexão estiver pronta, você pode fechar o programa ou tomar outras medidas
    # Aqui, estamos encerrando a execução de todas as threads
   

@connector.close
async def disconnect(connection):
    print('The client has been closed!')

def start_connector():
    connector.start()
if __name__ == '__main__':
    start_connector()