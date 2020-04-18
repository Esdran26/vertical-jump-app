import React from 'react';
import './css/PrincipalContent.css';
import Menu from './menu/Menu';
import PrincipalText from './principal-text/PrincipalText';

const PrincipalContent = () => {
    return(
        <div className="principal-content">
            <Menu />
            <PrincipalText />
        </div>
    );
}

export default PrincipalContent;