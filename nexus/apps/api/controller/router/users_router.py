from fastapi import APIRouter

from controller.service.users_methods import register_in_db

user_router = APIRouter()


@user_router.get("/")
def home():
    return {"welcome": "works"}


@user_router.post("/register")
def register_user(username: str, password: str):

    res = register_in_db(username, password)
    return res


@user_router.post("/login/")
def login_in_db(username: str, password: str):
    pass
