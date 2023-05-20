import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";


const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toyDetails, setToyDetails] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:3000/toys?sellerEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => setToyDetails(data))
    }, [])
    return (
        
        <div>
            <h2 className="text-center font-bold text-3xl text-cyan-500 mt-12">{user?.displayName}&lsquo;s Toys</h2>
            <div className="overflow-x-auto w-full p-12">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        toyDetails.map(toy => <MyToysTable
                        key={toy._id}
                        toy={toy}
                        setToyDetails = {setToyDetails}
                        toyDetails = {toyDetails}
                        ></MyToysTable>)
                    }
                    

                </table>
            </div>
        </div>
    );
};

export default MyToys;