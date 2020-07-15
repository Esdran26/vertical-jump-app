import React from 'react';
import { Link } from 'react-router-dom'
import NavBarButton from '../menu/NavBarButton';
import './css/PrincipalText.css';

const PrincipalButtons = (props) => {
    return(
        <div className="principal-buttons">
            <NavBarButton getStarted="Empezar" />
            <div className="secondary-button">
                <Link to="/exercises">{props.secondaryButton}</Link>
            </div>
        </div>
    );
}

const PrincipalTitleDescription = (props) => {
    return(
        <div className="principal-text-description">
            <div className="principal-text">
                <h1>{props.title}</h1>
                <br/>
            </div>
            <div className="principal-description-large">
                <p>Una de las cosas más importantes y necesarias que la gente no domina es su forma <br className="space-none" />
                y potencia de saltar.</p>
                <br/>
            </div>
            <div className="principal-description-short">
                <p>{props.descriptionShort}</p>
                <br/><br/>
            </div>
            <PrincipalButtons 
                secondaryButton="Lista de ejercicios"
            />
        </div>
    );
}

const PrincipalText = () => {
    return(
        <React.Fragment>
            <PrincipalTitleDescription
                title="Incrementa tu salto vertical"
                descriptionShort="Comienza ahora para mejorar tu manera de jugar!"
            />
        </React.Fragment>
    );
}

export default PrincipalText;