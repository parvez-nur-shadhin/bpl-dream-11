import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";


const fetchPlayer = async () => {
    const res = await fetch('/data.json');
    return res.json();
}

function App() {
  const [isClickedAvailable, setIsClickedAvailable] = useState(true);
  const [isClickedSelected, setIsClickedSelected] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  const playerPromise = fetchPlayer();

  const handleAvailableButton = () => {
    setIsClickedAvailable(true);
    setIsClickedSelected(false);
  }
  const handleSelectedButton = () => {
    setIsClickedAvailable(false);
    setIsClickedSelected(true);
  }

  return (
    <>
      <Navbar />
      <Banner />

      {/* Available Players Section */}
      <div className="max-w-330 mx-auto flex justify-between items-center mt-22">
        <h1 className="font-bold text-[1.75rem]">Available Players</h1>
        <div>
          <button onClick={handleAvailableButton} className={`border border-gray-400 hover:bg-[#E7FE29] ${isClickedAvailable ? "bg-[#E7FE29] text-black font-bold" : "bg-white text-[#13131360]" } text-[#13131360] font-semibold text-[16px] border-r-0 rounded-l-md p-3.5 cursor-pointer`}>
            Available
          </button>
          <button onClick={handleSelectedButton} className={`border border-gray-400 hover:bg-[#E7FE29] ${isClickedSelected ? "bg-[#E7FE29] text-black font-bold" : "bg-white text-[#13131360]" } text-[#13131360] font-semibold text-[16px] border-l-0 rounded-r-md p-3.5 cursor-pointer`}>
            Selected <span>({selectedList.length})</span>
          </button>
        </div>
      </div>
      
      <Suspense fallback={
        <div className="max-w-330 mx-auto flex justify-center items-center">
          <span className="loading loading-bars loading-xl"></span>
        </div>
        }>
          <Players playerPromise={playerPromise} selectedList={selectedList} setSelectedList={setSelectedList} />
      </Suspense>
      
    </>
  );
}

export default App;
