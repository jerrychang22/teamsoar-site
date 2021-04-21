import React from 'react';
import styled, { css } from 'styled-components';
import { StyledNavButton } from './NavigationBar.jsx';

import { maxBlackout } from '../utils/constants.js';
import JCPNG from '../misc/teamsoar.png';
//import WorkIMG from '../misc/work.jpg';
//import CollageIMG from '../misc/projects.png';
import CartPNG from '../misc/cart.png';
import EECPNG from '../misc/eecarriage.png';
import HousingUPNG from '../misc/housing_under.png';
import HousingOPNG from '../misc/housing_over.png';
import ShelfPNG from '../misc/shelf.png';
import XYRailsPNG from '../misc/xyrails.png';

import { lerp, lerp2 } from '../utils/lerp.js';
import { scrollSwitch, navMinHeight, navMaxHeight, mainMaxHeight, logoMinSize, logoMaxSize, logoFontScale, logoMinLeft, butMinSize, butMaxSize, hrMinWidth, throttleTime } from '../utils/constants.js';
import { cartMin, cartMax, eecMin, eecMax, housingUMin, housingUMax, housingOMin, housingOMax, shelfMin, shelfMax, xyrailsMin, xyrailsMax } from '../utils/constants.js';

function navContentScroll2(props, e){
    if (props.height < 1){
        window.scrollTo({
            top: window.innerHeight * scrollSwitch / 100,
            left: 0,
            behavior: 'smooth'
        });  
    }
    else 
        window.scrollTo({
            top: window.innerHeight * scrollSwitch / 100,
            left: 0,
            behavior: 'auto'
        });
}

//Home page
function Home(props){
    
    function navHomeScroll(e){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });  
    }

    function navContentScroll(e){
        if (props.height < 1){
            window.scrollTo({
                top: window.innerHeight * scrollSwitch / 100,
                left: 0,
                behavior: 'smooth'
            });  
        }
        else 
            window.scrollTo({
                top: window.innerHeight * scrollSwitch / 100,
                left: 0,
                behavior: 'auto'
            });
    }

    /*
    function navContentScroll(e){
        return navContentScroll2(props, e);
    } 
    */

    return (<div>
                <div style={{height: mainMaxHeight + 'vh'}}>
                    <ResumeContainer>
                        <ExplodedImageContainer>
                            <CartIMG src={CartPNG} left={lerp(cartMin, cartMax, props.height)}/>
                            <EECIMG src={EECPNG} left={lerp(eecMin, eecMax, props.height)}/>
                            <HousingUIMG src={HousingUPNG} left={lerp(housingUMin, housingUMax, props.height)} />
                            <HousingOIMG src={HousingOPNG} left={lerp(housingOMin, housingOMax, props.height)} />
                            <ShelfIMG src={ShelfPNG} left={lerp(shelfMin, shelfMax, props.height)}/>
                            <XYRailsIMG src={XYRailsPNG} left={lerp(xyrailsMin, xyrailsMax, props.height)}/>
                        </ExplodedImageContainer>
                        <InfoBlock>
                            <MainText>Team</MainText>
                            <MainText>SOAR</MainText>
                            <SubText>Storage, Organization,</SubText> 
                            <SubText>Automation, Retrieval</SubText>
                        </InfoBlock>
                    </ResumeContainer>
                </div>

                <WhoImage>
                    <WhoBlock>
                        <WhoText>
                            <p>
                            </p>
                            <StyledNavButton to='/about' onClick={navContentScroll}> Learn more about me</StyledNavButton>  
                        </WhoText>
                    </WhoBlock>
                </WhoImage>
                <BreakBlock>
                    Check out some of the things I've done
                </BreakBlock>
                
                <ProjectAndWork>
                    <HomeProject>
                        <ShadowBlock>
                            <div> Projects </div>
                            <StyledNavButton to='/projects' onClick={navContentScroll}> Projects </StyledNavButton>
                        </ShadowBlock>
                    </HomeProject>
                    <HomeWork>
                        <ShadowBlock>
                            <div> Work Experience </div>
                            <StyledNavButton to='/resume' onClick={navContentScroll}> Resume </StyledNavButton>
                        </ShadowBlock>
                    </HomeWork>
                </ProjectAndWork>

                <BreakBlock>
                    Contact me
                </BreakBlock>
            </div>);
}

const WhoImage = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;

const WhoBlock = styled.div`
    background-image: linear-gradient(to right, rgba(34,34,34, 0.8), rgba(34, 34, 34, 0));
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
`;

const WhoText = styled.div`
    margin-left: 5%;
    width: 35%;
    height: 40%;
    color: white;
    font-size: 1.5em;
`;

const BreakBlock = styled.div`
    border-top: 2px solid #000000; 
    border-bottom: 2px solid #000000; 
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: black;
    text-align: center;
    font-size: 2em;
`;

const ProjectAndWork = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const HomeProject = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 640px;

    background-size: cover;
    height: 90vh;

    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2em;
    color: white;
`;

const HomeWork = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 640px;

    background-size: cover;
    background-position: center;
    height: 90vh;

    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2em;
    color: white;
`;

const ShadowBlock = styled.div`
    background-color: rgba(34,34,34,0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`;

const ResumeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ExplodedImageContainer = styled.div`
    position: fixed;
    top: 15%;
    width: 100%;
`;

const CartIMG = styled.img`
    position: absolute;
    margin-top: 12%;
    left: ${props => props.left}%;
    z-index: 3;
`;

const EECIMG = styled.img`
    position: absolute;
    margin-top: 10%;
    left: ${props => props.left}%;
    z-index: 6;
`;

const HousingUIMG = styled.img`
    position: absolute;
    left: ${props => props.left}%;
    z-index: 1;
`;

const HousingOIMG = styled.img`
    position: absolute;
    margin-top: 5.4%;
    left: ${props => props.left}%;
    z-index: 6;
`;

const ShelfIMG = styled.img`
    position: absolute;
    margin-top: 4%;
    left: ${props => props.left}%;
    z-index: 2;
`;

const XYRailsIMG = styled.img`
    position: absolute;
    margin-top: 4%;
    left: ${props => props.left}%;
    z-index: 5;
`;

const InfoBlock = styled.div`
    position: relative;
    margin-top: 35vh;
    left: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
`;

const MainText = styled.p`
    font-size: 9em;
    margin-top: -12%;
    margin-bottom: 0;
    font-family: "MontserratThin" !important;
    font-weight: 100;
`;

const SubText = styled.p`
    font-size: 2.5em;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 200;
`;

export { Home };
