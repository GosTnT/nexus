def user_validation(username, password):
    try:
        with session_scope() as session:
            # Verifica se há um usuário com o nome de usuário e senha fornecidos
            user = (
                session.query(users)
                .filter_by(login=username, password=password)
                .first()
            )
    except SQLAlchemyError as e:
        print(f"Erro ao validar booster: {e}")
