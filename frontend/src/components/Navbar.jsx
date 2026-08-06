function Navbar() {
  return (
    <nav className="bg-slate-950 text-white px-6 py-4 flex justify-between items-center">

      <h2 className="text-3xl font-bold">
        <a href="/" className="hover:text-cyan-400 transition">
          BAITO<span className="text-cyan-400">.AI</span>
        </a>
      </h2>

<div className="flex items-center gap-4 text-sm font-medium text-gray-300">
        <a href="/" className="hover:text-cyan-400 transition">
          Home
        </a>

        <a href="/story-generator" className="hover:text-cyan-400 transition">
          AI Story
        </a>

        <a href="/image-generator" className="hover:text-cyan-400 transition">
          AI Image
        </a>

        <a href="/video-generator" className="hover:text-cyan-400 transition">
          AI Video
        </a>
        <a href="/chat" className="hover:text-cyan-400 transition">
  AI Chat
</a>
        <a href="/dashboard" className="hover:text-cyan-400 transition">
  Dashboard
</a>

        <a href="/login" className="hover:text-cyan-400 transition">
          Login
        </a>

        <a
          href="/signup"
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-5 py-2 rounded-xl transition"
        >
          Sign Up
        </a>

      </div>

    </nav>
  );
}

export default Navbar;