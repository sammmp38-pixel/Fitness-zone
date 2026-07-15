import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post("/api/chat", async (req, res) => {
    if (!ai) {
      return res.status(500).json({ error: "Gemini API key is not configured on the server." });
    }

    try {
      const { messages } = req.body;
      
      const systemInstruction = `You are Fit, an AI chatbot for Fitness Zone, a premium gym located in Barapali Town, Odisha. 
Your job is to answer customer queries in a friendly, helpful, and energetic tone.
Gym details:
- Name: Fitness Zone
- Address: 5HXG+X99, Sohela–Barpali Road, Near Fire Station, Barapali Town, Gopaipali, Odisha – 768029
- Phone/WhatsApp: 073811 27273
- Hours: Mon-Sat 4:00 AM – 9:00 AM & 4:00 PM – 9:00 PM, Sunday Closed.
- Features: Professional Trainers, Modern Equipment, Strength Training, Cardio Zone, Weight Loss Programs.
Keep your answers concise and welcoming. Encourage people to book a class or visit the gym!`;

      // Convert messages to the format expected by GenAI SDK
      const contents = messages.map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ message: response.text });
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      res.status(500).json({ error: "Failed to generate response." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
