import React from 'react';
import './css/TitleSection.css';

const TitleSection = (props) => {
    return(
        <div className="second-title">
            <h2 id="question">{props.title}</h2>
        </div>
    );
}

export default TitleSection;