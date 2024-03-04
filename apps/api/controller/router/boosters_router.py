from fastapi import APIRouter, Request

from ..service.boosters_methods import get_all_booster_orders

booster_router = APIRouter()


@booster_router.get("/")
def home():
    return {"welcome": "works"}


@booster_router.get("/orders")
def get_orders(request: Request):
    booster_name = request.headers.get("booster_name")
    if booster_name is None:
        return "Booster name not found in headers", 400  # Bad request status code

    res = get_all_booster_orders(booster_name)
    return res
