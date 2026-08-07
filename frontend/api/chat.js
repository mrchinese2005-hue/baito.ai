import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { messages } = req.body || {};

    if (!Array.isArray(messages)) {
      return res.status(400).json({
        message: "messages must be an array",
      });
    }

    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content:
            "You are BAITO AI, a helpful AI assistant. Give clear and concise answers. Avoid unnecessary long explanations unless the user asks for details. Use simple formatting.",
        },
        ...messages,
      ],
    });

    const reply = completion.choices?.[0]?.message?.content;

    return res.status(200).json({
      reply: reply || "Sorry, I could not generate a response.",
    });
  } catch (error) {
    console.error("OPENROUTER ERROR:", error);

    return res.status(500).json({
      reply: "Sorry, BAITO AI is temporarily unavailable.",
    });
  }
}
