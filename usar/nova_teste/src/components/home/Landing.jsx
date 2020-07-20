import React from 'react';
import { Fade } from 'react-reveal';

const Landing = () => {
    return (
        <div className="landing">
            <div className="wrapper">
                    
                <Fade bottom duration={800}>
                    <div className="landing__video-container"> 
                    Este website foi desenvolvido como proposta de projeto de final de Licenciatura e tem como propósito facilitar a configuração do seu smartwatch tornando-a mais rápida e intuítiva.                  
                    
                    </div>
                    <br></br>
                    
                    Inicie sessão e comece já a sua experiência 
                    
                </Fade>
            </div>            
        </div>
    );
};

export default Landing;