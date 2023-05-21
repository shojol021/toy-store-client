import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ robot }) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const { _id, picture, name, price, rating } = robot
    const [image, setImage] = useState(picture)

    const handleImage = () => {
        setImage('https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg')
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
        else{navigate(`/details/${_id}`)}
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img onError={handleImage} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleViewDetails} className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;