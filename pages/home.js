import { Button, Link } from '@material-ui/core'
import React from 'react'
import Box from '../Components/library/'
import { makeStyles } from '@material-ui/core/styles';
import { backgroundColor } from 'styled-system';

const useStyles = makeStyles((theme) => ({
    root: {
      border: 0,
      padding: 0
    },
    button:{
        textTransform: 'capitalize',
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
              <Link href='https://bit.ly/clubclink'>
                <Button className={classes.button} >Subscribe Now</Button>
              </Link>
                
            </Box>
           
            
        </Box>
        
        </>
        
    )
}

export default Home
