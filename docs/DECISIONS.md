# Technical Decisions

This document records the main technical decisions for GradTrack and the reasoning behind them.

## Project Type

GradTrack will be built as a full-stack web application.

The project is designed to demonstrate skills that are useful for graduate software engineering roles, including frontend development, backend API design, database modelling, testing, deployment and documentation.

## Frontend

The frontend will use React with TypeScript.

React is widely used for building user interfaces, and TypeScript helps catch errors earlier by adding static typing.

Planned frontend tools:

- React
- TypeScript
- Vite
- Tailwind CSS

## Backend

The backend will use Node.js with Express and TypeScript.

Express is a lightweight framework for building APIs, and using TypeScript across both frontend and backend keeps the project consistent.

Planned backend tools:

- Node.js
- Express
- TypeScript

## Database

The database will use PostgreSQL.

PostgreSQL is a reliable relational database and is suitable for structured data such as users, job applications, statuses and notes.

## ORM

Prisma will be used as the ORM.

Prisma makes it easier to define database models, run migrations and interact with the database in a type-safe way.

## Authentication

JWT-based authentication is planned.

Users will be able to register, log in and manage their own job applications.

## Testing

Testing will be added after the main features are working.

Planned testing areas:

- Backend API routes
- Authentication flow
- Frontend components
- Form validation
- Filtering and search logic

## Deployment

The project will eventually be deployed online.

Planned deployment approach:

- Frontend deployed separately
- Backend deployed as an API service
- PostgreSQL hosted using a cloud database provider