import React from 'react';
import './css/VideoInformation.css';

const VideoInformation = (props) => {
    const { width, height } = props;

    return(
        <div className="video-information">
            <iframe width={width} height={height} src="https://www.youtube-nocookie.com/embed/7Wpy9ufre-s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
        </div>
    );
}

export default VideoInformation;