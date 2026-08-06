import { motion } from "framer-motion";
import {
  Bot,
  PenTool,
  Image,
  Video,
  Folder,
  Settings,
} from "lucide-react";


function Dashboard() {

  const cards = [
    {
      icon: Bot,
      title: "AI Chat",
      description: "Talk with your intelligent AI assistant",
    },
    {
      icon: PenTool,
      title: "Story Studio",
      description: "Create professional AI stories",
    },
    {
      icon: Image,
      title: "Image Studio",
      description: "Generate high quality AI images",
    },
    {
      icon: Video,
      title: "Video Studio",
      description: "Create cinematic AI videos",
    },
    {
      icon: Folder,
      title: "Projects",
      description: "Manage your AI creations",
    },
    {
      icon: Settings,
      title: "Settings",
      description: "Control your BAITO AI settings",
    },
  ];


  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        BAITO AI Dashboard
      </h1>


      <div className="grid md:grid-cols-3 gap-8">

        {cards.map((card, index) => {

          const Icon = card.icon;

          return (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition"
            >

              <div className="bg-cyan-400/10 w-16 h-16 flex items-center justify-center rounded-xl mb-6">

                <Icon
                  size={32}
                  className="text-cyan-400"
                />

              </div>


              <h2 className="text-2xl font-bold">
                {card.title}
              </h2>


              <p className="text-gray-400 mt-3">
                {card.description}
              </p>


            </motion.div>

          );

        })}

      </div>

    </div>
  );
}


export default Dashboard;