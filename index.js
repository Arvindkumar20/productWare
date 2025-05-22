import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import geminiRoutes from "./routes/geminiRoutes.js";

dotenv.config();
const app = express();
const allowedOrigins = ['http://localhost:5173', 'https://productware.in'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

// Routes
app.use("/api/gemini", geminiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
