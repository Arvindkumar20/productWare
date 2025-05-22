import generateResponse from "../services/geminiService.js";
import { formatGeminiResponse } from "../utils/formatGeminiResponse.js";

export const generateGeminiResponse = async (req, res) => {
  const { prompt } = req.body;

  try {
    const reply = await generateResponse(prompt);
    
    res.json({ success: true, reply });
  } catch (error) {
    console.error("❌ Gemini Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
