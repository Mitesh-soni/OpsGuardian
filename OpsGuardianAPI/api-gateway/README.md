# API Gateway

API Gateway for OpsGuardian microservices architecture. This service acts as a single entry point for all client requests and routes them to the appropriate microservices.

## Description

The API Gateway provides:
- Unified API endpoint for all microservices
- Request routing and forwarding
- Service discovery
- Load balancing capabilities
- CORS handling
- Health checks

## Architecture

The gateway routes requests to the following microservices:
- **User Service** (port 3001) - `/api/users/*`
- **Alert Service** (port 3002) - `/api/alerts/*`
- **Incident Service** (port 3003) - `/api/incidents/*`
- **Notification Service** (port 3004) - `/api/notifications/*`
- **OnCall Service** (port 3005) - `/api/oncall/*`
- **Analytics Service** (port 3006) - `/api/analytics/*`

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Environment Variables

Create a `.env` file with the following variables:

```env
PORT=3000
USER_SERVICE_URL=http://localhost:3001
ALERT_SERVICE_URL=http://localhost:3002
INCIDENT_SERVICE_URL=http://localhost:3003
NOTIFICATION_SERVICE_URL=http://localhost:3004
ONCALL_SERVICE_URL=http://localhost:3005
ANALYTICS_SERVICE_URL=http://localhost:3006
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## API Endpoints

### Health Check
- `GET /api/health` - Check gateway status

### Service Status
- `GET /api/services` - List all available services and their URLs

### Service Routes
All requests are forwarded to the appropriate service:
- `/api/users/*` → User Service
- `/api/alerts/*` → Alert Service
- `/api/incidents/*` → Incident Service
- `/api/notifications/*` → Notification Service
- `/api/oncall/*` → OnCall Service
- `/api/analytics/*` → Analytics Service

## Docker

```bash
# Build
$ docker build -t opsguardian-api-gateway .

# Run
$ docker run -p 3000:3000 opsguardian-api-gateway
```

## License

UNLICENSED
