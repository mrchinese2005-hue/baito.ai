import { motion } from "framer-motion";
import aiChatVideo from "../assets/videos/ai-chat.mp4";
import storyVideo from "../assets/videos/story-ai.mp4";
import videoStudioVideo from "../assets/videos/video-ai.mp4";

import {
  Bot,
  PenTool,
  Video,
  Sparkles,
} from "lucide-react";

function Home() {

  const features = [
    {
      icon: Bot,
      title: "AI Chat",
      text: "Talk with your intelligent AI assistant.",
    },
    {
      icon: PenTool,
      title: "Story Studio",
      text: "Create amazing stories with artificial intelligence.",
    },
    {
      icon: Video,
      title: "Video Studio",
      text: "Turn your ideas into cinematic videos.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center px-6 py-32">

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-3xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400">
            <Sparkles size={50} className="text-cyan-400" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold"
        >
          Create With
          <span className="text-cyan-400"> BAITO AI</span>
        </motion.h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Create stories, generate images, build videos,
          and explore the power of artificial intelligence.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition">
            Start Creating
          </button>

          <button className="border border-cyan-400 px-8 py-3 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition">
            Try AI Chat
          </button>

        </div>

      </section>
            {/* Feature Cards */}

      <section className="relative grid md:grid-cols-3 gap-8 px-10 pb-24">

        {features.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-slate-900/80 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition"
            >

              <div className="w-16 h-16 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6">
                <Icon
                  size={32}
                  className="text-cyan-400"
                />
              </div>

              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.text}
              </p>

            </motion.div>

          );

        })}

      </section>


      {/* BAITO AI Showcase */}

      <section className="relative px-10 pb-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          BAITO AI Showcase
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 transition">
            <video
              src={aiChatVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">AI Chat</h3>
              <p className="text-gray-400 mt-2">
                Intelligent conversations powered by AI.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 transition">
            <video
              src={storyVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Story Studio</h3>
              <p className="text-gray-400 mt-2">
                Turn your ideas into creative stories.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 transition">
            <video
              src={videoStudioVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Video Studio</h3>
              <p className="text-gray-400 mt-2">
                Create cinematic AI-powered videos.
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;