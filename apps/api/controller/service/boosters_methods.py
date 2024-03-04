from contextlib import contextmanager
from sqlalchemy.exc import SQLAlchemyError

from controller.orm_utils.db_connection import DbConfigurations
from controller.orm_utils.orm import booster, order

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


def get_all_booster_orders(booster_name):
    try:
        with session_scope() as session:
            all_booster_orders = (
                session.query(order).filter(order.booster == booster.id).all()
            )
            return all_booster_orders
    except Exception as e:
        print(f"Erro ao buscar ordens do booster: {e}")
        return []
