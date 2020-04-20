import React from 'react';
import './css/PrincipalContent.css';
import Menu from './menu/Menu';
import PrincipalText from './principal-text/PrincipalText';
import VideoInformation from '../second-section/video-information/VideoInformation';

const PrincipalContent = () => {
    return(
        <div className="principal-content">
            <Menu />
            <PrincipalText />
            <VideoInformation
                width="840"
                height="472"
            />
        </div>
    );
}

export default PrincipalContent;