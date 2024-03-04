from fastapi.testclient import TestClient
from ..controller.router.users_router import user_router

client = TestClient(user_router)


def test_login_success():
    # Simulate successful login by providing valid username and password
    payload = {"username": "testuser", "password": "testpassword"}
    response = client.post("/login/", json=payload)
    assert response.status_code == 200
    assert response.json() == {"message": "Login successful"}


def test_login_missing_fields():
    # Simulate missing username or password in the request payload
    payload = {"username": "", "password": ""}
    response = client.post("/login/", json=payload)
    assert response.status_code == 400
    assert response.json() == {"detail": "Username and password are required"}


def test_login_internal_server_error():
    # Simulate internal server error by passing invalid data
    payload = {"invalid_key": "invalid_value"}
    response = client.post("/login/", json=payload)
    assert response.status_code == 500
    assert response.json() == {"detail": "Internal Server Error"}
