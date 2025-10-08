# Vue Microfrontends POC

A comprehensive proof-of-concept demonstrating Frontend as a Service architecture using Module Federation with Webpack 5. This project showcases how to build and orchestrate multiple independent Vue applications that can be developed, deployed, and scaled independently.

## 🏗️ Architecture Overview

The application consists of four microfrontend services:

- **Orchestrator** (Port: 8080) - Main application that orchestrates all microfrontends
- **Auth** (Port: 8081) - Authentication microfrontend with login/signup functionality
- **Marketplace** (Port: 8082) - Posts (marketplace is legacy) microfrontend with posts
- **Profile** (Port: 8083) - User profile management microfrontend

## 🚀 Quick Start

### Option 1: Docker Compose (Recommended)

The easiest way to run the entire application:

```bash
# Start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

Access the application at: http://localhost:8080

### Option 2: Manual Setup

#### Prerequisites

- Node.js >= 16.0.0
- npm

#### Start All Services

1. **Start Orchestrator (Main App)**

   ```bash
   cd orchestrator
   npm ci
   npm start
   ```

   Runs on: http://localhost:8080

2. **Start Auth Service**

   ```bash
   cd auth
   npm ci
   npm start
   ```

   Runs on: http://localhost:8081

3. **Start Marketplace Service**

   ```bash
   cd marketplace
   npm ci
   npm start
   ```

   Runs on: http://localhost:8082

4. **Start Profile Service**
   ```bash
   cd profile
   npm ci
   npm start
   ```
   Runs on: http://localhost:8083

## 🔐 Authentication

The application uses [reqres.in](https://reqres.in/) for authentication. Use these test credentials:

- **Email**: `eve.holt@reqres.in`
- **Password**: `cityslicka`

Or any other valid email format with the password `cityslicka`.

## 🛠️ Technology Stack

### Core Technologies

- **Vue 3** - Frontend framework
- **Vue Router 4** - Client-side routing
- **Webpack 5** - Module bundling with Module Federation
- **PrimeVue 3** - UI component library
- **Chart.js** - Data visualization

### Development Tools

- **Babel** - JavaScript transpilation
- **Sass** - CSS preprocessing
- **Webpack Dev Server** - Development server with hot reload

### Infrastructure

- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
vue-microfrontends-poc/
├── orchestrator/          # Main application (Shell)
│   ├── src/
│   │   ├── modules/       # Microfrontend loaders
│   │   ├── layouts/       # Layout components
│   │   ├── views/         # Route components
│   │   └── services/      # Shared services
│   └── config/            # Webpack configuration
├── auth/                  # Authentication microfrontend
├── marketplace/           # Marketplace microfrontend
├── profile/              # Profile microfrontend
├── docker-compose.yml    # Docker orchestration
└── DOCKER.md             # Docker documentation
```

## 🔧 Key Features

### Microfrontend Architecture

- **Module Federation**: Dynamic loading of microfrontends at runtime
- **Independent Deployment**: Each microfrontend can be deployed separately
- **Shared Dependencies**: Optimized bundle sharing between applications
- **Runtime Integration**: Microfrontends are loaded and mounted dynamically

### Authentication & Authorization

- **JWT Token Management**: Secure token storage using cookies
- **Route Guards**: Protected routes with authentication middleware
- **Shared State**: User data shared across all microfrontends
- **Event Bus**: Cross-microfrontend communication

### UI/UX

- **Responsive Design**: Mobile-first approach with PrimeFlex
- **Modern UI**: PrimeVue components with consistent styling
- **Loading States**: Graceful handling of microfrontend loading
- **Error Boundaries**: Fallback UI for failed microfrontend loads

## 🐳 Docker Support

The project includes comprehensive Docker support for both development and production:

- **Multi-stage builds** for optimized production images
- **Volume mounts** for development hot-reload
- **Network isolation** with custom Docker network
- **Service dependencies** with proper startup ordering

See [DOCKER.md](./DOCKER.md) for detailed Docker documentation.

## 🚦 Development Workflow

1. **Start the orchestrator** (main application)
2. **Start individual microfrontends** as needed
3. **Develop features** in isolation within each microfrontend
4. **Test integration** through the orchestrator
5. **Deploy independently** when ready

## 🔍 Monitoring & Debugging

- **Console Logging**: Detailed logs for microfrontend loading
- **Error Handling**: Graceful fallbacks for failed loads
- **Development Tools**: Webpack Dev Server with hot reload
- **Docker Logs**: `docker-compose logs -f [service-name]`

## 📚 Additional Documentation

- [Docker Setup Guide](./DOCKER.md) - Complete Docker documentation
- Individual service documentation in each microfrontend directory

## 🤝 Contributing

1. Each microfrontend is independently developed
2. Follow the established patterns for module federation
3. Ensure proper error handling and loading states
4. Test integration through the orchestrator

## 📄 License

This is a proof-of-concept project for educational purposes.
