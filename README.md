# Template API Bun.js and TypeScript

## Prerequisites

-   [Bun](https://bun.sh/) (v1.0 or higher)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone api-bun-typescript-template
    cd bun-ts-api
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variables:
    ```
    PORT=8080
    ```

## Usage

### Development

To run the server in development mode with auto-reloading:

```bash
bun run dev
```

The server will be available at `http://localhost:8080`.

### Production

To build and run the server in production mode:

1.  **Build the project:**
    ```bash
    bun run build
    ```

2.  **Start the server:**
    ```bash
    bun run start
    ```

## Available Scripts

In the `package.json` file, you'll find several scripts for common development tasks:

-   `dev`: Starts the development server with hot-reloading.
-   `start`: Starts the application directly using `bun`. For production, it's recommended to `build` first as described in the "Production" section.
-   `build`: Compiles the TypeScript project into JavaScript for production.
-   `test`: Runs both unit and integration tests.
-   `test:unit`: Runs only the unit tests.
-   `test:integration`: Runs only the integration tests.
-   `lint`: Lints and automatically fixes issues in the codebase.
-   `lint:check`: Checks for linting and formatting errors without applying changes.
-   `lint:check:fix`: Checks for linting and formatting errors applying safe changes.
-   `format`: Formats the entire codebase using Biome.
-   `ci:check`: Runs all Biome checks (lint, format, etc.), suitable for a CI pipeline.

You can run any script using `bun run <script-name>`. For example:
```bash
bun run test
```

## Running with Docker

You can also run the application using Docker and Docker Compose.

1.  **Build and run with Docker Compose (recommended):**
    ```bash
    docker-compose up -d
    ```
    This command builds the image and starts the container in the background. The API will be available at `http://localhost:8080`. The `db.json` file is mounted as a volume to persist data across container restarts.

2.  **Manual build and run with Docker:**
    -   **Build the image:**
        ```bash
        docker build -t bun-ts-api .
        ```
    -   **Run the container:**
        ```bash
        docker run -p 8080:8080 -v ./db.json:/app/db.json --env-file ./.env bun-ts-api
        ```

## API Documentation

This project uses Swagger for API documentation. Once the server is running, you can access the interactive API documentation by navigating to `/api-docs` in your browser.

-   **URL**: `http://localhost:8080/api-docs`

The documentation provides detailed information about all available endpoints, including request parameters, response bodies, and status codes.

## API Endpoints

All endpoints are prefixed with `/api`.

### Users
- `POST /api/users`: Create a new user.
  - **Body**: `{ "name": "John Doe", "email": "john.doe@example.com", "password": "yourpassword" }`

## Project Structure

The project follows a modular, layered architecture:

-   `src/`: Main source code directory.
    -   `adapters/`: Connectors to external systems (e.g., database).
    -   `config/`: Application configuration.
    -   `middleware/`: Express middlewares.
    -   `modules/`: Feature-based modules (e.g., `user`, `account`, `card`). Each module contains its own router, controller, services, schemas, and types.
    -   `routes.ts`: Main API router that aggregates all module routers.
    -   `app.ts`: Express application setup.
    -   `index.ts`: Application entry point.
