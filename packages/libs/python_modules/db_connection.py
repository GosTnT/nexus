import os

from sqlalchemy import create_engine, exc
from sqlalchemy.orm import sessionmaker

from .my_orm import Base

db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")
db_port = os.getenv("DB_PORT")

#  "postgresql+psycopg2://postgres:-G2gCb1f4G3*AaFc3F6bDdeafdDbG3fC@viaduct.proxy.rlwy.net: 26114/railway" model of connection string to railway postgres

connection_string = (
    f"postgresql+psycopg2://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"
)
engine = create_engine(connection_string, echo=True)


def create_tables():
    Base.metadata.create_all(engine)


def connect_to_db():
    try:
        Session = sessionmaker(bind=engine)
        return Session()
    except exc.SQLAlchemyError as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return None


if __name__ == "__main__":
    connected = connect_to_db()
    if connected:
        session = create_tables()
