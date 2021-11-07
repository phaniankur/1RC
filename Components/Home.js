import { Button, Link } from '@material-ui/core'
import React from 'react'
import Box from '../Components/library/Box'
import subButton from '../Components/library/ButtonStyle'
import {FaInstagram, FaFacebookF, FaYoutube} from "react-icons/fa"

function Home() {
    
    const classes = subButton();
    return (
        <>
        <Box
        height= '100vh'
        display= 'flex'
        justifyContent= 'center'
        alignItems= 'center'
        flexDirection= 'column'
        >
            <Box
            fontSize={['2.5rem','3rem']}
            >One Rupee Club</Box>
            
            <Box
            fontSize={['1.5rem','2rem']}
            textAlign= 'center'
            p={['0.5rem' ,'1rem']}
            >
            People | Stories | Places
            </Box>
            {/* <Box
            
            >
                <Button className={classes.button} href='https://bit.ly/clubclink'>Subscribe Now</Button>
            </Box> */}
            {/* <Box  width='10rem' m='1rem'p='0.5rem' display='flex' justifyContent='center'> 
                <Box p='0.5rem' textDecoration='none' color='black'
                >
                    <Link href='https://www.instagram.com/onerupeeclub/'>
                        <FaInstagram size='1.5rem' color='black'/>
                    </Link>
                    
                </Box>
                <Box p='0.5rem'
                >
                    <Link href='https://www.facebook.com/1rupeeclub/'>
                        <FaFacebookF size='1.5rem' color='black' />
                    </Link>
                    </Box>
                <Box p='0.5rem'
                >
                    <Link href='https://www.youtube.com/channel/UC1yjHGAHZt-22rBxBeqvL9Q'>
                        <FaYoutube size='1.5rem' color='black' />
                    </Link>
                    </Box>
            </Box> */}
            
            
        </Box>
        
        </>
        
    )
}

export default Home
