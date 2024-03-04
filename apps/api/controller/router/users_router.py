from fastapi import APIRouter, Request, HTTPException
from ..service.users_methods import login_authentication, user_register


user_router = APIRouter()


@user_router.get("/")
def home():
    return {"welcome": "works"}


@user_router.post("/register")
async def register_user(request: Request):
    data = await request.json()

    username = data.get("login")
    password = data.get("password")

    if not username or not password:
        raise HTTPException(
            status_code=400, detail="Username and password are required"
        )

    res = user_register(username, password)
    return res
    #
    # except Exception:
    #     raise HTTPException(status_code=500, detail="Internal Server Error")


@user_router.post("/login/")
async def login_in_db(request: Request):
    try:
        data = await request.json()
        username = data.get("login")
        password = data.get("password")
        if not username or not password:
            raise HTTPException(
                status_code=400, detail="Username and password are required"
            )
        login_authentication(username, password)
        return {"message": "Login successful"}

    except Exception:
        raise HTTPException(status_code=500, detail="Internal Server Error")
