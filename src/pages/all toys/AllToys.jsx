import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";

const AllToys = () => {

    const allToys = useLoaderData()
    return (
        <div>
            <div className="overflow-x-auto w-full mx-5">
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
                        </tr>
                    </thead>
                    {
                        allToys.map(toy => <AllToysCard
                        key={toy._id}
                        toy={toy}
                        ></AllToysCard>)
                    }
                    

                </table>
            </div>
        </div>
    );
};

export default AllToys;