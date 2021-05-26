import React from "react";
import {Box, Breadcrumbs, Link, Typography} from '@material-ui/core';
/**Theme Imports */
import {Colors} from '../../themes'

const {green_seaFoam} = Colors;

const Header: React.FC = () => {
  return (
        <Box 
          color="purple"
          bgcolor={green_seaFoam}
          display="flex"
          alignItems="center"
          justifyContent="center"
         >
           <Breadcrumbs 
            separator={<Typography style={{fontSize: '28px'}}>/</Typography>}
            aria-label="breadcrumb"
          >
              <Link href="/" color="inherit" style={{fontSize: '28px'}}>
                Home
              </Link>
              <Link href="/about" color="inherit" style={{fontSize: '28px'}}>
                Stuff
              </Link>
              <Link href="/contact" color="inherit" style={{fontSize: '28px'}}>
                Things
              </Link>
           </Breadcrumbs>
         </Box>
         );
};

export default Header;
