# The Orcas TMS microfrontends POC

## Prerequisites

Node.js >=16

## Orchestrator installation and start

```
cd orchestrator
npm ci
npm start
```

This is the whole application and will start on `localhost:8080`.

## Authentication

The application now uses reqres.in for authentication. You can use these test credentials:

- **Email**: `eve.holt@reqres.in`
- **Password**: `cityslicka`

Or any other valid email format with the password `cityslicka`.

## Auth installation and start

```
cd orchestrator
npm ci
npm start
```

This is Auth microfrontend and will start on `localhost:8081`

## Marketplace installation and start

```
cd orchestrator
npm ci
npm start
```

This is Marketplace microfrontend and will start on `localhost:8082`

## Profile installation and start

```
cd orchestrator
npm ci
npm start
```

This is Profile microfrontend and will start on `localhost:8083`
