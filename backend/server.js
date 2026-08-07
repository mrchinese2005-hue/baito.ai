import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

app.get("/", (req, res) => {
  res.json({
    message: "✅ BAITO AI Backend is Running!",
  });
});

app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "system",
          content:
            "You are BAITO AI, a helpful AI assistant. Give clear and concise answers.",
        },
        ...messages,
      ],
    });

    const reply = response.choices[0].message.content;

    res.json({
      reply,
    });

  } catch (error) {
    console.error("BAITO AI ERROR:");
    console.error(error.message);

    res.status(500).json({
      reply: "Sorry, BAITO AI is temporarily unavailable.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 BAITO AI Backend running on port ${PORT}`);
});