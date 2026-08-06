import { useState, useRef } from "react";
import { PhoneOff } from "lucide-react";
function VoiceCall({ endCall }) {
      const [status, setStatus] = useState("Ready to start");
  const [conversationStarted, setConversationStarted] = useState(false);

  const recognitionRef = useRef(null);
    const speak = (text) => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => {
      setStatus("🔊 Speaking...");
    };

    utterance.onend = () => {
      setStatus("🎤 Listening...");

      if (conversationStarted) {
        startListening();
      }
    };

    window.speechSynthesis.speak(utterance);
  };
  const sendToAI = async (text) => {
  try {
    setStatus("🧠 Thinking...");

    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: text,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Server Error");
    }

    const data = await response.json();

    console.log("BAITO AI:", data.reply);

    speak(data.reply);

  } catch (error) {
    console.error(error);
    setStatus("❌ Connection Error");
  }
};
const startListening = () => {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    console.log("🎤 Listening...");
    setStatus("🎤 Listening...");
  };

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript.trim();

    console.log("You:", text);

    sendToAI(text);
  };

  recognition.onend = () => {
    console.log("🛑 Listening stopped");
  };

  recognition.onerror = (event) => {
    console.error("Speech Error:", event.error);
    setStatus("❌ Speech Error");
  };

  recognition.start();

  recognitionRef.current = recognition;
};
return (
  <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black flex flex-col items-center justify-between text-white overflow-hidden">

  {/* Top */}
<div className="pt-14 text-center z-10">
  <h1 className="text-4xl font-bold tracking-wide">
    BAITO AI
  </h1>

  <p className="mt-3 text-slate-400 text-lg">
    {status}
  </p>
</div>
<div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

<div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-cyan-400/5 blur-3xl"></div>
{/* Center */}
<div className="flex-1 flex items-center justify-center z-10">

  <div className="relative">

    {/* Outer Ring */}
    <div className="absolute inset-0 rounded-full border border-cyan-400/20 scale-125 animate-ping"></div>

    {/* Second Ring */}
    <div className="absolute inset-0 rounded-full border border-cyan-300/10 scale-150"></div>

    {/* AI Orb */}
    <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_90px_rgba(34,211,238,0.45)] flex items-center justify-center">

      {/* Wave */}
      <div className="flex items-end gap-1">

        <div className="w-2 h-8 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-14 bg-white rounded-full animate-pulse"></div>
        <div className="w-2 h-10 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-16 bg-white rounded-full animate-pulse"></div>
        <div className="w-2 h-8 bg-white rounded-full animate-bounce"></div>

      </div>

    </div>

  </div>

</div>
{/* Bottom */}
<div className="pb-14 flex flex-col items-center z-10">

  <button
    onClick={() => {
      setConversationStarted(true);
      startListening();
    }}
    className="mb-8 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-300"
  >
    Start Conversation
  </button>

  <button
    onClick={endCall}
    className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-[0_0_35px_rgba(239,68,68,0.45)] flex items-center justify-center"
  >
    <PhoneOff size={30} strokeWidth={2.8} />
  </button>

  <p className="mt-5 text-slate-400 tracking-wide">
    End Conversation
  </p>

</div>
  </div>
);
}

export default VoiceCall;