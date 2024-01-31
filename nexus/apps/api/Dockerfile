# Use a imagem base do Python
FROM python:3.12.1-bookworm

# Define o diretório de trabalho no contêiner
WORKDIR /api

ARG YOUR_ENV

ENV YOUR_ENV=${YOUR_ENV} \
  PYTHONFAULTHANDLER=1 \
  PYTHONPATH=/apps/api/controller/router:apps/api/controller/orm:/apps/api/controller/service:/apps/api/controller/tests\
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100 \
  # Poetry's configuration:
  POETRY_NO_INTERACTION=1 \
  POETRY_VIRTUALENVS_CREATE=false \
  POETRY_CACHE_DIR='/var/cache/pypoetry' \
  POETRY_HOME='/usr/local'\
  POETRY_VERSION=1.7.1
# ^^^
# Make sure to update it!

# System deps:
RUN pip install poetry==${POETRY_VERSION}
# Copy only requirements to cache them in docker layer
COPY apps/api/poetry.lock /api
COPY apps/api/pyproject.toml /api

# Project initialization:
RUN poetry shell
RUN poetry install
# Copia todo o conteúdo do diretório local para o diretório de trabalho no contêiner
COPY apps/api /api


# Comando de execução da aplicação 
CMD ["uvicorn", "main:app", "--reload", "--port=80", "--host=0.0.0.0"]
