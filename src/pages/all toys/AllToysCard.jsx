import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AllToysCard = ({ toy }) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const { _id, name, picture, category, price, availableQuantity } = toy

    const [imageSrc, setImageSrc] = useState(picture);

    const handleImage = () => {
        setImageSrc('https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg')
    }

    const handleViewDetails = () => {

        if (!user) {
            Swal.fire({
                text: "You have to login first",
                title: 'Proceed to login page?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Take me to login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/details/${_id}`)
                }
            })
        }
        else{
            navigate(`/details/${_id}`)
        }
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
                    <button onClick={handleViewDetails} className="btn btn-sm btn-primary">View Details</button>
                </th>
            </tr>
        </tbody>
    );
};

export default AllToysCard;