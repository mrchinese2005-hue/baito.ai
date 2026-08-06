function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">

        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
          ◉ The Future of AI Creativity
        </span>

        <h1 className="text-6xl font-extrabold mt-8 leading-tight">
          Create Amazing
          <span className="text-cyan-400"> AI Stories</span>,
          Images & Videos
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto leading-8">
          BAITO.AI helps creators generate professional stories,
          stunning AI images, and cinematic AI videos in just seconds.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-bold transition">
            Start Creating
          </button>

          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl text-lg font-bold transition">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;