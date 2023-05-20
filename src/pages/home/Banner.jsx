import dog from '../../assets/dog.png';

const HeroSection = () => {
    return (
        <section className="">
            <div className="hero md:min-h-screen bg-base-200 md:px-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={dog} className="md:max-w-xl rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to <span className='text-cyan-500'>RoboPlay</span></h1>
                        <p className="py-6">Explore a captivating world of robotic wonders with top-notch toys and gadgets, designed to captivate kids and parents alike!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
