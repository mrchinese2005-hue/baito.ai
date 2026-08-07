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
    const { messages } = req.body;

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

    const reply = completion.choices[0].message.content;

    res.status(200).json({
      reply,
    });

  } catch (error) {
    console.error("OPENROUTER ERROR:", error);

    res.status(500).json({
      reply: "Sorry, BAITO AI is temporarily unavailable.",
    });
  }
}