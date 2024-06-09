
from typing import  List, Union,ByteString
from enum import Enum
from dataclasses import dataclass
class Status(Enum):
    WAITING = "waiting"
    AUTHENTICATED = "authenticated"
    DONE = "done"

@dataclass
class ClientDict:
    token: str
    port: int
    status: Status

class RiotClientManager:
    def __init__(self):
        self.clients: List[ClientDict] = []
    
    def add(self, token: str, port: int, status: Status) -> None:
        client = ClientDict(token=token, port=port, status=status)
        self.clients.append(client)
    
    def remove(self, port: int) -> None:
        self.clients = [client for client in self.clients if client.port != port]
    
    def get_by_port(self, port: int) -> Union[ClientDict, None]:
        for client in self.clients:
            if client.port == port:
                return client
        return None
    
    def update_status_by_port(self, port: int, new_status: Status) -> None:
        client = self.get_by_port(port)
        if client:
            client.status = new_status
    def get_clients_by_status(self, status: Status) -> List[ClientDict]:
        return [client for client in self.clients if client.status == status]        
    
    def __repr__(self) -> str:
        return f"ClientManager(clients={self.clients})"