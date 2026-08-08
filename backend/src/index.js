const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    const url = new URL(request.url);

    // Test endpoint
    if (url.pathname === "/" && request.method === "GET") {
      return new Response(
        JSON.stringify({
          message: "✅ BAITO AI Backend is Running!",
        }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Chat endpoint
    if (url.pathname === "/chat" && request.method === "POST") {
      try {
        const { messages } = await request.json();

        if (!Array.isArray(messages)) {
          return new Response(
            JSON.stringify({
              reply: "Invalid messages format.",
            }),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
                ...corsHeaders,
              },
            }
          );
        }

        const response = await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "openai/gpt-oss-20b:free",
              messages: [
                {
                  role: "system",
                  content:
                    "You are BAITO AI, a helpful AI assistant. Give clear and concise answers.",
                },
                ...messages,
              ],
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.error("OpenRouter error:", data);

          return new Response(
            JSON.stringify({
              reply: "Sorry, BAITO AI is temporarily unavailable.",
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
                ...corsHeaders,
              },
            }
          );
        }

        const reply =
          data?.choices?.[0]?.message?.content ||
          "Sorry, I could not generate a response.";

        return new Response(
          JSON.stringify({
            reply,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      } catch (error) {
        console.error("BAITO AI ERROR:", error);

        return new Response(
          JSON.stringify({
            reply: "Sorry, BAITO AI is temporarily unavailable.",
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      }
    }

    return new Response("Not Found", {
      status: 404,
      headers: corsHeaders,
    });
  },
};