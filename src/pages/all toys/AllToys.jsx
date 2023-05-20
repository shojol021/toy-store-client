import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";
import useTitle from "../../hooks/pageTitle";

const AllToys = () => {
    useTitle("All Toys")

    const allToys = useLoaderData()
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