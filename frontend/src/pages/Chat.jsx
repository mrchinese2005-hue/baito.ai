import { useState, useEffect, useRef } from "react";
import ChatWelcome from "../components/ChatWelcome";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";
import VoiceCall from "../components/VoiceCall";
function Chat() {
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("baiToChat");
    return saved ? JSON.parse(saved) : [];
  });
  const [chatHistory, setChatHistory] = useState(() => {
  const saved = localStorage.getItem("baiToHistory");
  return saved ? JSON.parse(saved) : [];
});

  const [input, setInput] = useState("");

  const [collapsed, setCollapsed] = useState(false);
  const [showVoiceCall, setShowVoiceCall] = useState(false);
  const speak = (text) => {
  if (!("speechSynthesis" in window)) return;

  // Stop any speech already in progress
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "en-US";
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
};

  useEffect(() => {
    localStorage.setItem(
      "baiToChat",
      JSON.stringify(messages)
    );
  }, [messages]);
useEffect(() => {
  localStorage.setItem(
    "baiToHistory",
    JSON.stringify(chatHistory)
  );
}, [chatHistory]);

  const typeMessage = (fullText) => {
    let index = 0;

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: "",
      },
    ]);

    const interval = setInterval(() => {
      if (index >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
        return;
      }

      const letter = fullText[index];
      index++;

      setMessages((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          text:
            updated[updated.length - 1].text + letter,
        };

        return updated;
      });
    }, 80);
  };

const loadChat = (chat) => {
  setMessages(chat.messages);
};

const deleteChat = (index) => {
  const updatedHistory = chatHistory.filter(
    (_, i) => i !== index
  );

  setChatHistory(updatedHistory);

  localStorage.setItem(
    "baiToHistory",
    JSON.stringify(updatedHistory)
  );
};
const renameChat = (index, newTitle) => {
  const updatedHistory = [...chatHistory];

  updatedHistory[index].title = newTitle;

  setChatHistory(updatedHistory);

  localStorage.setItem(
    "baiToHistory",
    JSON.stringify(updatedHistory)
  );
};
  const newChat = () => {
    setMessages([]);
    localStorage.removeItem("baiToChat");
    setIsTyping(false);
  };

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    const userMessage = messageText;

    const updatedMessages = [
      ...messages,
      {
        sender: "user",
        text: userMessage,
      },
    ];

    setMessages(updatedMessages);
    if (messages.length === 0) {
  const newChat = {
    title: userMessage.slice(0, 25),
    messages: updatedMessages,
  };

  setChatHistory((prev) => [
    ...prev,
    newChat,
  ]);
}

    setInput("");
    setIsTyping(true);


    try {
const response = await fetch(
"https://baito-ai.mrchinese2005.workers.dev/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: updatedMessages.map((msg) => ({
              role:
                msg.sender === "user"
                  ? "user"
                  : "assistant",
              content: msg.text,
            })),
          }),
        }
      );


      const data = await response.json();

const aiText = data.reply;

typeMessage(aiText);

speak(aiText);

    } catch (error) {
      console.error(error);

      typeMessage(
        "Sorry, I couldn't connect to BAITO AI."
      );
    }
  };


  return (
<>
    {showVoiceCall && (
      <VoiceCall
        endCall={() => setShowVoiceCall(false)}
      />
      )}


    <div className="min-h-screen bg-slate-950 text-white flex">

     <Sidebar
  collapsed={collapsed}
  setCollapsed={setCollapsed}
  newChat={newChat}
  chatHistory={chatHistory}
  loadChat={loadChat}
  deleteChat={deleteChat}
  renameChat={renameChat}
/>


      <div className="flex-1">

        {messages.length === 0 ? (

          <ChatWelcome
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />

        ) : (

          <div className="max-w-4xl mx-auto h-screen flex flex-col">

           <ChatMessages
  messages={messages}
  isTyping={isTyping}
  sendMessage={sendMessage}
/>


            <ChatInput
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
              setShowVoiceCall={setShowVoiceCall}
            />

          </div>

        )}

      </div>

    </div>
  </>
  );
}

export default Chat;