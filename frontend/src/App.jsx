import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Image from "./pages/Image";
import Video from "./pages/Video";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AIChat from "./pages/AIChat";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story-generator" element={<Story />} />
        <Route path="/image-generator" element={<Image />} />
        <Route path="/video-generator" element={<Video />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/ai-chat" element={<AIChat />} />
      </Routes>
    </div>
  );
}

export default App;