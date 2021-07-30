import { Button, Link } from '@material-ui/core'
import React from 'react'
import Box from '../Components/library/Box'
import { makeStyles } from '@material-ui/core/styles';
import { backgroundColor } from 'styled-system';

const useStyles = makeStyles((theme) => ({
    root: {
      border: 0,
      padding: 0
    },
    button:{
        width: '200px',
        backgroundColor: 'black',
        fontSize: '18px',
        color: 'white',
        //border: '2px solid',
        borderRadius: '22px',
        //padding: '8px',
        boxShadow: '2.5px 5px 5px grey',
        fontFamily: 'Bodoni Moda, serif',
            "&:hover": {
              backgroundColor: '#76A3A5'
            }

    }
  }));


function Home() {

    const classes = useStyles();
    return (
        <>
        <Box
        bg= '#FAF9EE'
        height= '100vh'
        display= 'flex'
        justifyContent= 'center'
        alignItems= 'center'
        flexDirection= 'column'
        >
            <Box
            fontSize='3rem'
            >#1RC</Box>
            
            <Box
            fontSize='2rem'
            p='1rem'
            >
            Coming Soon
            </Box>
            <Box
            
            >
                <Button className={classes.button}>Subscribe Now</Button>
            </Box>
            <Box
            position= 'fixed'
            left= '0'
            bottom= '0'
            width= '100%'
            display='flex'
            padding= '0.5rem'
            justifyContent='center'
            flexDirection='row'
            fontSize='18px'
            >
                All rights reserved to One Rupee Club
            </Box>
            
        </Box>
        
        </>
        
    )
}

export default Home
