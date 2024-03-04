import os
from sqlalchemy import create_engine, exc
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()


class DbConfigurations:
    def __init__(
        self,
        echo=True,
    ):
        # Verifica se as variáveis de ambiente estão definidas
        self.prod_url = os.getenv("DATABASE_PRIVATE_URL")
        self.db_user = os.getenv("DB_USER")
        self.db_password = os.getenv("DB_PASSWORD")
        self.db_host = os.getenv("DB_HOST")
        self.db_name = os.getenv("DB_NAME")
        self.echo = True
        self.db_port = os.getenv("DB_PORT")
        self.test_port = os.getenv("DB_TEST_PORT")

    def create_main_db_engine(self):
        connection_string = f"postgresql+psycopg2://{self.db_user}:{self.db_password}@{self.db_host}:5432/{self.db_name}"  # NOQA
        return create_engine(connection_string, echo=self.echo)

    def create_production_db_engine(self):
        connection_string = self.prod_url
        return create_engine(connection_string, echo=self.echo)

    def create_test_db_engine(self):
        connection_string = f"postgresql+psycopg2://{self.db_user}:{self.db_password}@{self.db_host}:{self.test_port}/{self.db_name}"  # NOQA
        return create_engine(connection_string, echo=self.echo)


class DbManagements:
    def __init__(self):
        self.db = DbConfigurations()
        pass

    def connect_to_db(self):
        try:
            engine = self.db.create_production_db_engine()
            Session = sessionmaker(bind=engine)
            session = Session()
            return session

        except exc.SQLAlchemyError as e:
            return {f"Erro ao conectar ao banco de dados: {e}"}
