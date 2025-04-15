# Next.js Starter Kit with Prisma and BetterAuth

This is a starter kit for building modern web applications using **Next.js**, **Prisma**, and **BetterAuth**. It provides a foundation for authentication, database integration, and scalable development.

## Features

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Prisma**: A modern ORM for database management.
- **BetterAuth**: Simplified authentication for your application.
- Pre-configured project structure for rapid development.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MySQL database
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart)

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd nextjs_starterkit_150425
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
  
    - Create a .env file in the root directory.
    - Add your database connection string:

        ```bash 
        DATABASE_URL="mysql://user:password@localhost:3306/database_name"
        ```
    - Add Betterauth secret
        ```bash
        BETTER_AUTH_SECRET= #secret
        BETTER_AUTH_URL= #Base URL of your app 
        ```
4. Generate the Prisma Client
    ```bash
    npx prisma generate
    ```
5. Run database migrations:
    ```bash
    npx prisma migrate dev
    ```
6. Start the development server:
    ```bash
    npm run dev
    ```
