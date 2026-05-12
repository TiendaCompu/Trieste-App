from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os

from .security import create_access_token

router = APIRouter(prefix="/auth", tags=["Authentication"])


DEMO_ADMIN_EMAIL = os.getenv("DEMO_ADMIN_EMAIL", "demo@zytronix.local")
DEMO_ADMIN_PASSWORD = os.getenv("DEMO_ADMIN_PASSWORD", "change-me")


class LoginRequest(BaseModel):
    email: str
    password: str


@router.post("/login")
def login(data: LoginRequest):
    # DEMO LOGIN
    # Luego se conectará a PostgreSQL.

    if data.email == DEMO_ADMIN_EMAIL and data.password == DEMO_ADMIN_PASSWORD:
        token = create_access_token({
            "sub": data.email,
            "role": "admin"
        })

        return {
            "access_token": token,
            "token_type": "bearer",
            "user": {
                "name": "ZYTRONIX Administrator",
                "role": "admin"
            }
        }

    raise HTTPException(status_code=401, detail="Invalid credentials")
