import React from 'react';
import {Box} from '@material-ui/core';
/**Component Imports */
import BounceBall from '../../components/BounceBall';

const Home: React.FC = () => {
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
      <Box color="purple">hello there</Box>
      <div>
        <BounceBall />
        <BounceBall />
        <BounceBall />
        <BounceBall />
        <BounceBall />
      </div>
    </div>
    );
}

export default Home;