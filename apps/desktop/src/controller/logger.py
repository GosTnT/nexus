import sys
from loguru import logger

logger.add(sys.stderr, format="{time} {level} {message}", filter="nexus", level="INFO")

class Logger:
    def __init__(self):
        return
    def info(self,message):
        return logger.info(message)
    def debug(self,message):
        return logger.debug(message)