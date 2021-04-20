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
                    <p> My name is <b>JerEEEEEEEEEEEEry Chang</b> </p>
                    <p> I'm a rising senior obtaining a mechanical engineering degree. I was raised in New York City and in high school I joined the school's FIRST Robotics team and would since be in love with the world of robotics. </p>
                    <p> I believe in understanding the fundamentals and building quality. Whether it's the design, the circuitry, or the programming, I like building the project from the ground up and learning as much as I can. Extensibility is very important to me. Making something easier to develop, maintain, and upgrade creates long-lasting and less headache-inducing products.</p>
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
