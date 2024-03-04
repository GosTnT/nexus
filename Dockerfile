
# Use the official PostgreSQL image for version 16.1-bookwormFROM postgres:16.1-bookworm

# Set environment variables
ENV POSTGRES_DB=${DB_NAME}
ENV POSTGRES_USER=${DB_USER}
ENV POSTGRES_PASSWORD=${DB_PASSWORD}
ENV POSTGRES_ROOT_PASSWORD=${DB_ROOT_PASSWORD}

# Expose the PostgreSQL default port
EXPOSE 5432

# Define a volume for PostgreSQL data storage
VOLUME /var/lib/postgresql/data
