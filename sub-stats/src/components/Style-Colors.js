import styled from 'styled-components';
/*
This page contains color variables for consistent styling. Colors are stored as strings in an object; access the colors using dot notation:

(example using styled components)

const HeaderDiv = styled.div`
        background-color: ${colors.primary.mint};
    `

*/

export const Colors = {
    primary: {
        orangered: "#FF4500",
        mint: "#0DD3BB",
        blue: "#24A0ED",
    },
    secondary: {
        yellow: "#FFCA00",
        mango: "#FFB000",
        orange: "#FF8717",
        teal: "#00A6A5",
        alienblue: "#0079D3"
    },
    neutral: {
        white: "#fff",
        black: "#000",
        redditgrey: "#DAE0E6"
    }
  };

  export const InfoCard = styled.div`
  background-image: linear-gradient(120deg, rgba(255, 176, 0, .4), rgba(255, 69, 0, .2) 90%);
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 2px 3px 5px ${Colors.secondary.mango};
  margin: 2rem;
`;