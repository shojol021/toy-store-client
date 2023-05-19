import { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/toys')
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const robotDinosaurs = toys.filter(toy => toy.category === "Robot Dinosaurs")
  const educationalRobots = toys.filter(toy => toy.category === "Educational Robots")
  const roboticPets = toys.filter(toy => toy.category === "Robotic Pets")
  const robotVehicles = toys.filter(toy => toy.category === "Robot Vehicles")


  return (
    <div>
      <h2 className='text-center font-bold text-cyan-500 text-4xl mt-12 mb-6'>Shop By Category</h2>
      <div className="flex justify-center mb-12">
        <div className="w-full ">
          <div className="flex border-b border-gray-300 max-w-xl mx-auto">
            <button
              className={`py-2 px-4 ${activeTab === 1 ? 'bg-gray-200' : 'bg-white'
                }`}
              onClick={() => handleTabClick(1)}
            >
              {robotDinosaurs[0]?.category}
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 2 ? 'bg-gray-200' : 'bg-white'
                }`}
              onClick={() => handleTabClick(2)}
            >
              {educationalRobots[0]?.category}
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 3 ? 'bg-gray-200' : 'bg-white'
                }`}
              onClick={() => handleTabClick(3)}
            >
              {roboticPets[0]?.category}
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 4 ? 'bg-gray-200' : 'bg-white'
                }`}
              onClick={() => handleTabClick(4)}
            >
              {robotVehicles[0]?.category}
            </button>
          </div>
          <div className="p-4">
            <div className="w-11/12 mx-auto">
              {activeTab === 1 && <div className='grid grid-cols-3 gap-10'>
                {robotDinosaurs.map(dinosaurs => <CategoryCard
                  key={dinosaurs.name} robot={dinosaurs}></CategoryCard>)}
              </div>}
              {activeTab === 2 && <div className='grid grid-cols-3 gap-10'>
                {educationalRobots.map(educational => <CategoryCard
                  key={educational.name} robot={educational}></CategoryCard>)}
              </div>}
              {activeTab === 3 && <div className='grid grid-cols-3 gap-10'>
                {roboticPets.map(pets => <CategoryCard
                  key={pets.name} robot={pets}></CategoryCard>)}
              </div>}
              {activeTab === 4 && <div className='grid grid-cols-3 gap-10'>
                {robotVehicles.map(vehicles => <CategoryCard
                  key={vehicles.name} robot={vehicles}></CategoryCard>)}
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
