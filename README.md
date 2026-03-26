# 🚗 CarRental

A full-stack car rental platform built with React and Express.js. Users can browse and book cars, while owners can list vehicles and manage bookings through a dedicated dashboard.

🔗 **Live:** [https://car-rental-nine-psi.vercel.app](https://car-rental-nine-psi.vercel.app/)

## Features

- User registration & login with JWT authentication
- Browse and search available cars by location and dates
- Book cars with automatic price calculation
- Owner dashboard — list cars, manage bookings, track revenue
- Image uploads optimized via ImageKit (auto-compress, WebP)
- Responsive UI with Tailwind CSS and smooth animations

## Tech Stack

**Frontend:** React 19, React Router, Tailwind CSS 4, Vite, Axios, Motion

**Backend:** Node.js, Express 5, MongoDB, Mongoose, JWT, bcrypt, ImageKit, Multer

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB instance (local or [Atlas](https://www.mongodb.com/atlas))
- [ImageKit](https://imagekit.io/) account

### Setup

```bash
# Clone the repo
git clone https://github.com/alexngumbau/car-rental.git
cd car-rental

# Install dependencies
cd server && npm install
cd ../client && npm install
```

### Environment Variables

**server/.env**

```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
```

**client/.env**

```env
VITE_BASE_URL=http://localhost:3000
VITE_CURRENCY=$
```

### Run

```bash
# Start backend (from /server)
npm run server

# Start frontend (from /client)
npm run dev
```

The client runs on `http://localhost:5173` and the server on `http://localhost:3000`.

## Deployment

Both frontend and backend are deployed on [Vercel](https://vercel.com/) as separate projects. Set the root directory to `client` or `server` respectively and add the environment variables in Vercel's project settings.

## License

MIT
