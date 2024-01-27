from .my_orm import users, boosters, orders
from .db_connection import connect_to_db
from sqlalchemy.exc import SQLAlchemyError

from contextlib import contextmanager


@contextmanager
def session_scope():
    """Provide a transactional scope around a series of operations."""
    session = connect_to_db()
    try:
        yield session
        session.commit()
    except SQLAlchemyError as e:
        print(f"Erro no banco de dados: {e}")
        session.rollback()
        raise  # Propaga a exceção para o chamador da função
    finally:
        session.close()


def user_register(login, password):
    try:
        with session_scope() as session:
            new_user = users(login=login, password=password)
            session.add(new_user)
            return "Inserção bem-sucedida!"
    except SQLAlchemyError as e:
        print(f"Erro na conexão ou criação de tabelas: {e}")


def get_all_booster_orders(booster):
    try:
        with session_scope() as session:
            all_booster_orders = (
                session.query(orders).filter(orders.booster == boosters.id).all()
            )
            return all_booster_orders
    except Exception as e:
        print(f"Erro ao buscar ordens do booster: {e}")
        return []


def booster_validation(username, password):
    try:
        with session_scope() as session:
            # Verifica se há um usuário com o nome de usuário e senha fornecidos
            booster = (
                session.query(users)
                .filter_by(login=username, password=password)
                .first()
            )
            if booster:
                print("Usuário validado com sucesso!")
                # Faça aqui o que deseja fazer com o usuário validado
            else:
                print("Usuário não encontrado ou senha incorreta.")
    except SQLAlchemyError as e:
        print(f"Erro ao validar booster: {e}")
