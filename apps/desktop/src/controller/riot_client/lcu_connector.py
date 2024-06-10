from lcu_driver import MultipleClientConnector 
import psutil
import asyncio


connector = MultipleClientConnector()

@connector.ready
async def connect(connection):
    while True:
        await asyncio.sleep(0.1)
        res = await connection.request("get","/lol-summoner/v1/current-summoner")
        if res.status == 200:
            break
            
    summoner = await connection.request('get', '/lol-summoner/v1/current-summoner')
    if summoner.status == 200:
       print(f'{await summoner.json()}')
    else:
        print(summoner.status)
    psutil.Process.kill(connection.pid)
    # Quando a conexão estiver pronta, você pode fechar o programa ou tomar outras medidas
    # Aqui, estamos encerrando a execução de todas as threads
   

@connector.close
async def disconnect(connection):
    
    print('The client has been closed!')

def start_connector():
    connector.start()
