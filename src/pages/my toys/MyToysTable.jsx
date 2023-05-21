import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToysTable = ({ toy, toyDetails, setToyDetails }) => {
    const { _id, name, picture, category, price, availableQuantity } = toy

    const [imageSrc, setImageSrc] = useState(picture);

    const handleImage = () => {
        setImageSrc('https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg')
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const price = e.target.price.value;
        const availableQuantity = e.target.quantity.value;
        const shortDescription = e.target.description.value;

        const updateDetails = { price, availableQuantity, shortDescription }
        console.log(updateDetails)

        fetch(`https://toy-store-server-shojol021.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = toyDetails.filter(t => t._id !== _id)
                    const updated = toyDetails.find(t => t._id === _id)
                    const newToys = [updated, ...remaining]
                    setToyDetails(newToys)
                }
            })
    }

    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success',

                    //delete start ###########################################
                    fetch(`https://toy-store-server-shojol021.vercel.app/delete/${_id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                const remaining = toyDetails.filter(t => t._id !== _id)
                                setToyDetails(remaining)
                            }
                        })
                    //delete end #############################################
                )
            }
        })
    }

    return (

        <>
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
                    <th className="flex mt-3 space-x-2">
                        <label htmlFor={`modal-${_id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </label>
                        <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-error">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                    </th>
                </tr>
            </tbody>
            <input type="checkbox" id={`modal-${_id}`} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle p-2">

                <form onSubmit={handleUpdate} className="modal-box">
                    <h2 className="text-center text-3xl">Update Information</h2>
                    <h3 className="font-bold text-lg mb-2">{name}</h3>
                    <div className="flex justify-around">
                        <div>
                            <label className="block text-gray-800">Price</label>
                            <input type="text" name='price' className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-gray-800">Quantity</label>
                            <input type="number" name='quantity' className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-800">Detail Description</label>
                        <textarea name='description' className="textarea textarea-bordered w-full h-15"></textarea>
                    </div>
                    <div className="modal-action">
                        <button type="submit"><label htmlFor={`modal-${_id}`} className="btn">Update</label></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MyToysTable;