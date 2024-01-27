# Use a imagem base do Python
FROM python:3.12.1-bookworm

# Define o diretório de trabalho no contêiner
WORKDIR /backend

# Copia o arquivo requirements.txt para o contêiner
COPY api_requirements.txt .

# Instala os pacotes listados no requirements.txt
RUN pip install -r api_requirements.txt

# Copia todo o conteúdo do diretório local para o diretório de trabalho no contêiner
COPY . .

# Comando de execução da aplicação
CMD ["uvicorn", "controllers.main:app", "--reload", "--port=80", "--host=0.0.0.0"]
