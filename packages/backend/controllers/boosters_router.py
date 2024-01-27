from fastapi import APIRouter
from models.boosters_methods import get_all_booster_orders

router = APIRouter()


@router.get("/")
def home():
    return {"welcome": "works"}


@router.get("/{booster_name}/orders/all")
def getorders(booster_name: str):
    res = get_all_booster_orders(booster_name)
    return res
