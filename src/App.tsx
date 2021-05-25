import React from 'react';
import BounceBall from './components/BounceBall';

const App = () => {
  return (
    <div style={{backgroundColor: 'antiquewhite', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{}}>
      <BounceBall/>
      <BounceBall/>
      <BounceBall/>
      <BounceBall/>
      <BounceBall/>
    </div>
    </div>
  );
}

export default App;
