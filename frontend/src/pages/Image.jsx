function ImageGenerator() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-start pt-24 px-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          AI Image Generator
        </h1>

        <textarea
          className="w-full h-36 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          placeholder="Describe the image you want to create..."
        ></textarea>

        <button className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-black font-semibold transition">
          Generate Image
        </button>
      </div>
    </div>
  );
}

export default ImageGenerator;