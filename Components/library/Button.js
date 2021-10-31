import React from 'react'
import Box from './Box'
import styled, {css} from 'styled-components'

const Button = ({children, variant, ...props }) => {

    const buttonStyles = css`
    outline: 0;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;

  if (variant === "primary") {
    return (
      <Box
        as="button"
        css={[
          (theme) => css`
            text-transform: 'uppercase';
            background-color: #33535F;
            border-radius: 22px;
            font-size: 18px;
            color: white;
            min-width: 150px;

            padding: 0.75rem 0rem;
            box-shadow: 2.5px 5px 5px grey;
            font-family: Bodoni Moda, serif;
            :hover {
                background-color: #76A3A5;
            }

          `,
          buttonStyles,
        ]}
        
        {...props}
      >
        {children}
      </Box>
    );
  }
  if (variant === "secondary") {
    return (
      <Box
        as="button"
        css={[
          (theme) => css`
            text-transform: 'uppercase';
            background-color: green;
            border-radius: 22px;
            font-size: 18px;
            color: white;
            min-width: 150px;

            padding: 0.75rem 0rem;
            box-shadow: 2.5px 5px 5px grey;
            font-family: Bodoni Moda, serif;
            :hover {
                background-color: #76A3A5;
            }

          `,
          buttonStyles,
        ]}
        
        {...props}
      >
        {children}
      </Box>
    );
  }
}

export default Button
