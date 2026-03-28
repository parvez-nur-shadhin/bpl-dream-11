import React, { useState } from "react";
import { toast } from "react-toastify";


// {
//     "playerName": "Virat Kohli",
//     "playerCountry": "India",
//     "playerType": "Batsman",
//     "rating": 9.8,
//     "battingStyle": "Right-hand bat",
//     "bowlingStyle": "Right-arm medium",
//     "price": 500,
//     "playerImg": "https://i.ibb.co.com/LzN0G76H/images.webp"
// }

const PlayerCard = ({ player, selectedList, setSelectedList }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleChoosePlayer = () => {
        setIsClicked(true);
        toast.success(`${player.playerName} is Added`);
        setSelectedList([...selectedList, player]);
    }
    console.log(selectedList);

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={player.playerImg}
            alt="player-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{player.playerName}</h2>
          <div className="card-actions justify-end">
            <button onClick={handleChoosePlayer} className="btn btn-primary disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={isClicked}>Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
