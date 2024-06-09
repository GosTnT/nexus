import os
from dotenv import load_dotenv
load_dotenv()
class Account:
    def __init__(self):
        self.list = [{"username": "menorgamer123", "password": "alan112233445566"}] #,{"username": "menorgamer", "password": "alan112233445566"},] 
        return
    def get(self):
        return self.list
    
