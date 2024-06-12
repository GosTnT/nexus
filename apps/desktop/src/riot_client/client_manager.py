
import threading
from .logger_cfg import log
from queue import Queue


class ClientDict:
    def __init__(self, token: str, port: int):
        self.token = token
        self.port = port

class RiotClientManager:
    def __init__(self):
        self.clients = Queue()
        self.lock = threading.Lock()
        self.removed_clients = []

    def add(self, token: str, port: int) -> None:
        with self.lock:
            client = ClientDict(token=token, port=port)
            self.clients.put(client)
            log.info(f"Added client: token={token}, port={port}")

    def remove(self, port: int) -> None:
        with self.lock:
            qsize = self.clients.qsize()
            removed_clients = []
            for _ in range(qsize):
                client = self.clients.get()
                if client.port != port:
                    removed_clients.append(client)
            for client in removed_clients:
                self.removed_clients.append(client)
                self.clients.put(client)
            log.info(f"Removed client with port: {port}")

    def client_exists(self, port: int) -> bool:
        with self.lock:
            # Verifica os clientes na fila
            for client in self.clients.queue:
                if client.port == port:
                    return True
            # Verifica os clientes removidos
            for client in self.removed_clients:
                if client.port == port:
                    return True
        return False    
    def is_available(self):
        with self.lock:
            return self.clients.qsize() > 0
        
    def get_next_free_client(self) -> ClientDict |None:
        with self.lock:
            try:
                client = self.clients.get_nowait()
                self.removed_clients.append(client)
                log.info(f"Got client from queue: {client.port}")
                return client
            except Exception as e:
                return None
    def __repr__(self) -> str:
        with self.lock:
            return f"ClientManager(clients={list(self.clients.queue)})"