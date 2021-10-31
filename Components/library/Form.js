import React from 'react'
import Box from './Box'


function Form({label,children, onSubmit, ...props}) {
    return (
        <Box as='form'
        width='100%'
        {...props}
        onSubmit={onSubmit}>
            <Box 
            fontWeight= 'bold'
            display='flex'
            justifyContent='center'
            fontSize='22px'
            margin='1rem'
            color='#33535F'
            >{label}</Box>
            {children}
            </Box>
    )
}

export default Form
