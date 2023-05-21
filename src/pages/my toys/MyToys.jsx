import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";
import useTitle from "../../hooks/pageTitle";

const MyToys = () => {
  useTitle('My Toys');
  const { user } = useContext(AuthContext);
  const [toyDetails, setToyDetails] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [sortedToyDetails, setSortedToyDetails] = useState([]);

  useEffect(() => {
    let url = `https://toy-store-server-shojol021.vercel.app/toys?sellerEmail=${user?.email}`;
    
    if (sortOption) {
      url += `&sort=${sortOption}`;
    }
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setToyDetails(data);
        setSortedToyDetails(data); // Set the initial sorted toy details
      });
  }, [user?.email, sortOption, toyDetails]);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl text-cyan-500 mt-12 mb-5">{user?.displayName}&lsquo;s Toys</h2>
      <div className="w-1/5 mx-auto">
        <select name="sort" className="select select-bordered w-full" onChange={handleSortChange}>
          <option value="">Sort by Price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
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
              <th>Action</th>
            </tr>
          </thead>
          {
            sortedToyDetails.map(toy => (
              <MyToysTable
                key={toy._id}
                toy={toy}
                setToyDetails={setToyDetails}
                toyDetails={toyDetails}
              />
            ))
          }
        </table>
      </div>
    </div>
  );
};

export default MyToys;
