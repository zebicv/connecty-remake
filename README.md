PROJECT DESCRIPTION
Connecty is a web application that enables users to create accounts, log in, create and search posts, leave comments, and like posts.

IMPLEMENTED FEATURES

- Creating an account
- Log in
- Create and delete posts
- Create and delete comments
- Search posts

FEATURES IN PROGRESS

- Like posts (in progress, not fully implemented)
- Profile page

TECHNOLOGY STACK
Frontend: React, TypeScript, Tailwind CSS
Backend: Node.js (Express)

HOW TO RUN THE PROJECT?
Backend Setup Instructions

1. Clone the Project

- After pulling the project from the repository, navigate to the api folder.

2. Install Dependencies

- Run the following command to install all necessary dependencies: npm install

3. Set Up Redis

- Install Redis for caching. You can either:
  - Host Redis using Docker, or
  - Install it locally on your machine.

4. Create the MySQL Database

- You will need to set up a MySQL database for the backend. You can create the database using the following MySQL command: CREATE DATABASE connecty;

5. Run Database Migrations

- Apply the database migrations to set up the required tables and structures. Run the following command: npx prisma migrate dev

6. Start the Server

- Finally, start the development server with the following command: npm run dev

Frontend Setup Instructions

1. After pulling the project from the repository, navigate to the client folder.
2. Install Dependencies

- Run the following command to install all necessary dependencies: npm install

3. Start the Server

- Start the development server with the following command: npm run dev
