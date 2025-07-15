# 🧭 Natours API

A full-featured RESTful API for a travel booking platform, built with **Node.js**, **Express**, **MongoDB**, and **Stripe**. It supports user authentication, role-based authorization, image uploads, advanced filtering/sorting, reviews, payments, and more.

## 📦 Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Stripe** for payments
- **JWT Authentication**
- **Multer** + **Sharp** for file uploads and image processing
- **Security**: Helmet, Rate limiting, Data sanitization (NoSQL & XSS)
- **Linting/Formatting**: ESLint (Airbnb) + Prettier

---

## 🚀 Features

### 🔐 Authentication & Authorization

- Signup / Login / Logout
- Password reset via email
- Role-based access (admin, lead-guide, guide, user)

### 🧑 Users

- Get/update/delete user profile
- Upload and resize profile photo
- Admin-only user management

### 🌍 Tours

- CRUD operations on tours
- Image uploads for tour cover and gallery
- Filtering, sorting, pagination
- Geospatial queries (`tours-within`, `distances`)
- Monthly plans & stats (admin & guides)

### ⭐ Reviews

- Users can review tours
- Only authenticated users can write/edit/delete their reviews

### 💳 Bookings & Payments

- Stripe Checkout integration
- Secure backend booking creation
- Booking management (admin only)

---

## 🛠️ Installation

```bash
git clone https://github.com/yurii-krymskiy/Natours.git
cd project-1
npm install
```

🔑 Environment Variables
Create a .env file in the root:

```
NODE_ENV=development
PORT=3000
DATABASE=mongodb+srv://...
DATABASE_PASSWORD=yourMongoPassword
JWT_SECRET=yourJWTSecret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
EMAIL_USERNAME=yourEmailUser
EMAIL_PASSWORD=yourEmailPass
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
STRIPE_SECRET_KEY=yourStripeSecretKey
STRIPE_WEBHOOK_SECRET=yourStripeWebhookSecret
```

▶️ Usage

```
npm run start:dev
```

Runs the server with nodemon on http://localhost:3000

🧪 API Endpoints

Auth
```
POST   /api/v1/users/signup
POST   /api/v1/users/login
POST   /api/v1/users/forgotPassword
PATCH  /api/v1/users/resetPassword/:token
```

Users (Protected)
```
GET    /api/v1/users/me
PATCH  /api/v1/users/updateMe
PATCH  /api/v1/users/updateMyPassword
DELETE /api/v1/users/deleteMe
```

Admin Users
```
GET    /api/v1/users
POST   /api/v1/users
GET    /api/v1/users/:id
PATCH  /api/v1/users/:id
DELETE /api/v1/users/:id
```

Tours
```
GET    /api/v1/tours
POST   /api/v1/tours
GET    /api/v1/tours/:id
PATCH  /api/v1/tours/:id
DELETE /api/v1/tours/:id

GET    /api/v1/tours/top-5-cheap
GET    /api/v1/tours/tour-stats
GET    /api/v1/tours/monthly-plan/:year
GET    /api/v1/tours/tours-within/:distance/center/:latlng/unit/:unit
GET    /api/v1/tours/distances/:latlng/unit/:unit
```

Reviews
```
GET    /api/v1/tours/:tourId/reviews
POST   /api/v1/tours/:tourId/reviews
GET    /api/v1/reviews/:id
PATCH  /api/v1/reviews/:id
DELETE /api/v1/reviews/:id
```

Bookings
```
GET    /api/v1/bookings/checkout-session/:tourId
GET    /api/v1/bookings
POST   /api/v1/bookings
GET    /api/v1/bookings/:id
PATCH  /api/v1/bookings/:id
DELETE /api/v1/bookings/:id
```
✍️ Author

Made by Yurii

🧼 Lint & Format

npm run lint      # using ESLint (Airbnb config)
npm run format    # using Prettier

⚠️ License

This project is licensed under the ISC License.
