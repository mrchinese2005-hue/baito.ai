function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-14 px-6 border-t border-slate-800">

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">


          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              BAITO<span className="text-cyan-400">.AI</span>
            </h2>

            <p className="leading-relaxed">
              Creating the future with artificial intelligence.
              Build stories, images, videos, and creative content with AI.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              AI Tools
            </h3>

            <div className="flex flex-col gap-3">

              <a 
                href="/story-generator"
                className="hover:text-cyan-400 transition"
              >
                AI Story Generator
              </a>

              <a 
                href="/image-generator"
                className="hover:text-cyan-400 transition"
              >
                AI Image Generator
              </a>

              <a 
                href="/video-generator"
                className="hover:text-cyan-400 transition"
              >
                AI Video Generator
              </a>

            </div>
          </div>


          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3">

              <a href="/" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                Contact
              </a>

            </div>
          </div>


        </div>


        <div className="border-t border-slate-800 mt-10 pt-6 text-center">

          <p className="text-sm">
            © 2026 BAITO.AI. All rights reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}

export default Footer;