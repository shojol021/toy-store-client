import { useContext } from 'react';
import robotBG from '../../../assets/robotBG.jpg';
import { AuthContext } from '../../../providers/AuthProvider';

const AddAToy = () => {
    const {user} = useContext(AuthContext)
    console.log(user)

    const handleAddAToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const description = form.description.value;

        const toyDetails = {
            name,
            photo,
            category,
            price,
            quantity,
            sellerName,
            sellerEmail,
            description
        }

        fetch('http://localhost:3000/toys', {
            method: 'post',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(toyDetails)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${robotBG})` }}>
  <div className="hero-overlay bg-opacity-70"></div>
      <div className="bg-cyan-500  bg-opacity-40 rounded-lg shadow-lg p-8 w-2/3">
        <h1 className="text-3xl font-bold mb-2 text-center text-white">Add A Toy</h1>
        <form onSubmit={handleAddAToy}>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="">
              <label className="block text-gray-200">Toy Name</label>
              <input type="text" name='name' className="input input-bordered w-full" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-200">Picture URL</label>
              <input type="text" name='photo' className="input input-bordered w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div>
              <label className="block text-gray-200">Sub-Category</label>
              <input type="text" name='category' className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-200">Price</label>
              <input type="text" name='price' className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-200">Quantity</label>
              <input type="number" name='quantity' className="input input-bordered w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div>
              <label className="block text-gray-200">Seller Name</label>
              <input type="text" name='sellerName' defaultValue={user?.displayName} className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-200">Seller Email</label>
              <input type="email" name='sellerEmail' defaultValue={user?.email} className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-200">Rating</label>
              <input type="text" name='rating' className="input input-bordered w-full" />
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-200">Detail Description</label>
            <textarea name='description' className="textarea textarea-bordered w-full h-15"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
