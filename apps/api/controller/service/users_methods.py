from ..orm_utils.db_connection import DbManagements
from ..orm_utils.orm import user
from sqlalchemy.exc import SQLAlchemyError

from contextlib import contextmanager

db = DbManagements()


@contextmanager
def session_scope():
    """Provide a transactional scope around a series of operations."""
    session = db.connect_to_db()
    try:
        yield session
        session.commit()
    except SQLAlchemyError as e:
        print(f"Erro no banco de dados: {e}")
        session.rollback()
        raise
    finally:
        session.close()


def user_register(login, password):
    try:
        with session_scope() as session:
            new_user = user(login=login, password=password)
            session.add(new_user)
            return "Inserção bem-sucedida!"
    except SQLAlchemyError as e:
        print(f"Erro na conexão ou criação de tabelas: {e}")


def login_authentication(username, password):
    try:
        with session_scope() as session:
            booster_validation = (
                session.query(user).filter_by(
                    login=username, password=password).first()
            )
            if booster_validation:
                print("Usuário validado com sucesso!")
            else:
                print("Usuário não encontrado ou senha incorreta.")
    except SQLAlchemyError as e:
        print(f"Erro ao validar booster: {e}")


def delete_user(user):
    # delete booster, user , where id == ${{user,booster}.id}
    with db.connect_to_db() as session:
        session.query(user).filter(user == user).delete()


def generate_data():
    customers = [
        {"name": "menorgamer123", "passw": "alan112233445566"},
        {"name": "ironangel55", "passw": "coalminer2"},
        {"name": "redtailears23", "passw": "Venezuela71"},
        {"name": "ljm1005412", "passw": "Wjdals87"},
        {"name": "chainerdm", "passw": "Goblins69"},
    ]
    for name in customers:
        name = user["name"]
        passw = user["passw"]
        user_register(name, passw)
