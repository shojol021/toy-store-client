import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";
import useTitle from "../../hooks/pageTitle";
import { useRef, useState } from "react";

const AllToys = () => {
    useTitle("All Toys")
    const toys = useLoaderData()
    const [allToys, setAllToys] = useState(toys)
    const inpRef = useRef(null)

    const handleSearch = () => {
        const search = inpRef.current.value;
        console.log(search)

        fetch(`https://toy-store-server-shojol021.vercel.app/toys?search=${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllToys(data)
        })
    }

    
    const [show, setShow] = useState(false)
    const handleLoadMore = () => {
        setShow(!show)
    }

    return (
        <div>
            <div className="flex items-center justify-around">
                <h2 className="text-center font-bold text-3xl text-cyan-500 mt-12 ml-[40%]">All Toys</h2>
                <div className="form-control me-12 mt-12">
                    <label className="input-group">   
                        <input ref={inpRef} type="text" placeholder="Search by toy name" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn">search</button>
                    </label>
                </div>
            </div>
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
                        allToys.slice(0, `${show ? allToys.length : 20}`).map(toy => <AllToysCard
                            key={toy._id}
                            toy={toy}
                        ></AllToysCard>)
                    }


                </table>
                <div className="text-center mt-5">
                    <button onClick={handleLoadMore} className="btn">{show ? 'See Less' : 'Load More'}</button>
                </div>
            </div>
        </div>
    );
};

export default AllToys;