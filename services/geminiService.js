import { GoogleGenerativeAI } from "@google/generative-ai";

const generateResponse = async (prompt) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response || "No result generated.";
  } catch (error) {
    console.error("❌ Error generating response:", error);
    throw new Error("Failed to generate response. Try again later.");
  }
};

export default generateResponse;
