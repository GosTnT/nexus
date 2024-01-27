import os
from sqlalchemy import create_engine, exc
from sqlalchemy.orm import sessionmaker
from .my_orm import Base
from dotenv import load_dotenv

load_dotenv()


class DbConfigurations:
    def __init__(
        self,
        db_user,
        db_password,
        db_host,
        db_name,
        engine,
        default_port,
        test_port,
        echo=True,
    ):
        # Verifica se as variáveis de ambiente estão definidas
        self.db_user = os.getenv("DB_USER", db_user)
        self.db_password = os.getenv("DB_PASSWORD", db_password)
        self.db_host = os.getenv("DB_HOST", db_host)
        self.db_name = os.getenv("DB_NAME", db_name)
        self.echo = True
        self.default_port = os.getenv("DB_DEFAULT_PORT", default_port)
        self.test_port = os.getenv("DB_TEST_PORT", test_port)

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

    def create_tables(self):
        result = Base.metadata.create_all(db.create_main_db_engine())
        return result

        #  "postgresql+psycopg2://postgres:-G2gCb1f4G3*AaFc3F6bDdeafdDbG3fC@viaduct.proxy.rlwy.net: 26114/railway" model of connection string to railway postgres  # NOQA


if __name__ == "__main__":
    with db.connect_to_db() as session:
        db_management = DbManagements()
        result = db_management.create_tables(db.create_main_db_engine)
        print(result)
