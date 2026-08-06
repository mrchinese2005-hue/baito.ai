import {
  Plus,
  MessageSquare,
  Settings,
  PanelLeftClose,
  Trash2,
  Pencil,
} from "lucide-react";

function Sidebar({
  collapsed,
  setCollapsed,
  newChat,
  chatHistory,
  loadChat,
  deleteChat,
  renameChat,

}) {
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } bg-slate-950 border-r border-slate-800 flex flex-col transition-all duration-300`}
    >
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">

        {!collapsed && (
          <h1 className="text-2xl font-bold text-cyan-400">
            BAITO AI
          </h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-slate-800 transition"
        >
          <PanelLeftClose size={20} />
        </button>

      </div>
            <div className="p-4">

        <button
          onClick={newChat}
          className="w-full flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-3 rounded-xl transition"
        >

          <Plus size={20} />

          {!collapsed && "New Chat"}

        </button>

      </div>
            <div className="flex-1 px-3 overflow-y-auto">

        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mb-2"
          >

            <button
              onClick={() => loadChat(chat)}
              className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
            >

              <MessageSquare size={18} />

              {!collapsed && (
                <span className="truncate">
                  {chat.title}
                </span>
              )}

            </button>


            {!collapsed && (
              <button
                onClick={() => deleteChat(index)}
                className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 transition"
                title="Delete chat"
              >
                <Trash2 size={16} />
              </button>
            )}
            {!collapsed && (
  <button
    onClick={() => {
  const newTitle = prompt(
    "Enter new chat name:",
    chat.title
  );

  if (newTitle) {
    renameChat(index, newTitle);
  }
}}
    className="p-2 rounded-lg hover:bg-slate-800 transition"
    title="Rename chat"
  >
    <Pencil size={16} />
  </button>
)}

          </div>
        ))}

      </div>
            <div className="p-4 border-t border-slate-800">

        <button
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
        >

          <Settings size={18} />

          {!collapsed && "Settings"}

        </button>

      </div>

    </div>
  );
}

export default Sidebar;