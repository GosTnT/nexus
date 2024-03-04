from fastapi.testclient import TestClient
from ..controller.router.users_router import user_router

client = TestClient(user_router)


def test_register_user_success():
    payload = {"login": "testuser", "password": "testpassword"}
    response = client.post("/register", json=payload)
    assert response.status_code == 200
    assert response.json() == {"message": "User registered successfully"}


def test_register_user_missing_fields():
    payload = {"login": "", "password": ""}
    response = client.post("/register", json=payload)
    assert response.status_code == 400
    assert response.json() == {"detail": "Username and password are required"}


def test_register_user_internal_server_error():
    # Simulate internal server error by passing invalid data
    payload = {"invalid_key": "invalid_value"}
    response = client.post("/register", json=payload)
    assert response.status_code == 500
    assert response.json() == {"detail": "Internal Server Error"}
