import React from 'react'
import Box from '../Components/library/Box'

function Footer() {
    return (
        <Box
            
            position= 'fixed'
            left= '0'
            bottom= '0'
            width= '100%'
            display='flex'
            padding= '1rem'
            justifyContent='center'
            flexDirection='row'
            fontSize='18px'
            fontWeight = 'bold'
            >
                &copy; 2021 One Rupee Club
            </Box>
    )
}

export default Footer
