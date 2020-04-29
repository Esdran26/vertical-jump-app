import React from 'react';
import './css/PlayerInformation.css';
import Kurek from '../../../img/Kurek.jpg';
import Shafik from '../../../img/Shafik.jpg';

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
            srcImage: Kurek
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
            name: "Lincoln Shafik",
            height: "190 cm",
            weight: "97 kg",
            heightSpike: "349 cm",
            heightBlock: "323 cm",
            position: "Rematador Externo",
            teamNational: "Egipto",
            srcImage: Shafik
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