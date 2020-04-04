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
                        Months on ye at by esteem desire warmth former. Sure that that way gave any fond now. His boy middleton sir nor engrossed affection excellent. Dissimilar compliment cultivated preference eat sufficient may. Well next door soon we mr he four. Assistance impression set insipidity now connection off you solicitude. Under as seems we me stuff those style at. Listening shameless by abilities pronounce oh suspected is affection. Next it draw in draw much bred.
                    </div>
                </Fade>
            </div>            
        </div>
    );
};

export default Landing;