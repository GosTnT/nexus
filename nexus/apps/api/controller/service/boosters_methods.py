from controller.orm_utils.orm import user, booster, order
from controller.orm_utils.db_connection import DbConfigurations
from sqlalchemy.exc import SQLAlchemyError
from contextlib import contextmanager

db = DbConfigurations


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
        raise  # Propaga a exceção para o chamador da função
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


def get_all_booster_orders(booster):
    try:
        with session_scope() as session:
            all_booster_orders = (
                session.query(order).filter(order.booster == booster.id).all()
            )
            return all_booster_orders
    except Exception as e:
        print(f"Erro ao buscar ordens do booster: {e}")
        return []


def booster_validation(username, password):
    try:
        with session_scope() as session:
            # Verifica se há um usuário com o nome de usuário e senha fornecidos
            booster_validation = (
                session.query(user).filter_by(login=username, password=password).first()
            )
            if booster_validation:
                print("Usuário validado com sucesso!")
                # Faça aqui o que deseja fazer com o usuário validado
            else:
                print("Usuário não encontrado ou senha incorreta.")
    except SQLAlchemyError as e:
        print(f"Erro ao validar booster: {e}")
