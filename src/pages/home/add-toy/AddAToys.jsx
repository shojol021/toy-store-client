import React from 'react';
import robotBG from '../../../assets/robotBG.jpg';

const AddAToy = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${robotBG})` }}>
  <div className="hero-overlay bg-opacity-70"></div>
      <div className="bg-cyan-500  bg-opacity-40 rounded-lg shadow-lg p-8 w-2/3">
        <h1 className="text-2xl font-bold mb-4 text-center">Toy Form</h1>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="">
              <label className="block text-gray-200">Toy Name</label>
              <input type="text" name='name' className="input input-bordered w-full" />
            </div>
            <div className="">
              <label className="block text-gray-200">Sub-Category</label>
              <input type="text" name='category' className="input input-bordered w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-200">Picture URL</label>
              <input type="text" name='photo' className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-200">Price</label>
              <input type="number" name='price' className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-200">Quantity</label>
              <input type="number" name='quantity' className="input input-bordered w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-200">Seller Name</label>
              <input type="text" name='sellerName' className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-200">Seller Email</label>
              <input type="email" name='sellerEmail' className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-200">Rating</label>
              <input type="email" name='rating' className="input input-bordered w-full" />
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
