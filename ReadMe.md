# Vue Microfrontends POC

A comprehensive proof-of-concept demonstrating Frontend as a Service architecture using Module Federation with Webpack 5. This project showcases how to build and orchestrate multiple independent Vue applications that can be developed, deployed, and scaled independently.

## Architecture Overview

The application consists of four microfrontend services:

- **Orchestrator** (Port: 8080) - Main application that orchestrates all microfrontends
- **Auth** (Port: 8081) - Authentication microfrontend with login/signup functionality
- **Marketplace** (Port: 8082) - Posts (marketplace is legacy) microfrontend with posts
- **Profile** (Port: 8083) - User profile management microfrontend

## Quick Start

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

- Node.js >= 16.0.0 <20.0.0 (the app didn't test in newest node.js versions)
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

## Authentication

The application uses [reqres.in](https://reqres.in/) for authentication. Use these test credentials:

- **Email**: `eve.holt@reqres.in`
- **Password**: `cityslicka`

Or any other valid email format with the password `cityslicka`.

## Technology Stack

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

## 📄 License

This is a proof-of-concept project for educational purposes.
