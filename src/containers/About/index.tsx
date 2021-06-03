import React from 'react';
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
       </div>
    );
}

export default About;