function WhyChoose() {
  const reasons = [
    {
      icon: "⚡",
      title: "Fast Creation",
      text: "Generate stories, images, and videos quickly with powerful AI tools."
    },
    {
      icon: "🤖",
      title: "Advanced AI",
      text: "Transform your imagination into creative content using modern AI technology."
    },
    {
      icon: "🌍",
      title: "Creator Friendly",
      text: "A simple and powerful platform built for creators everywhere."
    }
  ];

  return (
    <section className="bg-slate-950 text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-5">
          Why Choose <span className="text-cyan-400">BAITO.AI?</span>
        </h2>

        <p className="text-gray-400 text-center text-lg mb-14">
          Powerful AI tools designed to turn your ideas into reality.
        </p>


        <div className="grid md:grid-cols-3 gap-8">

          {reasons.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900/80 border border-slate-700 p-8 rounded-3xl text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-6xl mb-6">
                {item.icon}
              </div>


              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>


              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;