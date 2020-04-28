import React, { useState, useEffect } from 'react';
import './css/PlayerInformation.css';

const PlayerInformation = () => {
    
    const playerDataList = [
        {
            name: "Benjamin Patch",
            height: "203 cm",
            weight: "88 kg",
            heightSpike: "382 cm",
            heightBlock: "355 cm",
            position: "Opuesto",
            teamNational: "EEUU",
            srcImage: "https://www.fivb.org/Vis2009/Images/GetImage.asmx?No=82312&type=Press&width=300&height=450&stretch=uniformtofill"
        },
        {
            name: "Bartosz Kurek",
            height: "205 cm",
            weight: "87 kg",
            heightSpike: "352 cm",
            heightBlock: "326 cm",
            position: "Opuesto",
            teamNational: "Polonia",
            srcImage: "https://www.fivb.org/Vis2009/Images/GetImage.asmx?No=74182&type=Press&width=300&height=450&stretch=uniformtofill"
        },
        {
            name: "Yūki Ishikawa",
            height: "191 cm",
            weight: "74 kg",
            heightSpike: "351 cm",
            heightBlock: "330 cm",
            position: "Rematador Externo",
            teamNational: "Japón",
            srcImage: "https://www.fivb.org/Vis2009/Images/GetImage.asmx?No=74473&type=Press&width=300&height=450&stretch=uniformtofill"
        },
        {
            name: "Lincoln Williams",
            height: "200 cm",
            weight: "104 kg",
            heightSpike: "353 cm",
            heightBlock: "330 cm",
            position: "Opuesto",
            teamNational: "Australia",
            srcImage: "https://www.fivb.org/Vis2009/Images/GetImage.asmx?No=74241&type=Press&width=300&height=450&stretch=uniformtofill"
        } 
    ];

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