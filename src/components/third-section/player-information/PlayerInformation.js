import React from 'react';

import './css/PlayerInformation.css';
import playerDataList from '../../../data/playerDataList';

const PlayerInformation = () => {

    const PlayerDataList = (props) => {
        const playerData = props.playerData;

        const playerList = playerData.map((player) =>
            <div className="player-card">
                <div className="player-description">
                    <h4>{player.name}</h4>
                    <p>Altura: {player.height}</p>
                    <p>Peso: {player.weight}</p>
                    <p>Altura de remate: {player.heightSpike}</p>
                    <p>Altura de bloqueo: {player.heightBlock}</p>
                    <p>Posición: {player.position}</p>
                    <p>Equipo Nacional: {player.teamNational} </p>
                </div>
                <div className="player-image">
                    <img src={player.srcImage} alt={player.name} />
                </div>
            </div>
        );
        return playerList;
    }

    return(
        <div className="player-information">
            <PlayerDataList playerData={playerDataList} />
        </div>
    );
}

export default PlayerInformation;