# User Management System (React + Reqres API)

## 🚀 Project Overview
This is a React-based user management application that integrates with the [Reqres API](https://reqres.in/). The application allows users to log in, view a paginated list of users, edit user details, and delete users. It follows a structured three-level implementation as described in the assignment.

## 🌟 Features
### **Level 1: Authentication Screen**
- A login screen where users can authenticate using:
  - **Email:** eve.holt@reqres.in
  - **Password:** cityslicka
- Upon successful login, stores the API token in **localStorage** and redirects to the Users List page.

### **Level 2: List All Users**
- Fetches users from `GET /api/users?page=1` and displays them in a structured layout (cards).
- Implements **pagination** to navigate between user pages.

### **Level 3: Edit, Delete, and Update Users**
- **Edit User:**
  - Opens a pre-filled form with the selected user’s details.
  - Allows updating **first name, last name, and email**.
  - Updates user data using `PUT /api/users/{id}`.
- **Delete User:**
  - Removes the user from the list using `DELETE /api/users/{id}`.
- Displays **success/error messages** for all operations.

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **State Management:** useState, useEffect, Context API
- **Styling:** Custom CSS
- **Routing:** React Router
- **HTTP Requests:** Axios
- **Deployment:** Vercel

## 🎯 Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/MSarvan/EmployWise-Assignment
cd EmployWise-Assignment
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Project
```sh
npm run dev
```
- The application should now be running at `http://localhost:5173`.

### 4️⃣ Build for Production
```sh
npm run build
```

## 🚀 Deployment
This project is **deployed on Vercel**. You can access it here:
👉 [Live Demo](https://employ-wise-assignment-gilt.vercel.app/)

## 🔄 API Endpoints Used
| Action       | Method | Endpoint                     |
|-------------|--------|-----------------------------|
| Login       | POST   | `/api/login`                |
| Get Users   | GET    | `/api/users?page={page}`    |
| Update User | PUT    | `/api/users/{id}`           |
| Delete User | DELETE | `/api/users/{id}`           |

