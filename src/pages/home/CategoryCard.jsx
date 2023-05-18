import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ robot }) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const { picture, name, price, rating } = robot

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
    
                    navigate('/login')
    
                }
            })
        }
        else{navigate('/details')}
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={picture} alt="Shoes" /></figure>
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