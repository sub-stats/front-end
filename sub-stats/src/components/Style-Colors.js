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
        blue: "rgba(36, 160, 237, 1)",
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
  background-image: linear-gradient(120deg, rgba(255, 135, 23, .4) 30%, rgba(255, 176, 0, .4) 20%);
  padding: 1rem;
  border-radius: .3rem;
  box-shadow: 2px 3px 3px lightgrey;
  margin: 1rem 2rem;
`;

  export const SecondaryCard = styled.div`
  background-image: linear-gradient(120deg, rgba(36, 160, 237, .3) 30%, rgba(13, 211, 187, .4) 20%);
  padding: 1rem;
  border-radius: .3rem;
  box-shadow: 2px 3px 3px lightgrey;
  margin: 1rem 2rem;
  transition: transform .2s ease;

  &:hover {
    box-shadow: 0 0 10px ${Colors.primary.blue};
    transform: scale(1.02);
    transition: transform .2s ease;
  }
`;

export const BgDiv = styled.div`
  background-color: rgba(255,255,255, .4);
  border-radius: .3rem;
  box-shadow: 0 0 10px rgba(255,255,255, .8);
  margin: 1rem;
`;

export const randomColor = () => {
    const bgArray = [" linear-gradient(120deg, rgba(255, 202, 0, .4) 30%, rgba(36, 160, 237, .3) 20%);",
     " linear-gradient(120deg, rgba(13, 211, 187, .4) 30%, rgba(36, 160, 237, .3) 20%);",
       " linear-gradient(120deg, rgba(255, 135, 23, .4) 30%, rgba(36, 160, 237, .3) 20%);"]

        const randomNum = Math.floor(Math.random() * bgArray.length)
        const pick = bgArray[randomNum]
        return pick;
}

console.log(randomColor())