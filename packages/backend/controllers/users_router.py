from fastapi import APIRouter

from models.users_methods import register_in_db

router = APIRouter()


@router.get("/")
def home():
    return {"welcome": "works"}


@router.post("/register/{username}/{password}")
def register_user(username: str, password: str):
    fodase = register_in_db(username, password)
    return fodase


@router.post("/login/{username}/{password}")
def login_in_db(username: str, password: str):
    pass
