import { useState } from "react";

function AIChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    console.log("BUTTON CLICKED");
    if (!message.trim()) return;

    try {
      setLoading(true);
      setReply("");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: message,
        }),
      });

      const data = await response.json();

      console.log("AI DATA:", data);

      setReply(
        data.answer || data.error || "No answer received"
      );

    } catch (error) {
      console.log("FRONTEND ERROR:", error);
      setReply("❌ Cannot connect to AI server");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        ◆ BAITO AI Chat
      </h1>


      <div className="bg-slate-800 p-6 rounded-xl">

        <textarea
          className="w-full p-4 text-black rounded-lg"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />


        <button
          onClick={sendMessage}
          disabled={loading}
          className="mt-4 bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>


        <div className="mt-6 bg-slate-700 p-4 rounded-lg">
          {reply || "AI answer will appear here..."}
        </div>


      </div>

    </div>
  );
}

export default AIChat;