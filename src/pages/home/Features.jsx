

const Features = () => {
  // Dummy data for features
  const features = [
    {
      id: 1,
      title: "Immersive Experiences",
      description: "Experience our toys like never before with interactive and immersive features.",
    },
    {
      id: 2,
      title: "Innovative Technology",
      description: "We incorporate cutting-edge technology to enhance play and stimulate creativity.",
    },
    {
      id: 3,
      title: "Sustainable Materials",
      description: "Our toys are crafted from eco-friendly and sustainable materials for a greener future.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-cyan-200 to-blue-200 px-12 mx-12 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-gray-700 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 bg-white rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
