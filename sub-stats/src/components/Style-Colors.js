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
        orangered: "rgba(255, 69, 0, 1)",
        mint: "rgba(13, 211, 187, 1)",
        blue: "#rgba(36, 160, 237, 1)",
    },
    secondary: {
        yellow: "rgba(255, 202, 0, 1)",
        mango: "rgba(255, 176, 0, 1)",
        orange: "rgba(255, 135, 23, 1)",
        teal: "rgba(0, 166, 165, 1)",
        alienblue: "rgba(0, 121, 211, 1)"
    },
    neutral: {
        white: "#fff",
        black: "#000",
        redditgrey: "#DAE0E6"
    }
  };

  export const PrimaryCard = styled.div`
  background-image: linear-gradient(120deg, rgba(255, 176, 0, .4), rgba(255, 69, 0, .2) 90%);
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 2px 3px 5px ${Colors.secondary.mango};
  margin: 1rem 2rem;
`;

  export const SecondaryCard = styled.div`
  background-image: linear-gradient(120deg, rgba(13, 211, 187, .4), rgba(36, 160, 237, .5) 90%);
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 2px 3px 5px ${Colors.primary.mint};
  margin: 1rem 2rem;
`;

export const randomColor = () => {
    const bgArray = [" linear-gradient(120deg, rgba(13, 211, 187, .4), rgba(36, 160, 237, .5) 90%);",
     " linear-gradient(120deg, rgba(36, 160, 237, .4), rgba(254, 107, 139, .3) 90%);",
      " linear-gradient(120deg, rgba(0, 121, 211, .4), rgba(255, 69, 0, .4) 90%);",
       " linear-gradient(120deg, rgba(0, 166, 165, ,4), rgba(36, 160, 237, .5) 90%);",]

        const randomNum = Math.floor(Math.random() * bgArray.length)
        const pick = bgArray[randomNum]
        return pick;
}