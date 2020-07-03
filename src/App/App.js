import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import {makeStyles, CssBaseline} from '@material-ui/core';

const useStyles = makeStyles({

    appMain: {
      paddingLeft: '320px',
      width: '100%'
    }
})

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
       <SideMenu />
       

       <Header/>
       <div className={classes.appMain} >here we go</div>
       <CssBaseline />
    </React.Fragment>

  );
}

export default App;
