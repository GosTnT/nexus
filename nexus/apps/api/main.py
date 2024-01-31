from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controller.router.boosters_router import booster_router
from controller.router.users_router import user_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router, prefix="/user")
app.include_router(booster_router, prefix="/booster")
