import React from "react";
import Input from "./Input";
import Box from "./Box";

const FormInput = ({ label, placeholder, variant, value, onChange}) =>{
return (
      <Box>
        <Box 
        fontWeight='bold'
        fontSize='18px'
        padding= '0.5rem'
        >{label}</Box>
        <Input
          variant={variant || "primary"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Box>
    );
}

export default FormInput;
