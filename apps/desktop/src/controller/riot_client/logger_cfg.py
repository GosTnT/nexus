import sys
from loguru import logger

logger.add(sys.stderr, format="{time} {level} {message}", filter="nexus", level="INFO")

log = logger
