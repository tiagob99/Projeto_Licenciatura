import React from 'react';
import Album from '../Album';
import { albums } from '../../data/albums';
import { Fade } from 'react-reveal';

const Landing = () => {
    const silenceAlbum = albums.filter(album => album.id === 1)[0];
    return (
        <div className="landing">
            <div className="wrapper">
                <Album {...silenceAlbum}/>     
                <Fade bottom duration={800}>
                    <div className="landing__video-container">                   
                    Inicie sessão e comece já a sua experiência
                    </div>
                </Fade>
            </div>            
        </div>
    );
};

export default Landing;