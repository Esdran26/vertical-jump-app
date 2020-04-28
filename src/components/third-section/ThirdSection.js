import React from 'react';
import TitleSection from '../second-section/second-title/TitleSection';
import './css/ThirdSection.css';
import PlayerInformation from './player-information/PlayerInformation';

const ThirdSection = () => {

    return(
        <div className="third-section">
            <TitleSection 
                title="Jugadores Profesionales"
            />
            <PlayerInformation />
        </div>
    );
}

export default ThirdSection;
