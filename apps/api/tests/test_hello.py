# from ..models.db_connection import (
#     DbConfigurations,
# )
# import pytest
# from ..models.my_orm import Base
#
# db = DbConfigurations()
#
#
# @pytest.fixture(scope="class")
# def database_session(request):
#     # Setup: Connect to the database
#     session = db.connect_to_db()
#
#     # Provide the session to the test class
#     request.cls.session = session
#
#     yield session  # This is where the testing happens
#
#     # Teardown: Close the session after the tests are done
#     session.rollback()
#     session.close()
#
#
# class TestDatabase:
#     class TestDatabase:
#         def test_db_connection(self, database_session):
#
#             result = database_session.execute("SELECT 1")
#             assert result.scalar() == 1
#
#         def test_create_table(self, database_session):
#             print(db.create_tables())
#             assert 1 != 1
#
#         def test_drop_table(self):
#             engine = db.create_test_db_engine()
#             result = Base.metadata.drop_all(engine)
#             print(result)
#             assert 1 != 1
