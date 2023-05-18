import img1 from '../../assets/Gallery/1.jpg'
import img2 from '../../assets/Gallery/2.jpg'
import img3 from '../../assets/Gallery/3.jpg'
import img4 from '../../assets/Gallery/4.jpg'
import img5 from '../../assets/Gallery/5.jpg'
import img6 from '../../assets/Gallery/6.jpg'
// import img7 from '../../assets/Gallery/7.jpg'

const Gallery = () => {
    return (
        <>
            <div className='my-24'>
                <h2 className='text-center font-bold text-cyan-500 text-6xl mt-20 mb-12'>Gallery</h2>
                <div className='grid grid-cols-3 gap-4 mx-auto'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img1} alt="Toy" className='w-76 h-96' /></figure>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img2} alt="Toy" className='w-76 h-96' /></figure>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img3} alt="Toy" className='w-76 h-96' /></figure>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img4} alt="Toy" className='w-76 h-96' /></figure>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img5} alt="Toy" className='w-76 h-96' /></figure>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img6} alt="Toy" className='w-76 h-96' /></figure>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;