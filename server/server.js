import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize express app
const app = express();
const port = Number(process.env.PORT) || 3000;

// Connect database
await connectDB();

//  Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/', (req, res) => res.send("Sever is Running"));
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/booking', bookingRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
