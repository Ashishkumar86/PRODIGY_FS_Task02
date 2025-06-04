# PRODIGY_FS_Task02

---

# 👨‍💼 Employee Management App

A full-stack web application built with **Node.js**, **Express**, and **MongoDB** to manage employee records with authentication and session handling. This version includes basic dashboards and user roles.

## 🚀 Features

* User registration and login
* Role-based access (e.g., Admin)
* Secure sessions using `express-session` and MongoDB store
* Employee dashboard
* Password encryption with `bcrypt`

## 🏗️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (via Mongoose)
* **Authentication**: Session-based with `express-session`
* **Frontend**: HTML & CSS

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following:

```env
MONGO_URI=mongodb://localhost:27017/employeeApp
SESSION_SECRET=supersecure
PORT=3000
```

## 📁 Project Structure

```
├── .env
├── Sever.js             # Entry point for the backend server
├── routes.js            # API routes for user actions
├── backend.js           # Middleware for authentication
├── User.js              # Mongoose schema/model
├── Index.html           # Login & Registration frontend
├── dashboard.html       # Employee dashboard (protected)
├── Style.css            # Styling for frontend
```

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/employee-app.git
   cd employee-app
   ```

2. Install dependencies:

   ```bash
   npm install express mongoose express-session connect-mongo bcrypt dotenv
   ```

3. Run MongoDB locally or use MongoDB Atlas.

4. Start the server:

   ```bash
   node Sever.js
   ```

5. Open `Index.html` in a browser to access login/register forms.

## 🔑 API Routes

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/api/register`  | Register new user       |
| POST   | `/api/login`     | Login user              |
| GET    | `/api/logout`    | Logout user             |
| GET    | `/api/dashboard` | Authenticated user page |
| GET    | `/api/admin`     | Admin-only dashboard    |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
