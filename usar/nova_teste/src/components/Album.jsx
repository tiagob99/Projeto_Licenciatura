import React from 'react';
import Socials from './ui/Socials';
import Fade from 'react-reveal/Fade';

const Album = ({id, title, year, coverUrl, preOrder, pricing, tracklist}) => {

    // const renderTracks = () => {
    //     return tracklist.map((track, i) => {
    //         return <li key={i} className="album__track"> <i></i> <span>{track}</span></li>
    //     })
    // }

    return (
        <Fade left delay={id*80} duration={900}>
            <div className="album">
                {/* <div className="album__caption">
                    <h1>{title}</h1>
                    {preOrder ? null : <div className="album__year">{year}</div>}
                </div>  
                <img src={coverUrl} className="album__cover" alt="album cover"/>                                      
                 */}
                <div className="album__info">
                    {preOrder? <div className="album__pre-order">Introduction</div> : null}
                    {/* <div className="album__pricing">
                        <div className="album__pricing-item"><span>MP3</span> ${pricing.mp3}</div>
                        <div className="album__pricing-item"><span>CD</span> ${pricing.cd}</div>
                        <div className="album__pricing-item"><span>VINYL</span> ${pricing.vinyl}</div>
                    </div> */}
                    {/* <div className="album__playlist">
                        {renderTracks()}
                    </div>
                    <div className="album__player">
                        <div className="album__trackline-container">
                            <div className="album__timing">--:--</div>
                            <div className="album__trackline"></div>
                            <div className="album__timing">--:--</div>
                        </div>
                        <div className="album__play-buttons">
                            <div className="album__prev"></div>
                            <div className="album__next"></div>
                        </div>
                    </div>
                    <Socials context="album"/> */}
                    <br></br>
                    
                    Months on ye at by esteem desire warmth former. Sure that that way gave any fond now. His boy middleton sir nor engrossed affection excellent. Dissimilar compliment cultivated preference eat sufficient may. Well next door soon we mr he four. Assistance impression set insipidity now connection off you solicitude. Under as seems we me stuff those style at. Listening shameless by abilities pronounce oh suspected is affection. Next it draw in draw much bred.<br></br>
                    Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable.
                    
                </div>
            </div>
        </Fade>
    );
};

export default Album;