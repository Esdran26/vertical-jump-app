import React from 'react';
import './css/SecondTitle.css';

const SecondTitle = (props) => {
    return(
        <div className="second-title">
            <h2>{props.title}</h2>
        </div>
    );
}

export default SecondTitle;