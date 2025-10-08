# Docker Setup for Vue Microfrontends POC

This document explains how to run the Vue microfrontends application using Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Services

The application consists of four microfrontend services:

1. **Orchestrator** - Main application (Port: 8080)
2. **Auth** - Authentication microfrontend (Port: 8081)
3. **Marketplace** - Marketplace microfrontend (Port: 8082)
4. **Profile** - Profile microfrontend (Port: 8083)

## Quick Start

1. **Build and start all services:**

   ```bash
   docker-compose up --build
   ```

2. **Start services in detached mode:**

   ```bash
   docker-compose up -d --build
   ```

3. **Stop all services:**

   ```bash
   docker-compose down
   ```

4. **View logs:**

   ```bash
   docker-compose logs -f
   ```

5. **View logs for a specific service:**
   ```bash
   docker-compose logs -f orchestrator
   ```

## Development

The Docker setup includes volume mounts for development, so changes to your source code will be reflected in the running containers without rebuilding.

### Rebuilding a specific service:

```bash
docker-compose up --build orchestrator
```

### Running a single service:

```bash
docker-compose up auth
```

## Accessing the Application

Once all services are running, you can access:

- **Main Application**: http://localhost:8080
- **Auth Service**: http://localhost:8081
- **Marketplace Service**: http://localhost:8082
- **Profile Service**: http://localhost:8083

## Authentication

The application uses reqres.in for authentication. Use these test credentials:

- **Email**: `eve.holt@reqres.in`
- **Password**: `cityslicka`

Or any other valid email format with the password `cityslicka`.

## Troubleshooting

### Port conflicts

If you encounter port conflicts, you can modify the port mappings in `docker-compose.yml`:

```yaml
ports:
  - "9080:8080" # Change 8080 to 9080 on host
```

### Container issues

- **Rebuild containers**: `docker-compose up --build --force-recreate`
- **Remove all containers and volumes**: `docker-compose down -v`
- **Clean up Docker system**: `docker system prune -a`

### Service dependencies

The orchestrator service depends on all other services, and the profile service depends on the marketplace service. Docker Compose will handle the startup order automatically.

## Production Considerations

For production deployment, consider:

- Using multi-stage builds to reduce image size
- Setting up proper health checks
- Configuring resource limits
- Using Docker secrets for sensitive data
- Setting up proper logging and monitoring
