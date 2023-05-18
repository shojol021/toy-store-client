import { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full ">
        <div className="flex border-b border-gray-300 max-w-md mx-auto">
          <button
            className={`py-2 px-4 ${
              activeTab === 1 ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => handleTabClick(1)}
          >
            Tab 1
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 2 ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => handleTabClick(2)}
          >
            Tab 2
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 3 ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => handleTabClick(3)}
          >
            Tab 3
          </button>
        </div>
        <div className="p-4">
          <div className="w-11/12 mx-auto">
            {activeTab === 1 && <p>Tab 1 contentcontentcontentcontent goes hereTab 1 content goes hereTab 1 content goes hereTab 1 content goes hereTab 1 content goes hereTab 1 content goes here</p>}
            {activeTab === 2 && <p>Tab 2 content goes here</p>}
            {activeTab === 3 && <p>Tab 3 content goes here</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
