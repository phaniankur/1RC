
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';



const subButton = makeStyles((theme) => ({
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

export default subButton