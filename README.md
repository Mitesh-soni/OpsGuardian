# OpsGuardian

A microservices-based incident management and monitoring platform built with NestJS and React.

## 🏗️ Project Structure

```
OpsGuardian/
├── OpsGuardianAPI/          # Backend microservices
│   ├── api-gateway/         # API Gateway - Single entry point for all services
│   ├── user-service/        # User Service - User management and authentication
│   ├── alert-service/       # Alert Service - Alert creation and management
│   ├── incident-service/    # Incident Service - Incident tracking and resolution
│   ├── notification-service/# Notification Service - Email/SMS/Slack notifications
│   ├── oncall-service/      # OnCall Service - On-call schedule management
│   └── analytics-service/   # Analytics Service - Metrics and reporting
└── OpsGuardianUI/           # Frontend React application
```

## 🚀 Services Overview

### API Gateway (Port: 12400)
Single entry point for all microservices with request routing, CORS handling, and future GraphQL support.

### User Service (Port: 12401)
Handles user authentication, authorization, profile management, and JWT token generation.

### Alert Service (Port: 12402)
Manages alert creation, tracking, severity levels, and alert lifecycle management.

### Incident Service (Port: 12403)
Tracks incidents, manages incident lifecycle, assigns responders, and maintains incident history.

### Notification Service (Port: 12404)
Sends notifications via multiple channels (Email, SMS, Slack) for alerts and incidents.

### OnCall Service (Port: 12405)
Manages on-call schedules, rotations, escalation policies, and on-call duty assignments.

### Analytics Service (Port: 12406)
Provides metrics, dashboards, reports, and analytics for incidents, alerts, and system performance.

## 📁 Detailed File Structure

### API Gateway Service
```
api-gateway/
├── .dockerignore              # Docker ignore patterns for build optimization
├── .env                       # Environment variables (PORT, service URLs)
├── .env.example               # Example environment configuration template
├── .gitignore                 # Git ignore patterns for version control
├── .prettierrc                # Prettier code formatting configuration
├── Dockerfile                 # Multi-stage Docker build configuration
├── eslint.config.mjs          # ESLint linting rules and configuration
├── nest-cli.json              # NestJS CLI configuration
├── package.json               # Node.js dependencies and scripts
├── pnpm-lock.yaml             # Locked dependency versions for pnpm
├── README.md                  # Service-specific documentation
├── tsconfig.build.json        # TypeScript build configuration
├── tsconfig.json              # TypeScript compiler configuration
├── src/
│   ├── main.ts                # Application entry point and bootstrap
│   ├── app.module.ts          # Root module with HttpModule and ProxyModule
│   ├── app.controller.ts      # Root controller with health check endpoint
│   ├── app.service.ts         # Root service with basic app information
│   ├── app.controller.spec.ts # Unit tests for app controller
│   ├── controllers/           # Additional controllers directory (placeholder)
│   ├── dto/                   # Data Transfer Objects directory (placeholder)
│   ├── entities/              # Database entities directory (placeholder)
│   └── modules/
│       └── proxy/
│           ├── proxy.module.ts       # Proxy module configuration
│           ├── proxy.controller.ts   # Request routing to microservices
│           └── proxy.service.ts      # HTTP forwarding logic to services
└── test/
    ├── app.e2e-spec.ts        # End-to-end tests for API Gateway
    └── jest-e2e.json          # Jest E2E test configuration
```

### User Service
```
user-service/
├── .dockerignore              # Docker ignore patterns
├── .env                       # Environment variables (PORT, DB config, JWT secrets)
├── .gitignore                 # Git ignore patterns
├── .prettierrc                # Code formatting rules
├── Dockerfile                 # Docker container configuration
├── eslint.config.mjs          # Linting configuration
├── nest-cli.json              # NestJS CLI settings
├── package.json               # Dependencies and npm scripts
├── pnpm-lock.yaml             # Locked dependencies
├── README.md                  # Service documentation
├── tsconfig.build.json        # Build-specific TypeScript config
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.ts                # Bootstrap application on port 12401
│   ├── app.module.ts          # Root module with ConfigModule and TypeORM
│   ├── app.controller.ts      # Basic app controller
│   ├── app.service.ts         # Basic app service
│   ├── app.controller.spec.ts # Controller unit tests
│   ├── controllers/           # REST API controllers for users
│   ├── dto/                   # DTOs for user operations
│   ├── entities/              # User entity definitions
│   └── modules/               # Feature modules (auth, users, etc.)
└── test/
    ├── app.e2e-spec.ts        # E2E tests
    └── jest-e2e.json          # Jest E2E configuration
```

### Alert Service
```
alert-service/
├── .dockerignore              # Docker ignore patterns
├── .env                       # Environment variables (PORT, DB config, service URLs)
├── .gitignore                 # Git ignore patterns
├── .prettierrc                # Code formatting rules
├── Dockerfile                 # Docker container configuration
├── eslint.config.mjs          # Linting configuration
├── nest-cli.json              # NestJS CLI settings
├── package.json               # Dependencies and npm scripts
├── pnpm-lock.yaml             # Locked dependencies
├── README.md                  # Service documentation
├── tsconfig.build.json        # Build-specific TypeScript config
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.ts                # Bootstrap application on port 12402
│   ├── app.module.ts          # Root module with ConfigModule and TypeORM
│   ├── app.controller.ts      # Basic app controller
│   ├── app.service.ts         # Basic app service
│   ├── app.controller.spec.ts # Controller unit tests
│   ├── controllers/           # REST API controllers for alerts
│   ├── dto/                   # DTOs for alert operations
│   ├── entities/              # Alert entity definitions
│   └── modules/               # Feature modules
└── test/
    ├── app.e2e-spec.ts        # E2E tests
    └── jest-e2e.json          # Jest E2E configuration
```

### Incident Service
```
incident-service/
├── .dockerignore              # Docker ignore patterns
├── .env                       # Environment variables (PORT, DB config, service URLs)
├── .gitignore                 # Git ignore patterns
├── .prettierrc                # Code formatting rules
├── Dockerfile                 # Docker container configuration
├── eslint.config.mjs          # Linting configuration
├── nest-cli.json              # NestJS CLI settings
├── package.json               # Dependencies and npm scripts
├── pnpm-lock.yaml             # Locked dependencies
├── README.md                  # Service documentation
├── tsconfig.build.json        # Build-specific TypeScript config
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.ts                # Bootstrap application on port 12403
│   ├── app.module.ts          # Root module with ConfigModule and TypeORM
│   ├── app.controller.ts      # Basic app controller
│   ├── app.service.ts         # Basic app service
│   ├── app.controller.spec.ts # Controller unit tests
│   ├── controllers/           # REST API controllers for incidents
│   ├── dto/                   # DTOs for incident operations
│   ├── entities/              # Incident entity definitions
│   └── modules/               # Feature modules
└── test/
    ├── app.e2e-spec.ts        # E2E tests
    └── jest-e2e.json          # Jest E2E configuration
```

### Notification Service
```
notification-service/
├── .dockerignore              # Docker ignore patterns
├── .env                       # Environment variables (PORT, DB, Email/SMS/Slack configs)
├── .gitignore                 # Git ignore patterns
├── .prettierrc                # Code formatting rules
├── Dockerfile                 # Docker container configuration
├── eslint.config.mjs          # Linting configuration
├── nest-cli.json              # NestJS CLI settings
├── package.json               # Dependencies and npm scripts
├── pnpm-lock.yaml             # Locked dependencies
├── README.md                  # Service documentation
├── tsconfig.build.json        # Build-specific TypeScript config
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.ts                # Bootstrap application on port 12404
│   ├── app.module.ts          # Root module with ConfigModule and TypeORM
│   ├── app.controller.ts      # Basic app controller
│   ├── app.service.ts         # Basic app service
│   ├── app.controller.spec.ts # Controller unit tests
│   ├── controllers/           # REST API controllers for notifications
│   ├── dto/                   # DTOs for notification operations
│   ├── entities/              # Notification entity definitions
│   └── modules/               # Feature modules (email, SMS, Slack)
└── test/
    ├── app.e2e-spec.ts        # E2E tests
    └── jest-e2e.json          # Jest E2E configuration
```

### OnCall Service
```
oncall-service/
├── .dockerignore              # Docker ignore patterns
├── .env                       # Environment variables (PORT, DB config, service URLs)
├── .gitignore                 # Git ignore patterns
├── .prettierrc                # Code formatting rules
├── Dockerfile                 # Docker container configuration
├── eslint.config.mjs          # Linting configuration
├── nest-cli.json              # NestJS CLI settings
├── package.json               # Dependencies and npm scripts
├── pnpm-lock.yaml             # Locked dependencies
├── README.md                  # Service documentation
├── tsconfig.build.json        # Build-specific TypeScript config
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.ts                # Bootstrap application on port 12405
│   ├── app.module.ts          # Root module with ConfigModule and TypeORM
│   ├── app.controller.ts      # Basic app controller
│   ├── app.service.ts         # Basic app service
│   ├── app.controller.spec.ts # Controller unit tests
│   ├── controllers/           # REST API controllers for on-call management
│   ├── dto/                   # DTOs for on-call operations
│   ├── entities/              # OnCall schedule entity definitions
│   └── modules/               # Feature modules
└── test/
    ├── app.e2e-spec.ts        # E2E tests
    └── jest-e2e.json          # Jest E2E configuration
```

### Analytics Service
```
analytics-service/
├── .dockerignore              # Docker ignore patterns
├── .env                       # Environment variables (PORT, DB config, service URLs)
├── .gitignore                 # Git ignore patterns
├── .prettierrc                # Code formatting rules
├── Dockerfile                 # Docker container configuration
├── eslint.config.mjs          # Linting configuration
├── nest-cli.json              # NestJS CLI settings
├── package.json               # Dependencies and npm scripts
├── pnpm-lock.yaml             # Locked dependencies
├── README.md                  # Service documentation
├── tsconfig.build.json        # Build-specific TypeScript config
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.ts                # Bootstrap application on port 12406
│   ├── app.module.ts          # Root module with ConfigModule and TypeORM
│   ├── app.controller.ts      # Basic app controller
│   ├── app.service.ts         # Basic app service
│   ├── app.controller.spec.ts # Controller unit tests
│   ├── controllers/           # REST API controllers for analytics
│   ├── dto/                   # DTOs for analytics operations
│   ├── entities/              # Analytics entity definitions
│   └── modules/               # Feature modules (metrics, reports)
└── test/
    ├── app.e2e-spec.ts        # E2E tests
    └── jest-e2e.json          # Jest E2E configuration
```

### Frontend UI
```
OpsGuardianUI/
├── .gitignore                 # Git ignore patterns
├── Dockerfile                 # Docker container for React app
├── eslint.config.js           # ESLint configuration for React
├── index.html                 # HTML entry point
├── nginx.conf                 # Nginx configuration for production
├── package.json               # Frontend dependencies and scripts
├── pnpm-lock.yaml             # Locked dependencies
├── README.md                  # Frontend documentation
├── tsconfig.app.json          # TypeScript config for app
├── tsconfig.json              # TypeScript configuration
├── tsconfig.node.json         # TypeScript config for Node tools
├── vite.config.ts             # Vite build tool configuration
├── .env                       # Environment variables (PORT=3000, API_BASE_URL)
├── public/                    # Static assets directory
└── src/
    ├── main.tsx               # React application entry point
    ├── App.tsx                # Root React component
    ├── App.css                # Application styles
    ├── index.css              # Global styles
    └── assets/                # Images, fonts, and other assets
```

## 🔧 Environment Variables

### API Gateway (.env)
```env
# API Gateway Configuration
PORT=12400

# Microservice URLs (for GraphQL single entry point)
USER_SERVICE_URL=http://localhost:12401
ALERT_SERVICE_URL=http://localhost:12402
INCIDENT_SERVICE_URL=http://localhost:12403
NOTIFICATION_SERVICE_URL=http://localhost:12404
ONCALL_SERVICE_URL=http://localhost:12405
ANALYTICS_SERVICE_URL=http://localhost:12406

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# GraphQL Configuration (Future)
GRAPHQL_ENABLED=false
GRAPHQL_PLAYGROUND=true
```

### User Service (.env)
```env
# User Service Configuration
PORT=12401

# Database Configuration (PostgreSQL on Tailscale)
DB_HOST=100.113.63.36
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD="admin@#55#"        # ⚠️ MUST be quoted!
DB_DATABASE=userdb

# Redis Configuration
REDIS_HOST=100.113.63.36
REDIS_PORT=6379
REDIS_PASSWORD="redis@#55#6379#"  # ⚠️ MUST be quoted!

# Kafka Configuration
KAFKA_ENABLED=true
KAFKA_BROKERS=100.113.63.36:9092
KAFKA_CLIENT_ID=user-service
KAFKA_GROUP_ID=user-service-group
KAFKAJS_NO_PARTITIONER_WARNING=1

# JWT Configuration
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=24h

# API Gateway
API_GATEWAY_URL=http://localhost:12400
```

### Alert Service (.env)
```env
# Alert Service Configuration
PORT=12402

# Database Configuration (PostgreSQL on Tailscale)
DB_HOST=100.113.63.36
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD="admin@#55#"        # ⚠️ MUST be quoted!
DB_DATABASE=alertdb

# Redis Configuration
REDIS_HOST=100.113.63.36
REDIS_PORT=6379
REDIS_PASSWORD="redis@#55#6379#"  # ⚠️ MUST be quoted!

# Kafka Configuration
KAFKA_ENABLED=true
KAFKA_BROKERS=100.113.63.36:9092
KAFKA_CLIENT_ID=alert-service
KAFKA_GROUP_ID=alert-service-group
KAFKAJS_NO_PARTITIONER_WARNING=1

# Service URLs
NOTIFICATION_SERVICE_URL=http://localhost:12404
INCIDENT_SERVICE_URL=http://localhost:12403
USER_SERVICE_URL=http://localhost:12401

# API Gateway
API_GATEWAY_URL=http://localhost:12400
```

### Incident Service (.env)
```env
# Incident Service Configuration
PORT=12403

# Database Configuration (PostgreSQL on Tailscale)
DB_HOST=100.113.63.36
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD="admin@#55#"        # ⚠️ MUST be quoted!
DB_DATABASE=incidentdb

# Redis Configuration
REDIS_HOST=100.113.63.36
REDIS_PORT=6379
REDIS_PASSWORD="redis@#55#6379#"  # ⚠️ MUST be quoted!

# Kafka Configuration
KAFKA_ENABLED=true
KAFKA_BROKERS=100.113.63.36:9092
KAFKA_CLIENT_ID=incident-service
KAFKA_GROUP_ID=incident-service-group
KAFKAJS_NO_PARTITIONER_WARNING=1

# Service URLs
ALERT_SERVICE_URL=http://localhost:12402
NOTIFICATION_SERVICE_URL=http://localhost:12404
USER_SERVICE_URL=http://localhost:12401
ONCALL_SERVICE_URL=http://localhost:12405

# API Gateway
API_GATEWAY_"admin@#55#"        # ⚠️ MUST be quoted!
DB_DATABASE=notificationdb

# Redis Configuration
REDIS_HOST=100.113.63.36
REDIS_PORT=6379
REDIS_PASSWORD="redis@#55#6379#"  # ⚠️ MUST be quoted!

# Kafka Configuration
KAFKA_ENABLED=true
KAFKA_BROKERS=100.113.63.36:9092
KAFKA_CLIENT_ID=notification-service
KAFKA_GROUP_ID=notification-service-group
KAFKAJS_NO_PARTITIONER_WARNING=1

### Notification Service (.env)
```env
# Notification Service Configuration
PORT=12404

# Database Configuration (PostgreSQL on Tailscale)
DB_HOST=100.113.63.36
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=admin@#55#
DB_DATABASE=notificationdb

# Service URLs
USER_SERVICE_URL=http://localhost:12401

# API Gateway
API_GATEWAY_URL=http://localhost:12400

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=OpsGuardian <noreply@opsguardian.com>

# Slack Configuration (Optional)
SLACK_WEBHOOK_URL=

# SMS Configuration (Optional - Twilio)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE"admin@#55#"        # ⚠️ MUST be quoted!
DB_DATABASE=oncalldb

# Redis Configuration
REDIS_HOST=100.113.63.36
REDIS_PORT=6379
REDIS_PASSWORD="redis@#55#6379#"  # ⚠️ MUST be quoted!

# Kafka Configuration
KAFKA_ENABLED=true
KAFKA_BROKERS=100.113.63.36:9092
KAFKA_CLIENT_ID=oncall-service
KAFKA_GROUP_ID=oncall-service-group
KAFKAJS_NO_PARTITIONER_WARNING=1

### OnCall Service (.env)
```env
# OnCall Service Configuration
PORT=12405

# Database Configuration (PostgreSQL on Tailscale)
DB_HOST=100."admin@#55#"        # ⚠️ MUST be quoted!
DB_DATABASE=analyticsdb

# Redis Configuration
REDIS_HOST=100.113.63.36
REDIS_PORT=6379
REDIS_PASSWORD="redis@#55#6379#"  # ⚠️ MUST be quoted!

# Kafka Configuration
KAFKA_ENABLED=true
KAFKA_BROKERS=100.113.63.36:9092
KAFKA_CLIENT_ID=analytics-service
KAFKA_GROUP_ID=analytics-service-group
KAFKAJS_NO_PARTITIONER_WARNING=1
DB_USERNAME=admin
DB_PASSWORD=admin@#55#
DB_DATABASE=oncalldb

# Service URLs
USER_SERVICE_URL=http://localhost:12401
NOTIFICATION_SERVICE_URL=http://localhost:12404
INCIDENT_SERVICE_URL=http://localhost:12403

# API Gateway
API_GATEWAY_URL=http://localhost:12400
```

### Analytics Service (.env)
```env
# Analytics Service Configuration
PORT=12406

# Database Configuration (PostgreSQL on Tailscale)
DB_HOST=100.113.63.36
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=admin@#55#
DB_DATABASE=analyticsdb

# Service URLs
ALERT_SERVICE_URL=http://localhost:12402
INCIDENT_SERVICE_URL=http://localhost:12403
USER_SERVICE_URL=http://localhost:12401

# API Gateway
API_GATEWAY_URL=http://localhost:12400
```

### Frontend UI (.env)
```env
# OpsGuardian UI Configuration
VITE_PORT=3000

# API Gateway URL (Single Entry Point)
VITE_API_BASE_URL=http://localhost:12400/api

# Application Configuration
VITE_APP_NAME=OpsGuardian
VITE_APP_VERSION=1.0.0

# Environment
VITE_ENV=development
```

## 🗄️ Database Structure

Each microservice has its own dedicated PostgreSQL database on Tailscale network (100.113.63.36):

- **userdb** - User accounts, roles, permissions
- **alertdb** - Alert definitions, alert history, alert rules
- **incidentdb** - Incident records, incident timeline, resolutions
- **notificationdb** - Notification logs, delivery status, templates
- **oncalldb** - On-call schedules, rotations, escalation policies
- **analyticsdb** - Aggregated metrics, reports, analytics data

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (Download from [nodejs.org](https://nodejs.org/))
- **pnpm** package manager (Install: `npm install -g pnpm`)
- **PostgreSQL** 16 database (on Tailscale: 100.113.63.36:5432)
- **Redis** 7 (on Tailscale: 100.113.63.36:6379)
- **Apache Kafka** 7.6.0 with Zookeeper (on Tailscale: 100.113.63.36:9092)
- **Tailscale VPN** access for infrastructure services
- **Git** for version control
- **Docker** (optional, for containerized deployment)

### Infrastructure Services

This project requires three infrastructure services running on the Tailscale network (100.113.63.36):

1. **PostgreSQL 16** (Port: 5432)
   - Username: `admin`
   - Password: `admin@#55#`
   - Multiple databases: userdb, alertdb, incidentdb, notificationdb, oncalldb, analyticsdb

2. **Redis 7** (Port: 6379)
   - Password: `redis@#55#6379#`
   - Used for caching and session management

3. **Apache Kafka** (Port: 9092 external, 29092 internal)
   - Used for event streaming between microservices
   - Advertised listeners configured for both internal and external access

### Installation

#### 1. **Clone the repository**
```bash
git clone <repository-url>
cd OpsGuardian
```

#### 2. **Install dependencies for all services**

**Important**: All backend services now require the `kafkajs` package. Install dependencies for each service:

```bash
# API Gateway (Port: 12400)
cd OpsGuardianAPI/api-gateway
pnpm install

# User Service (Port: 12401)
cd ../user-service
pnpm install

# Alert Service (Port: 12402)
cd ../alert-service
pnpm install

# Incident Service (Port: 12403)
cd ../incident-service
pnpm install

# Notification Service (Port: 12404)
cd ../notification-service
pnpm install

# OnCall Service (Port: 12405)
cd ../oncall-service
pnpm install

# Analytics Service (Port: 12406)
cd ../analytics-service
pnpm install

# Frontend UI (Port: 3000)
cd ../../OpsGuardianUI
pnpm install
```

#### 3. **Configure environment variables**

**⚠️ CRITICAL: Special Characters in Passwords**

The `.env` files contain passwords with special characters (like `#`). These **MUST** be wrapped in quotes, otherwise they will be truncated (the `#` character is treated as a comment in .env files).

**Correct format:**
```env
DB_PASSWORD="admin@#55#"          # ✅ Correct - quoted
REDIS_PASSWORD="redis@#55#6379#"  # ✅ Correct - quoted
```

**Wrong format:**
```env
DB_PASSWORD=admin@#55#            # ❌ Wrong - will be truncated to "admin@"
REDIS_PASSWORD=redis@#55#6379#    # ❌ Wrong - will be truncated to "redis@"
```

Each service already has a `.env` file configured. Verify the following settings:

**All backend services (user, alert, incident, notification, oncall, analytics) require:**
```env
# Database Configuration
DB_HOST=100.113.63.36
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD="admin@#55#"          # Must be quoted!
DB_DATABASE=<service-specific-db>

# Redis Configuration
REDIS_HOST=100.113.63.36
REDIS_PORT=6379
REDIS_PASSWORD="redis@#55#6379#"  # Must be quoted!

# Kafka Configuration
KAFKA_ENABLED=true
KAFKA_BROKERS=100.113.63.36:9092
KAFKA_CLIENT_ID=<service-name>
KAFKA_GROUP_ID=<service-name>-group
KAFKAJS_NO_PARTITIONER_WARNING=1
```

**API Gateway does NOT use Redis or Database** - only requires:
```env
PORT=12400
USER_SERVICE_URL=http://localhost:12401
ALERT_SERVICE_URL=http://localhost:12402
INCIDENT_SERVICE_URL=http://localhost:12403
NOTIFICATION_SERVICE_URL=http://localhost:12404
ONCALL_SERVICE_URL=http://localhost:12405
ANALYTICS_SERVICE_URL=http://localhost:12406
CORS_ORIGIN=http://localhost:3000
```

#### 4. **Verify Infrastructure Services**

Before starting the application, ensure all infrastructure services are running:

```bash
# Test PostgreSQL connection
psql -h 100.113.63.36 -p 5432 -U admin -d userdb

# Test Redis connection
redis-cli -h 100.113.63.36 -p 6379 -a "redis@#55#6379#" ping

# Test Kafka connection
kafka-topics.sh --bootstrap-server 100.113.63.36:9092 --list
```

#### 5. **Start the services**

**Option A: Start each service individually** (Recommended for development)

Open 8 separate terminals and run:

```bash
# Terminal 1 - API Gateway
cd OpsGuardianAPI/api-gateway
pnpm run start:dev

# Terminal 2 - User Service
cd OpsGuardianAPI/user-service
pnpm run start:dev

# Terminal 3 - Alert Service
cd OpsGuardianAPI/alert-service
pnpm run start:dev

# Terminal 4 - Incident Service
cd OpsGuardianAPI/incident-service
pnpm run start:dev

# Terminal 5 - Notification Service
cd OpsGuardianAPI/notification-service
pnpm run start:dev

# Terminal 6 - OnCall Service
cd OpsGuardianAPI/oncall-service
pnpm run start:dev

# Terminal 7 - Analytics Service
cd OpsGuardianAPI/analytics-service
pnpm run start:dev

# Terminal 8 - Frontend UI
cd OpsGuardianUI
pnpm run dev
```

**Option B: Use concurrently** (Start all at once)

Create a root `package.json` with concurrently:
```bash
pnpm add -D concurrently
pnpm run dev:all
```

#### 6. **Verify services are running**

Check each service is running on its designated port:

```bash
# API Gateway
curl http://localhost:12400/api

# User Service
curl http://localhost:12401

# Alert Service
curl http://localhost:12402

# Incident Service
curl http://localhost:12403

# Notification Service
curl http://localhost:12404

# OnCall Service
curl http://localhost:12405

# Analytics Service
curl http://localhost:12406

# Frontend UI
# Open browser: http://localhost:3000
```

#### 7. **Access the application**

Once all services are running:
- **Frontend**: http://localhost:3000
- **API Gateway**: http://localhost:12400
- **Individual Microservices**: http://localhost:12401-12406

## 🐳 Docker Deployment

Each service includes a Dockerfile for containerization.
 (Port: 12400)
- **Database per Service**: Each service has its own PostgreSQL database
- **Redis Integration**: Global caching layer for all services (except API Gateway)
- **Kafka Event Streaming**: Inter-service communication via Apache Kafka
- **Environment-based Configuration**: All services use .env files
- **RESTful APIs**: Currently REST-based, GraphQL planned for future
- **TypeScript**: Full type safety across all services
- **Docker Ready**: All services are containerized
- **Graceful Degradation**: Services continue running even if Kafka fails

### Key Architecture Components

1. **API Gateway** - Request routing, no database/Redis dependency
2. **User Service** - Authentication, authorization, JWT tokens
3. **Alert Service** - Alert management, Kafka event producer
4. **Incident Service** - Incident tracking, Kafka event consumer/producer
5. **Notification Service** - Multi-channel notifications (Email, SMS, Slack)
6. **OnCall Service** - Schedule management, escalation policies
7. **Analytics Service** - Metrics aggregation, reporting
8. **PostgreSQL** - Primary data store (separate DB per service)
9. **Redis** - Caching layer, session management
10. **Kafka** - Event streaming, inter-service messagingian-api-gateway
```

## 📡 API Endpoints

### API Gateway
- `GET /` - Gateway information
- `GET /api/health` - Health check
- `GET /api/services` - List all available services
- `ALL /api/users/*` - Routes to User Service
- `ALL /api/alerts/*` - Routes to Alert Service
- `ALL /api/incidents/*` - Routes to Incident Service
- `ALL /api/notifications/*` - Routes to Notification Service
- `ALL /api/oncall/*` - Routes to OnCall Service
- `ALL /api/analytics/*` - Routes to Analytics Service

## 🏗️ Architecture

- **Microservices**: Each service is independent and scalable
- **API Gateway**: Single entry point with request routing
- **Database per Service**.0.1
- **Language**: TypeScript 5
- **Database**: PostgreSQL 16 + TypeORM 0.3.28
- **Caching**: Redis 7 + ioredis 5.9.2
- **Event Streaming**: Apache Kafka 7.6.0 + kafkajs 2.2.4
- **Microservices**: @nestjs/microservices 11.1.12
- **HTTP Client**: @nestjs/axios + axios
- **Configuration**: @nestjs/config 4.0.2
- **Validation**: class-validator
- **Package Manager**: pnpm 10.24.0

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS/TailwindCSS (to be configured)

### Infrastructure
- **Container**: Docker
- **Network**: Tailscale VPN (100.113.63.36)
- **Message Broker**: Apache Kafka with Zookeeper
- **Cache**: Redis 7
- **Database**: PostgreSQL 16
- Rate limiting (to be implemented)

## 🧪 Testing

Run tests for each service:
```bash
# Unit tests
pnpm run test

# E2E tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov
```

## 📝 Development Guidelines

1. **Code Style**: Use Prettier and ESLint configurations
2. **Commit Messages**: Follow conventional commits
3. **Testing**: Write unit and E2E tests for new features
4. **Documentation**: Update README when adding features
5. **Environment Variables**: Never commit .env files

## 🛠️ Technology Stack

### Backend
- **Framework**: NestJS 11
- **Language**: TypeScript 5
- **Database**: PostgreSQL 8
- **ORM**: TypeORM 0.3
- **HTTP Client**: Axios
- **Validation**: class-validator
- **Package Manager**: pnpm

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS/TailwindCSS (to be configured)

## 📄 License

UNLICENSED - Private project

## 👥 Team

Add your team members here

## 🔮 Future Enhancements

- [ ] GraphQL API implementation in API Gateway
- [ ] Kubernetes deployment configurations
- [ ] CI/CD pipeline setup (GitHub Actions/Jenkins)
- [x] ~~Message queue integration (Kafka)~~ ✅ Completed
- [x] ~~Caching layer (Redis)~~ ✅ Completed
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Monitoring and logging (ELK stack/Prometheus)
- [ ] Service mesh (Istio)
- [ ] WebSocket support for real-time updates
- [ ] Rate limiting and throttling
- [ ] Circuit breaker pattern implementation
- [ ] Distributed tracing (Jaeger)
- [ ] Health checks and readiness probes

## 🐛 Troubleshooting

### Common Issues

#### 1. **Redis Authentication Error**
```
Error: NOAUTH Authentication required
```
**Solution**: Ensure Redis password is quoted in .env file:
```env
REDIS_PASSWORD="redis@#55#6379#"  # Not: redis@#55#6379#
```

#### 2. **Database Connection Failed**
```
Error: password authentication failed for user "admin"
```
**Solution**: Ensure database password is quoted in .env file:
```env
DB_PASSWORD="admin@#55#"  # Not: admin@#55#
```

#### 3. **Kafka Package Missing**
```
Error: The "kafkajs" package is missing
```
**Solution**: Install dependencies in the service directory:
```bash
cd OpsGuardianAPI/<service-name>
pnpm install
```

#### 4. **Kafka Connection Error**
```
Error: ECONNRESET or Connection timeout
```
**Solution**: 
- Verify Kafka is running on 100.113.63.36:9092
- Check Tailscale VPN connection
- Kafka server needs 30-60 seconds to fully initialize after restart
- Services will continue running with graceful degradation if Kafka fails

#### 5. **Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::12401
```
**Solution**: 
- Check if service is already running
- Kill existing process: `lsof -ti:12401 | xargs kill -9` (Mac/Linux)
- Or: `netstat -ano | findstr :12401` then `taskkill /PID <PID> /F` (Windows)

#### 6. **TypeScript Compilation Errors**
```
Error: Cannot find module '@nestjs/config'
```
**Solution**: 
- Ensure all dependencies are installed: `pnpm install`
- Delete node_modules and reinstall: `rm -rf node_modules && pnpm install`

### Network Access

All infrastructure services require Tailscale VPN access (100.113.63.36):
1. Install Tailscale from [tailscale.com](https://tailscale.com/)
2. Connect to your Tailscale network
3. Verify connectivity: `ping 100.113.63.36`

### Debugging Tips

1. **Check service logs**: Each service outputs detailed logs in watch mode
2. **Verify environment variables**: Use `console.log(process.env.PORT)` to debug
3. **Test connections individually**: Use curl/Postman to test each service
4. **Check database**: Use psql or pgAdmin to verify database access
5. **Monitor Kafka**: Use Kafka tools to check topics and consumer groups