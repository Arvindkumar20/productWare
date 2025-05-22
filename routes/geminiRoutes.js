import express from "express";
import { generateGeminiResponse } from "../controllers/geminiController.js";

const router = express.Router();

router.post("/generate", generateGeminiResponse);

export default router;
