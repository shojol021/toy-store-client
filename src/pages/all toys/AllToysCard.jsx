import { useState } from "react";
import { Link } from "react-router-dom";


const AllToysCard = ({ toy }) => {
    const { _id, name, picture, category, price, availableQuantity } = toy
    console.log(toy)

    const [imageSrc, setImageSrc] = useState(picture);

    const handleImage = () => {
        setImageSrc('https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg')
    }

    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img onError={handleImage} src={imageSrc} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    <div className="text-sm opacity-80">{category}</div>
                </td>
                <td>
                    <div className="text-sm opacity-80">{toy.sellerName ? toy.sellerName : "From RoboPlay"}</div>
                </td>
                <td>{price}</td>
                <td>{availableQuantity}</td>
                <th>
                    <Link to={`/details/${_id}`}><button className="btn btn-primary btn-xs">View Details</button></Link>
                </th>
            </tr>
        </tbody>
    );
};

export default AllToysCard;