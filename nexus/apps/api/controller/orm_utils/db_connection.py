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
        self.db_user = os.getenv("DB_USER")
        self.db_password = os.getenv("DB_PASSWORD")
        self.db_host = os.getenv("DB_HOST")
        self.db_name = os.getenv("DB_NAME")
        self.echo = True
        self.default_port = os.getenv("DB_DEFAULT_PORT")
        self.test_port = os.getenv("DB_TEST_PORT")

        def create_main_db_engine(self):
            connection_string = f"postgresql+psycopg2://{self.db_user}:{self.db_password}@{self.db_host}:{self.default_port}/{self.db_name}"  # NOQA
            return create_engine(connection_string, echo=self.echo)

        def create_test_db_engine(self):
            connection_string = f"postgresql+psycopg2://{self.db_user}:{self.db_password}@{self.db_host}:{self.test_port}/{self.db_name}"  # NOQA
            return create_engine(connection_string, echo=self.echo)


db = DbConfigurations()


class DbManagements:
    def __init__(self):
        pass

    def connect_to_db(self):
        try:
            engine = db.create_main_db_engine()
            Session = sessionmaker(bind=engine)
            session = Session()
            return session

        except exc.SQLAlchemyError as e:
            return {f"Erro ao conectar ao banco de dados: {e}"}

        finally:
            session.close()

        #  "postgresql+psycopg2://postgres:-G2gCb1f4G3*AaFc3F6bDdeafdDbG3fC@viaduct.proxy.rlwy.net: 26114/railway" model of connection string to railway postgres  # NOQA
