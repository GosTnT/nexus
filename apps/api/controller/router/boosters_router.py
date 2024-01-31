from fastapi import APIRouter
from controller.service.boosters_methods import get_all_booster_orders

booster_router = APIRouter()

aa = 2


@booster_router.get("/")
def home():
    return {"welcome": "works"}


@booster_router.get("/orders/{booster_name}")
def getorders(booster_name: str):
    res = get_all_booster_orders(booster_name)
    return res
