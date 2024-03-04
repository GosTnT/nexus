from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controller.router.boosters_router import booster_router
from controller.router.users_router import user_router
import os

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

if __name__ == "__main__":
    import uvicorn

    port = os.getenv("PORT", 8000)
    uvicorn.run(app, host="0.0.0.0", port=port)
