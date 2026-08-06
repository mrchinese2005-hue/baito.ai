import { useState, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { Send, Mic, AudioLines } from "lucide-react";

function ChatInput({
  input,
  setInput,
  sendMessage,
  setShowVoiceCall,

}) {
  const [voiceChat, setVoiceChat] = useState(false);
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.maxAlternatives = 1;

recognition.onstart = () => {
  console.log("🎤 Listening...");
  setIsListening(true);
};

recognition.onresult = (event) => {
  const result =
    event.results[event.results.length - 1];

  if (!result.isFinal) return;

  const transcript = result[0].transcript.trim();

  console.log("You said:", transcript);

  setInput(transcript);

  recognition.stop();

  setTimeout(() => {
    sendMessage(transcript);
  }, 100);
};

recognition.onend = () => {
  console.log("🛑 Listening stopped");
  setIsListening(false);

  if (input.trim()) {
    sendMessage(input);
    setInput("");
  }
};

    recognition.onerror = (event) => {
      console.error("Speech Error:", event.error);
      alert("Speech Error: " + event.error);
    };

    recognition.start();

    recognitionRef.current = recognition;
  };
    return (
  <div className="border-t border-slate-800 p-4 flex items-center">

    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessage();
        }
      }}
      placeholder="Ask BAITO AI..."
      className="flex-1 bg-slate-900 rounded-xl px-5 py-4 outline-none text-white"
    />

<button
  onClick={startListening}
  className={`ml-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
    isListening
      ? "bg-red-500 animate-pulse"
      : "bg-slate-800 hover:bg-slate-700"
  }`}
  title={isListening ? "Listening..." : "Voice Chat"}
>
  <Mic size={20} />
</button>
<button
onClick={() => setShowVoiceCall(true)}
  className={`ml-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
    voiceChat
      ? "bg-green-500 animate-pulse"
      : "bg-slate-800 hover:bg-slate-700"
  }`}
  title="Voice Conversation"
>
  <AudioLines size={20} />
</button>
    <button
      onClick={() => sendMessage()}
      className="ml-3 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 hover:scale-110 flex items-center justify-center transition-all duration-300"
    >
      <ArrowUp className="text-black" size={22} />
    </button>

  </div>
);
}

export default ChatInput;