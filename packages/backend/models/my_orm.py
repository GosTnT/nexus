from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.orm import declarative_base

Base = declarative_base()

# Definição da tabela "booster"


class boosters(Base):
    __tablename__ = "boosters"
    id = Column(Integer, primary_key=True)
    login = Column(String)
    password = Column(String)


# Definição da tabela "usuario"


class users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    login = Column(String)
    password = Column(String)


# Definição da tabel        a "order" com chaves estrangeiras para "booster" e "usuario"


class orders(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True)
    Accountname = Column(String)
    accountTag = Column(String)
    eloWhenOrdered = Column(String)
    usernameLogin = Column(String)
    passwordLogin = Column(String)
    idBooster = Column(Integer, ForeignKey("boosters.id"))
    idCliente = Column(Integer, ForeignKey("users.id"))

    booster = relationship("boosters", foreign_keys=[idBooster])

    cliente = relationship("users", foreign_keys=[idCliente])
