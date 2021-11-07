import Box from '../Components/library/Box'
import React, {useState} from 'react'
import Image from 'next/image'
import Logo from '../images/1RC_black.png'
import FormInput from '../Components/library/FormInput'
import Button from '../Components/library/Button'
import Form from '../Components/library/Form'


function TestForm() {
    const [formData, setformData] = useState({name: '', email: '', phone: '', })

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
    }

    return (
        <Box 
        bg='#A4C3A2'
         display='flex'
         justifyContent='center'
         flexDirection="column"
         alignItems='center'
         height='100vh'
         paddingTop='0'
         >
             <Image
             src={Logo}
             width={100}
             height={100}
             />
            
            <Form 
            display='flex'
            flexDirection="column"
            justifyContent='center'
            label='Saturday Night LIVE' onSubmit={onSubmit}>
                <Box
                flexDirection='column'
                width={['100%', '30%']}
                padding='0 1rem 0 1rem'
                marginLeft= {[0,'2rem']}
                >
                    <FormInput
                    // label='Name'
                    placeholder='Name'
                    variant= 'green'
                    value={formData.name}
                    onChange={e=> setformData({...formData,name: e.target.value})}
                    />
                    <FormInput
                    // label='Email'
                    placeholder='Phone Number'
                    variant= 'green'
                    value={formData.phone}
                    onChange={e=> setformData({...formData,phone: e.target.value})}
                    />
                    <FormInput
                    // label='Email'
                    placeholder='Email'
                    variant= 'green'
                    value={formData.email}
                    onChange={e=> setformData({...formData,email: e.target.value})}
                    />
                    <Box
                    display='flex'
                    justifyContent={['center', 'flex-start']}
                    >
                        <Button variant="primary" >Submit</Button>
                    </Box>
                    
                </Box>
                
            </Form>
        </Box>
    )
}

export default TestForm
