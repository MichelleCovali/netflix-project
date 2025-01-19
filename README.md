# Netflix Data Processing

Welcome to the **Netflix Data Processing** project! This guide provides step-by-step instructions to set up and run the project locally.

---

## Prerequisites

Ensure the following tools are installed on your machine before proceeding:

1. **OrbStack** or **Docker Desktop**  
   - Required to run dependency containers locally.

2. **TablePlus** (or your preferred database GUI)  
   - Recommended for executing SQL scripts and managing the database.

3. **Node.js** and **npm**  
   - Needed to build and run the backend and frontend applications.

---

## Setup Instructions

### 1. Start Dependency Containers

Use Docker Compose to start the necessary dependency containers:

```bash
docker-compose up -d
```

### 2. Set Up the Database

1. Navigate to the SQL scripts directory in the backend:

   ```bash
   cd DataProcessing-BackEnd/postgreSQL/
   ```

2. Execute the following SQL files in your database:
   - `netflix.sql`
   - `dummy-data.sql`

   A database management tool like **TablePlus** is recommended for this task.

### 3. Build the Backend

1. Navigate to the backend directory:

   ```bash
   cd data-processing-backend
   ```

2. Build the backend:

   ```bash
   npm run build
   ```

### 4. Start the Backend Server

Start the development server for the backend:

```bash
npm run dev
```

Ensure the backend server is running before proceeding to the frontend setup.

### 5. Set Up the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd data-processing-frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the frontend application:

   ```bash
   npm run start
   ```

   - If prompted that the port is already in use, this is expected as the backend runs on port 3000. Type `Y` to proceed.

---

## Additional Notes

- Confirm that all Docker containers are running correctly to ensure proper operation of the dependencies.
- The backend must be fully operational before accessing the frontend.

Enjoy exploring our Netflix twin project!
