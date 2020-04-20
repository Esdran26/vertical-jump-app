import React from 'react';
import './css/CardInformation.css';

const CardInformation = (props) => {
    return(
        <div className="card-information">
            <div className="card-image">
                <img src={props.srcImage} alt={props.altImage} />
            </div>
            <div className="card-text">
                <h4>{props.title}</h4><br/>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    );
}

export default CardInformation;
