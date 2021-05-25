import React from 'react';
import './styles.css';
import Images from '../../themes/images';

const {bounceLogo} = Images;

const BounceLogo = () => {
    return(
        <div 
          id="animated-example" 
          className="animated bounce"
          style={{
            margin: 'auto',
            marginBottom: '10px'
          }}  
        >
        </div>
    );
}

export default BounceLogo;