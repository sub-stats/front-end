import React from 'react';
import { Colors } from './Style-Colors';
import styled from 'styled-components';

const FooterDiv = styled.footer`
    height: 48px;
    background-color: ${Colors.primary.blue};
    box-shadow: 0 0 10px grey;
    margin-top: 2rem;
`;

function Footer () {
    return (
        <FooterDiv></FooterDiv>
    )
}

export default Footer;