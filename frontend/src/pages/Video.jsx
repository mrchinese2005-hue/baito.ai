import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, BookOpen, Image, Video } from "lucide-react";function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "user",
        text: input,
      },
      {
        sender: "ai",
        text: "This is a demo response. Soon BAITO AI will answer with real AI.",
      },
    ]);

    setInput("");
  };  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {messages.length === 0 ? (

        <div className="flex flex-col justify-center items-center h-screen px-6">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 0.8,
              scale: {
                duration: 3,
                repeat: Infinity,
              },
            }}
            className="text-6xl font-extrabold tracking-wide text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]"
          >
            BAITO AI
          </motion.h1>

          <p className="mt-3 mb-10 text-gray-400 text-lg">
            Your Intelligent AI Assistant
          </p>

          <div className="w-full max-w-3xl flex items-center bg-slate-900/90 border border-slate-700 rounded-full overflow-hidden shadow-2xl">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask BAITO AI anything..."
              className="flex-1 bg-transparent px-6 py-5 outline-none text-lg"
            />

            <button
              onClick={sendMessage}
              className="m-2 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 hover:scale-110 flex items-center justify-center transition-all duration-300"
            >
              <ArrowUp className="text-black" size={22} />
            </button>

          </div>

          <div className="flex gap-4 mt-8 flex-wrap justify-center">

            <button className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-full flex items-center gap-2 hover:border-cyan-400 transition">
              <BookOpen size={18} />
              Story
            </button>

            <button className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-full flex items-center gap-2 hover:border-cyan-400 transition">
              <Image size={18} />
              Image
            </button>

            <button className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-full flex items-center gap-2 hover:border-cyan-400 transition">
              <Video size={18} />
              Video
            </button>

          </div>

        </div>

      ) : (        <div className="max-w-4xl mx-auto h-screen flex flex-col">

          <div className="flex-1 overflow-y-auto p-6 space-y-4">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`max-w-[75%] p-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "ml-auto bg-cyan-500 text-black"
                    : "bg-slate-800"
                }`}
              >
                {msg.text}
              </div>

            ))}

          </div>

          <div className="border-t border-slate-800 p-4 flex">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask BAITO AI..."
              className="flex-1 bg-slate-900 rounded-xl px-5 py-4 outline-none"
            />

            <button
              onClick={sendMessage}
              className="ml-3 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 hover:scale-110 flex items-center justify-center transition-all duration-300"
            >
              <ArrowUp className="text-black" size={22} />
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Chat;