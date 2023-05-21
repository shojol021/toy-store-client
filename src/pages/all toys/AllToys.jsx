import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";
import useTitle from "../../hooks/pageTitle";
import { useState } from "react";

const AllToys = () => {
    useTitle("All Toys")

    const toys = useLoaderData()
    const [allToys, setAllToys] = useState(toys)

    return (
        <div>
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
                        </tr>
                    </thead>
                    {
                        allToys.slice(0, 20).map(toy => <AllToysCard
                            key={toy._id}
                            toy={toy}
                        ></AllToysCard>)
                    }


                </table>
                <div className="text-center mt-5">
                    <button className="btn">Load More</button>
                </div>
            </div>
        </div>
    );
};

export default AllToys;