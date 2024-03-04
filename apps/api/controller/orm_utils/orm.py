from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.orm import declarative_base

Base = declarative_base()

# Definição da tabela "booster"


class booster(Base):
    __tablename__ = "booster"
    id = Column(Integer, primary_key=True)
    login = Column(String)
    password = Column(String)


# Definição da tabela "usuario"


class user(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True)
    login = Column(String)
    password = Column(String)


# Definição da tabela "order" com chaves estrangeiras para "booster" e "usuario"


class order(Base):
    __tablename__ = "order"
    id = Column(Integer, primary_key=True)
    Accountname = Column(String)
    accountTag = Column(String)
    eloWhenOrdered = Column(String)
    usernameLogin = Column(String)
    passwordLogin = Column(String)
    idBooster = Column(Integer, ForeignKey("booster.id"))
    idCliente = Column(Integer, ForeignKey("user.id"))

    booster = relationship("booster", foreign_keys=[idBooster])

    cliente = relationship("user", foreign_keys=[idCliente])
