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
DB_PASSWORD=admin@#55#
DB_DATABASE=userdb

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
DB_PASSWORD=admin@#55#
DB_DATABASE=alertdb

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
DB_PASSWORD=admin@#55#
DB_DATABASE=incidentdb

# Service URLs
ALERT_SERVICE_URL=http://localhost:12402
NOTIFICATION_SERVICE_URL=http://localhost:12404
USER_SERVICE_URL=http://localhost:12401
ONCALL_SERVICE_URL=http://localhost:12405

# API Gateway
API_GATEWAY_URL=http://localhost:12400
```

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
TWILIO_PHONE_NUMBER=
```

### OnCall Service (.env)
```env
# OnCall Service Configuration
PORT=12405

# Database Configuration (PostgreSQL on Tailscale)
DB_HOST=100.113.63.36
DB_PORT=5432
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
- Node.js 18+
- pnpm package manager
- PostgreSQL database (on Tailscale: 100.113.63.36)
- Docker (optional)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd OpsGuardian
```

2. **Install dependencies for all services**

Backend services:
```bash
cd OpsGuardianAPI/api-gateway && pnpm install
cd ../user-service && pnpm install
cd ../alert-service && pnpm install
cd ../incident-service && pnpm install
cd ../notification-service && pnpm install
cd ../oncall-service && pnpm install
cd ../analytics-service && pnpm install
```

Frontend:
```bash
cd ../../OpsGuardianUI && pnpm install
```

3. **Configure environment variables**

Copy .env.example to .env for each service and configure accordingly (or use the .env files already created).

4. **Start the services**

Start each service in a separate terminal:

```bash
# API Gateway
cd OpsGuardianAPI/api-gateway && pnpm run start:dev

# User Service
cd OpsGuardianAPI/user-service && pnpm run start:dev

# Alert Service
cd OpsGuardianAPI/alert-service && pnpm run start:dev

# Incident Service
cd OpsGuardianAPI/incident-service && pnpm run start:dev

# Notification Service
cd OpsGuardianAPI/notification-service && pnpm run start:dev

# OnCall Service
cd OpsGuardianAPI/oncall-service && pnpm run start:dev

# Analytics Service
cd OpsGuardianAPI/analytics-service && pnpm run start:dev

# Frontend UI
cd OpsGuardianUI && pnpm run dev
```

5. **Access the application**
- Frontend: http://localhost:3000
- API Gateway: http://localhost:12400
- Individual services: http://localhost:12401-12406

## 🐳 Docker Deployment

Each service includes a Dockerfile for containerization.

Build and run individual service:
```bash
cd OpsGuardianAPI/api-gateway
docker build -t opsguardian-api-gateway .
docker run -p 12400:12400 --env-file .env opsguardian-api-gateway
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
- **Database per Service**: Each service has its own PostgreSQL database
- **Environment-based Configuration**: All services use .env files
- **RESTful APIs**: Currently REST-based, GraphQL planned for future
- **TypeScript**: Full type safety across all services
- **Docker Ready**: All services are containerized

## 🔐 Security

- JWT-based authentication in User Service
- Environment variables for sensitive data
- CORS configured on API Gateway
- Database credentials on secure Tailscale network
- Password hashing (to be implemented)
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

- [ ] GraphQL API implementation
- [ ] Kubernetes deployment configurations
- [ ] CI/CD pipeline setup
- [ ] Message queue integration (RabbitMQ/Kafka)
- [ ] Caching layer (Redis)
- [ ] API documentation (Swagger)
- [ ] Monitoring and logging (ELK stack)
- [ ] Service mesh (Istio)
- [ ] WebSocket support for real-time updates