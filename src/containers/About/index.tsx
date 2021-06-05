import React from 'react';
import './styles.css'
import SwingBall from '../../components/SwingBall';
import WaveyText from '../../components/WaveyText';

const About: React.FC = () => {
    return(
        <div
      style={{
        backgroundColor: "antiquewhite",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
       >
           <WaveyText/>
           <SwingBall/>
       </div>

    );
}

export default About;