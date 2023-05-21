

const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      image: "https://i.postimg.cc/8C8c3f9C/p1.jpg",
      name: "John Doe",
      role: "Parent",
      comment:
        "RoboPlay has been an amazing resource for finding educational and fun toys for my kids. They absolutely love the products and I appreciate the quality and variety available.",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/9fG0jFHY/p2.jpg",
      name: "Jane Smith",
      role: "Teacher",
      comment:
        "As an educator, I highly recommend RoboPlay for engaging STEM toys. The toys help foster creativity and problem-solving skills in children. The students are always excited to learn with these toys.",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/C1S1MTFT/p3.jpg",
      name: "Mike Johnson",
      role: "Toy Collector",
      comment:
        "I've been collecting toys for years, and RoboPlay has become my go-to platform. They have a wide selection of collectibles and rare finds. The customer service is exceptional too!",
    },
  ];

  return (
    <section className="bg-white py-10 mb-12 px-12 " data-aos="fade-up" data-aos-duration="3000">
      <div className="container mx-auto px-4">
        <h2 className='text-center font-bold text-cyan-500 text-4xl mb-6'>What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 rounded-lg p-4">
              <div className="avatar">
                <div className="w-24 rounded-xl">
                  <img src={testimonial.image} />
                </div>
              </div>
              <p className="text-gray-800">{testimonial.comment}</p>
              <div className="mt-4 flex items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
