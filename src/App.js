
import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import DashArea from './components/DashArea/DashArea.jsx'
import Stat from './components/Stat/Stat.jsx'


import Grid from '@mui/material/Grid';

const App = () => {

  return (

    <div 
    // style={{backgroundColor: 'grey'}}
    >

      <Grid container spacing={0}>
        
        <Grid item xs={2}>
          <Navbar/>
        </Grid>
        
        <Grid item xs={4}>
          <DashArea/>
        </Grid>
        
        <Grid item xs={6}>
          <Stat />
        </Grid>
      
      </Grid>

    </div>

    

    
    
);};

export default App;
