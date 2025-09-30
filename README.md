# Dashboard Web App 

## Overview
This project is a **full-stack scalable web app** built with **React.js** (frontend) and **Node.js + Express + MongoDB** (backend).  
It features **JWT-based authentication**, a **protected dashboard**, **CRUD operations**, **profile management**, **search/filter functionality**, and **responsive Bootstrap styling**.

---

## **Features**

### Backend (Node.js + Express)
- MongoDB database
- User registration/login with **JWT authentication**
- Password hashing using **bcrypt**
- Profile fetch & update
- CRUD APIs for entity
- Query-based search/filter support
- Structured for **scalability and modularity**

### Frontend (React.js)
- Responsive UI with **Bootstrap 5**
- Login & Register forms with client-side validation
- Protected routes (Dashboard requires login)
- Dashboard components:
  - User profile view & update
  - CRUD entity (Notes/Tasks)
  - Search & filter entities
- Async/await + fetch for API calls

### Security & Best Practices
- JWT authentication middleware
- Password hashing
- API error handling
- Modular code structure

---

## **Installation**

### Backend
1. Navigate to `backend` folder:
   ```bash
   cd backend
   npm install
   npm run dev or node server.js


### Frontend
1. Navigate to `frontend` folder:
   ```bash
   cd frontend
   npm install
   npm start