// import { OpenAI } from "openai";

// const client = new OpenAI({
//   // baseURL: "https://router.huggingface.co/v1",
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default ai;
