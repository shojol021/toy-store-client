import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData()
    const { name, category, picture, price, rating, shortDescription, availableQuantity } = details
    const [imageLink, setImageLink] = useState(picture)
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleImageError = () => {
        setImageLink('https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg')
    }
    return (
        <div>
            <div className="bg-base-200 px-12 py-12">
                <div className="hero-content flex-col lg:flex-row">

                    <div>
                        <img src={imageLink} onError={handleImageError} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="text-center mt-5 font-bold text-3xl text-cyan-500">Price: $ {price}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="col-span-2">
                            <h1 className="text-3xl font-bold mb-2">{name}</h1>
                            <div className="text-gray-500 text-sm"><span className="font-bold">Sub-Category: </span>{category}</div>
                            <p className="py-6">{shortDescription}</p>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                        <div>

                            <h4 className="font-bold text-cyan-500">{availableQuantity ? 'Available Quantity' : 'Sold Out'}</h4>
                            <p className="">{availableQuantity}</p>
                            <div className="divider"></div>
                            <h4 className="font-bold text-cyan-500">Seller</h4>
                            <p className="">{details.sellerName ? details.sellerName : 'From RoboPlay'}</p>
                            <h4 className="font-bold text-cyan-500">Email</h4>
                            <p className="">{details.sellerEmail ? details.sellerName : 'info@roboplay.com'}</p>
                            <div className="divider"></div>
                            <h4 className="font-bold text-cyan-500">Ratings</h4>
                            <p className="">{rating}</p>

                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={handleGoBack} className="btn btn-error">Go Back</button>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;