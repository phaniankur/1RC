import React from 'react'
import Box from '../Components/library/Box'

import { Button} from '@material-ui/core'

function About() {
    return (

        <Box
        m='1rem'
        display={['block', 'flex']}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        p='0.5rem'>
            <Box 
                fontSize={['25px','28px']}
                fontWeight='bold'
                mb='0.8rem'>
                What is One Rupee Club?
            </Box>
            <Box

                width={[1, '55%']}
                fontSize={['20px', '22px']}
                
                lineHeight = {['1.7rem', '2rem']}
            >
            We believe in the power of reading & its ability to educate, inform,  & entertain. 
            With our Newsletter, we educate the people of Banaras about their home, inform them about who & what is around them that they should be aware of| Events | Cafes | Local History | Celebrity Visits | Local Talent Exposure | We entertain them, humorously.
            </Box>
        </Box>
        
    )
}

export default About
