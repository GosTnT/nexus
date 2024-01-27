from sqlalchemy import create_engine
from sqlalchemy.exc import NoResultFound
from sqlalchemy.orm import sessionmaker
from .user_model import Base, User
import os


db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")
db_port = os.getenv("DB_PORT")


def create_session():
    connection_string = f"postgresql+psycopg2://{db_user}:{db_password}@{db_host}:5347/{db_name}"  # noqa  E501
    engine = create_engine(connection_string)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    return session

def check_credentials(username, password):
    session = create_session()

    try:
        user = session.query(User).filter_by(login=username, password=password).one()
        result = {"status": "success", "message": "Credentials matched", "id": user.id}
    except NoResultFound:
        result = {"status": "error", "message": "Invalid credentials"}
    finally:
        session.close()

    return result


if __name__ == "__main__":
    session = create_session()
    if session:
        print("deu bom")
    else:
        print("deu m")
