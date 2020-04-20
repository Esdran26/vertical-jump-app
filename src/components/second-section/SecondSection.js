import React from 'react';
import './css/SecondSection.css';
import SecondTitle from './second-title/SecondTitle';
import CardInformation from './card-information/CardInformation';
import ImageFitnessStats from '../../img/undraw_fitness_stats_sht6.svg';
import ImageWorkingOut from '../../img/working-out.svg';
import ImagePersonalTrainer from '../../img/personal-trainer.svg';

const SecondSection = () => {

    return(
        
        <div className="second-section">
                <SecondTitle 
                    title="Porqué Salto Vertical?"
                />
            
            <div className="card-section-information">
                <CardInformation 
                    srcImage={ImageFitnessStats}
                    altImage="Potencia tu salto"
                    title="Potencia tu salto"
                    description="Incrementar tu salto sin lugar a dudas aumentará tus probabilidades de llegar a ser un gran jugador de voleibol."
                />
                <CardInformation 
                    srcImage={ImagePersonalTrainer}
                    altImage="Aumenta tu fuerza"
                    title="Aumenta tu fuerza"
                    description="Debes enfocarte en la fuerza de tus pantorrillas, muslos, glúteos y tendones de la corva (parte posterior del muslo)."
                />
                <CardInformation 
                    srcImage={ImageWorkingOut}
                    altImage="Entrena a diario"
                    title="Entrena a diario"
                    description="Realizar ejercicios de velocidad y fuerza tendrán mejores resultados si los realizas en un cierto número de días."
                />
            </div>
        </div>
    );
}

export default SecondSection;