# 🛍️ House of Hype — E-commerce Web Application

A full-stack e-commerce platform built with React and Node.js, featuring product browsing, user authentication, shopping cart, checkout with Stripe, and an admin dashboard.This web app has been built as a team project.
---

## 🧰 Tech Stack

**Frontend**
- React 19, React Router, Tailwind CSS, Axios, React Toastify, Vite

**Backend**
- Node.js, Express 5, MongoDB (Mongoose), JWT Authentication, Bcrypt, Stripe, Cloudinary, Multer, Nodemailer

---

## ✨ Features

- 🔍 Browse and search products
- 🔐 User registration and login (JWT-based)
- 🛒 Shopping cart and checkout
- 💳 Payments via Stripe
- 🖼️ Image uploads via Cloudinary
- 📧 Email notifications via Nodemailer
- 🛠️ Admin dashboard for managing products and orders

---

## 📁 Project Structure

```
eccommerce-app/
├── frontend/        # React + Vite app
└── backend/         # Node.js + Express API
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- A MongoDB Atlas account
- A Cloudinary account
- A Stripe account

---

### 1. Clone the repository

```bash
git clone https://github.com/AdrianaMor123/E-commerce_WebApplication.git
cd E-commerce_WebApplication
```

---

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend:
```bash
npm run server
```
The API runs on `http://localhost:4000` by default.

---

### 3. Setup the Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` folder:
```
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend:
```bash
npm run dev
```
The app runs on `http://localhost:5173` by default.

---

## 🚀 Running the Full App

You need two terminals running at the same time — one for the backend, one for the frontend.

**Terminal 1 (backend):**
```bash
cd backend
npm run server
```

**Terminal 2 (frontend):**
```bash
cd frontend
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 🔑 Admin Access

Log in using your admin credentials set in the backend `.env` file (`ADMIN_EMAIL` and `ADMIN_PASSWORD`) to access the admin dashboard.

---

## 📦 Environment Variables Summary

| Variable | Where | Description |
|---|---|---|
| `MONGODB_URI` | backend | MongoDB connection string |
| `CLOUDINARY_NAME` | backend | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | backend | Cloudinary API key |
| `CLOUDINARY_SECRET_KEY` | backend | Cloudinary secret |
| `JWT_SECRET` | backend | Secret for signing tokens |
| `ADMIN_EMAIL` | backend | Admin login email |
| `ADMIN_PASSWORD` | backend | Admin login password |
| `STRIPE_SECRET_KEY` | backend | Stripe secret key |
| `VITE_BACKEND_URL` | frontend | Backend API URL |

---
## What I learned

Through building the House of Hype e-commerce application as part of a team, I gained hands-on experience developing a full-stack web app from end to end. I learned how to design and connect a modern frontend using React with a backend powered by Node.js and Express, while managing data with MongoDB. I developed a deeper understanding of authentication using JWT, secure password handling with Bcrypt, and integrating third-party services like Stripe for payments, Cloudinary for image storage, and Nodemailer for email notifications. I also improved my skills in structuring scalable applications, handling API communication, and managing environment variables. Working collaboratively helped me strengthen my version control, communication, and problem-solving abilities, especially when debugging and integrating different parts of the system into a cohesive product.

---
##Images

<img width="852" height="385" alt="image" src="https://github.com/user-attachments/assets/af7b8880-d0d8-414f-80d4-f97e7e872e24" />
<img width="1018" height="462" alt="image" src="https://github.com/user-attachments/assets/b9da8e01-f7d3-4a69-ade7-bc1e09563889" />
<img width="736" height="432" alt="image" src="https://github.com/user-attachments/assets/d6bc71b2-712a-4690-b44e-6f5f3060dc65" />
<img width="948" height="464" alt="image" src="https://github.com/user-attachments/assets/fec47188-58cf-4e0f-90ca-fd5da23afc80" />
<img width="1152" height="462" alt="image" src="https://github.com/user-attachments/assets/9cd1260e-0e66-4d14-b9c3-3d235276f584" />
<img width="782" height="424" alt="image" src="https://github.com/user-attachments/assets/7870f70f-059e-48e0-bb86-7c794439ca91" />
<img width="823" height="468" alt="image" src="https://github.com/user-attachments/assets/f5971f18-97d4-47fd-b427-7190a7ccf922" />
<img width="1077" height="463" alt="image" src="https://github.com/user-attachments/assets/ffc3586d-cc32-4650-8657-a0b0a44b7aaa" />
<img width="1126" height="253" alt="image" src="https://github.com/user-attachments/assets/85618964-91d5-4135-afc5-fd1973294922" />
<img width="911" height="460" alt="image" src="https://github.com/user-attachments/assets/5ea4787e-0099-4903-8de9-7de7a1fb965f" />
<img width="1235" height="466" alt="image" src="https://github.com/user-attachments/assets/f1308ed3-a582-494d-a7d1-943f3ea19d46" />

