# Natours
# 🧭 Natours API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** that powers a tours booking service. It includes user authentication, tour management, and booking capabilities.

## 🚀 Features

- User registration and login with JWT  
- User profile update and management  
- CRUD operations for tours  
- Tour booking system  
- Email notifications using Nodemailer  
- Input validation and data sanitization  
- Environment-based config with `.env`  
- Logging with Morgan  
- Code linting with ESLint + Prettier  

## 📁 Project Structure

project/
├── controllers/
├── models/
├── routes/
├── utils/
├── config/
├── public/
├── app.js
├── server.js
└── .env


## 📦 Tech Stack

- **Backend**: Node.js, Express  
- **Database**: MongoDB + Mongoose  
- **Authentication**: JWT, bcryptjs  
- **Validation**: validator  
- **Dev Tools**: ESLint (Airbnb), Prettier, Nodemon  

## 🛠️ Installation

1. **Clone the repository**
git clone https://github.com/yurii-krymskiy/Natours.git
cd Natours


2. **Install dependencies**
npm install


3. **Create a `.env` file**
NODE_ENV=development
PORT=3000
DATABASE=<your-mongodb-connection-string>
DATABASE_PASSWORD=<your-password>
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d


4. **Start the server**

- Development:
  ```
  npm run start:dev
  ```

- Production:
  ```
  npm run start:prod
  ```

## 🧪 API Endpoints Overview

### 👤 Users
- `POST /api/v1/users/signup` – Register new user  
- `POST /api/v1/users/login` – User login  

### 🧳 Tours
- `GET /api/v1/tours` – Get all tours  
- `POST /api/v1/tours` – Create new tour  
- `GET /api/v1/tours/:id` – Get tour by ID  
- `PATCH /api/v1/tours/:id` – Update tour  
- `DELETE /api/v1/tours/:id` – Delete tour  

> Full API documentation coming soon (Postman or Swagger)

## 🧹 Code Style

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)  
- Integrated with ESLint + Prettier  

## 👨‍💻 Author

**Yurii Krymskiy**  
GitHub: [@yurii-krymskiy](https://github.com/yurii-krymskiy)

## 📜 License

Licensed under the [ISC License](LICENSE).
