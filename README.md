# TaskflowHR – Human Resources Task Management System

## 📌 Description

TaskflowHR is a Human Resources task management application designed to help organizations manage employee tasks, holidays, and workflows efficiently.

The application is built with a modern full-stack architecture using a separate frontend and backend.

## 🏗 Architecture

The project is divided into two main parts:

taskflowHR
│
├── frontend (React application)
├── backend (Node.js API)
├── docker-compose.yml
└── Jenkinsfile

## 🚀 Features

* Employee task management
* Holiday management (CRUD)
* User authentication
* REST API
* Modern responsive UI
* Dockerized application
* CI/CD pipeline with Jenkins

## 🛠 Technologies

### Frontend

* React
* JavaScript
* TailwindCSS
* PostCSS

### Backend

* Node.js
* Express
* Prisma ORM
* JWT Authentication
* bcrypt password hashing

### DevOps

* Docker
* Docker Compose
* Jenkins CI/CD

## 📂 Backend Structure

backend
│
├── controllers
├── middlewares
├── models
├── prisma
├── routes
├── utils
└── index.js

## 📂 Frontend Structure

frontend
│
├── public
├── src
├── package.json
├── tailwind.config.js
└── postcss.config.js

## ⚙️ Installation

### 1 Clone the repository

git clone https://github.com/Oumaimabben/taskflowHR.git

cd taskflowHR

### 2 Install backend dependencies

cd backend
npm install

### 3 Install frontend dependencies

cd ../frontend
npm install

### 4 Run the application

Backend

npm start

Frontend

npm start

## 🐳 Run with Docker

docker-compose up --build

## 🔐 API Endpoints (example)

Authentication

POST /login
POST /register

Holiday management

GET /holidays
POST /holidays
PUT /holidays/:id
DELETE /holidays/:id

## 📸 Screenshots

<img width="1536" height="1024" alt="TaskflowRH" src="https://github.com/user-attachments/assets/ad1cb267-9368-4099-a613-fa1d4bc31751" />

## 👩‍💻 Author

Oumaima Ben Othman

Software Engineering Student
Backend / Full Stack Developer
