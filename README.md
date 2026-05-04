# GreenCart - E-Commerce Platform

![Project Status](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-yellow)

GreenCart is a modern, responsive, and fully-featured multi-vendor E-Commerce platform built from scratch. It features two distinct user flows: one for customers to browse, cart, and purchase products securely via Stripe, and another for sellers to manage their products, track orders, and analyze their sales through an interactive dashboard.

This project was developed independently as a **Solo Full-Stack Developer**.

## Features

### For Buyers (Users)
- **Authentication**: Secure Login and Registration (JWT & Bcrypt).
- **Product Discovery**: Browse products by category with a responsive UI.
- **Shopping Cart**: Add, update, and remove items from the cart.
- **Address Management**: Save and manage delivery addresses.
- **Secure Checkout**: Seamless online payment integration with **Stripe**.
- **Order Tracking**: View order history and status.

### For Sellers (Admins)
- **Seller Dashboard**: Visual data representation of sales and products using **Recharts**.
- **Product Management**: Full CRUD operations for products with image upload capabilities via **Cloudinary**.
- **Order Management**: Track and update customer orders.

##  Technologies Used

### Frontend (`/client`)
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Data Visualization:** Recharts
- **Routing:** React Router DOM v7
- **API Requests:** Axios
- **Notifications:** React Hot Toast

### Backend (`/server`)
- **Runtime & Framework:** Node.js, Express v5
- **Database:** MongoDB & Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** bcryptjs
- **Image Upload:** Multer & Cloudinary
- **Payment Gateway:** Stripe
- **Security & Utilities:** CORS, Cookie Parser, Dotenv

##  Installation & Setup

Follow these instructions to get the project running on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/greencart.git
cd greencart
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend server:
```bash
npm run server
```

### 3. Frontend Setup
Open a new terminal window and navigate to the `client` folder:
```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:5000/api
# Add any public Stripe keys here if needed
```

Start the frontend development server:
```bash
npm run dev
```

## Project Structure

```text
GREENCART/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages (Home, Cart, ProductDetail...)
│   │   │   └── seller/     # Seller dashboard pages
│   │   ├── App.jsx         # Main router and layout setup
│   │   └── index.css       # Tailwind entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node.js + Express Backend
│   ├── configs/            # Database and 3rd party configs (Cloudinary)
│   ├── controllers/        # Route logic and handlers
│   ├── middlewares/        # Custom middlewares (Auth, Multer)
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API route definitions
│   ├── server.js           # Express app entry point
│   └── package.json
│
└── README.md
```


