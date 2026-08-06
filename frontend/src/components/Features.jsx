import { BookOpen, Image, Video } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <BookOpen />,
      title: "AI Story Generator",
      description: "Create amazing stories, scripts, and creative ideas with AI.",
      link: "/story-generator",
      button: "Create Story",
    },
    {
      icon: <Image />,
      title: "AI Image Generator",
      description: "Transform your imagination into stunning AI visuals.",
      link: "/image-generator",
      button: "Generate Image",
    },
    {
      icon: <Video />,
      title: "AI Video Generator",
      description: "Create cinematic videos from simple ideas and prompts.",
      link: "/video-generator",
      button: "Create Video",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-950 text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Powerful AI Tools
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Everything you need to create amazing content with artificial
          intelligence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-cyan-400 mb-4 [&>svg]:w-12 [&>svg]:h-12">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-6 mb-6">
                {feature.description}
              </p>

              <a
                href={feature.link}
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2.5 rounded-lg transition"
              >
                {feature.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;