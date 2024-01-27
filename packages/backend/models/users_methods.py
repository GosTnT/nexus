from .db_connection import DbConfigurations
from .my_orm import boosters, users, orders

from sqlalchemy.exc import SQLAlchemyError

db = DbConfigurations


def register_in_db(username, password):
    session = db.connect_to_db()
    if session:
        try:
            booster_1 = boosters(login=username, password=password)
            session.add(booster_1)
            session.commit()
        except SQLAlchemyError as e:
            session.rollback()
            return f"erro ao cadastrar usuário{e}"
        finally:
            session.close()


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
    for user in customers:
        name = user["name"]
        passw = user["passw"]
        register_in_db(name, passw)


if __name__ == "__main__":
    generate_data()
