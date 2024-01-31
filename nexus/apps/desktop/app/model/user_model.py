from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = "booster"

    id = Column(Integer, primary_key=True)
    login = Column(String)
    password = Column(String)
