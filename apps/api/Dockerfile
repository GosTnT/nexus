FROM python:3.12.1-bookworm

# Define the working directory in the container
WORKDIR /api

# Copy only the requirements file to cache it in the Docker layer
COPY requirements.txt /api

RUN pip install -r requirements.txt
ARG PORT
ENV PORT $PORT
# Copy the rest of the application code
COPY . /api
RUN echo $PORT

CMD ["bash", "-c", "uvicorn main:app --port=$PORT --host=0.0.0.0"]
