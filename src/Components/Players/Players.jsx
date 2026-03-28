import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const Players = ({playerPromise, selectedList, setSelectedList}) => {

    const players = use(playerPromise);
    console.log(players);
    
    return (
        <div className='max-w-330 mx-auto mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                players.map(player => <PlayerCard player={player} selectedList={selectedList} setSelectedList={setSelectedList} />)
            }
        </div>
    );
};

export default Players;