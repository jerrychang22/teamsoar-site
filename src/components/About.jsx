import React from 'react';
import styled, { css } from 'styled-components';

import JCPNG from '../misc/teamsoar.png';

function About(props) {
    return (
        <div>
            <h1> About </h1>

            <AboutContainer>
                <Photo src={JCPNG}/>
                <InfoBlock>
                    <p><b>Team SOAR</b> </p>
                    <p>We are Team SOAR, a group of engineers committed to developing small-scale storage solutions that can grow with your business. Our product ModStore is a fully customizable and modular storage and retrieval system that keeps the workspace clean and tracks specific data about the stored materials. </p>
                    <p>ModStore is designed with your company in mind. All aspects of the system are designed to transport and store any products imaginable. ModStore also helps keep track of key data about each of your products to make retrieval fast and accurate to help save your business money. </p>
                	  <p>The prototype version of ModStore has been designed for Infineum, a subsidiary of Exxon and Shell and a world leader in industrial fuel additives testing. The cart has been designed to carry up to four bottles and the main computer keeps track of information about the fluids being stored including expiration dates to minimise waste.</p>
	</InfoBlock>
            </AboutContainer>
        </div>
    );
}

const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
`;

const Photo = styled.img`
    text-align: center;
    border: 2px solid #06B25F;
    box-shadow: 1px 1px #888888;
    display: flex;
    flex-basis: 768px;
`;

const InfoBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 30vw;
    height: 100%;
    font-size: 1.5em;
    justify-content: center;
    flex-basis: 640px;
`;

export { About };
