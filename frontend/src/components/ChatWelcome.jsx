import { motion } from "framer-motion";
import { ArrowUp, BookOpen, Image, Video } from "lucide-react";

function ChatWelcome({ input, setInput, sendMessage }) {
  return (
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
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
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
  );
}

export default ChatWelcome;