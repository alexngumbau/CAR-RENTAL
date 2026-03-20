import express from "express";
import "dotenv/config";
import cors from "cors";

// Initialize express app
const app = express();
const port = Number(process.env.PORT) || 3000;

//  Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/', (req, res) => res.send("Sever is Running"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
