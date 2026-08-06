import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, RefreshCw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ChatMessages({ messages, isTyping, sendMessage }) {
  const bottomRef = useRef(null);
    const [copied, setCopied] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);
    const copyMessage = async (text, index) => {
    await navigator.clipboard.writeText(text);

    setCopied(index);

    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`max-w-[75%] p-4 rounded-2xl ${
            msg.sender === "user"
              ? "ml-auto bg-cyan-500 text-black"
              : "bg-slate-800 text-white"
          }`}
        >
    <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mb-3">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-xl font-bold mb-2">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-lg font-semibold mb-2">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="mb-3 leading-7">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="list-disc ml-6 mb-3">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal ml-6 mb-3">
        {children}
      </ol>
    ),

    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-slate-900 px-2 py-1 rounded">
          {children}
        </code>
      );
    },
  }}
>
  {msg.text}
</ReactMarkdown>
{msg.sender === "ai" && (
  <div className="flex gap-3 mt-3">

    <button
      onClick={() => copyMessage(msg.text, index)}
      className="text-cyan-400 hover:text-cyan-300 transition"
      title="Copy"
    >
      {copied === index ? (
        <Check size={18} />
      ) : (
        <Copy size={18} />
      )}
    </button>

    <button
      onClick={() => {
        const lastUserMessage = messages
          .slice(0, index)
          .reverse()
          .find((msg) => msg.sender === "user");

        if (lastUserMessage) {
          sendMessage(lastUserMessage.text);
        }
      }}
      className="text-cyan-400 hover:text-cyan-300 transition"
      title="Regenerate"
    >
      <RefreshCw size={18} />
    </button>

  </div>
)}

          {msg.sender === "ai" &&
            index === messages.length - 1 &&
            isTyping && (
              <span className="animate-pulse ml-1">▌</span>
            )}
        </motion.div>
      ))}

            {isTyping &&
        (messages.length === 0 ||
          messages[messages.length - 1].sender === "user") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-slate-800 text-gray-300 max-w-[75%] p-4 rounded-2xl"
          >
            <div className="flex items-center gap-2">
              <span>
                BAITO AI is thinking
              </span>

              <span className="flex gap-1">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-150">●</span>
                <span className="animate-bounce delay-300">●</span>
              </span>
            </div>
          </motion.div>
        )}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatMessages;