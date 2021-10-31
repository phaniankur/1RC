import styled from "@emotion/styled";
import { variant, space, layout } from "styled-system";

const Input = styled.input(
  {
    outline: 0,
    border: "none",
    margin: '0',
    width: "100%",
    // height: "100%",
    borderRadius: "22px",
  },
  variant({
    variants: {
      primary: {
        backgroundColor: "red",
        padding: "1.2rem 2rem",
        fontSize: "1rem",
        "&::placeholder": {
          color: "#A4A4A4",
        },
      },
      green: {
        backgroundColor: "#5D7B6F",
        padding: "1rem",
        marginBottom: '1rem',
        
        fontSize: "1rem",
        "&::placeholder": {
          color: "#EAE7D6",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        padding: ".5rem 0rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black",
      },
    },
  }),
  space,
  layout
);

export default Input;

// `
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   outline: 0;
//   border: none;
//   padding: 1.5rem 2rem;
// `;
