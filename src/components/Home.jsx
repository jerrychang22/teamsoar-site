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

import { lerp, lerp2, lerp3 } from '../utils/lerp.js';
import { scrollSwitch, navMinHeight, navMaxHeight, mainMaxHeight, logoMinSize, logoMaxSize, logoFontScale, logoMinLeft, butMinSize, butMaxSize, hrMinWidth, throttleTime } from '../utils/constants.js';
import { cartMin, cartMax, cartDef, eecMin, eecMax, eecDef, housingUMin, housingUMax, housingUDef, housingOMin, housingOMax, housingODef, shelfMin, shelfMax, shelfDef, xyrailsMin, xyrailsMax, xyrailsDef, cadUpShift } from '../utils/constants.js';

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

    function cadHeight(t, def){
        return (t < 2) ? def : lerp(def, def - cadUpShift, t - 2);
    }

    /*
    function navContentScroll(e){
        return navContentScroll2(props, e);
    } 
    */

    return (<div>
                <div style={{height: mainMaxHeight + 'vh', position: 'relative'}}>
                    <ResumeContainer>
                        <ExplodedImageContainer>
                            <CartIMG src={CartPNG} left={lerp(cartMin, cartMax, props.height)} h={cadHeight(props.height, cartDef)}/>
                            <EECIMG src={EECPNG} left={lerp(eecMin, eecMax, props.height)} h={cadHeight(props.height, eecDef)}/>
                            <HousingUIMG src={HousingUPNG} left={lerp(housingUMin, housingUMax, props.height)} h={cadHeight(props.height, housingUDef)} />
                            <HousingOIMG src={HousingOPNG} left={lerp(housingOMin, housingOMax, props.height)} h={cadHeight(props.height, housingODef)} />
                            <ShelfIMG src={ShelfPNG} left={lerp(shelfMin, shelfMax, props.height)} h={cadHeight(props.height, shelfDef)}/>
                            <XYRailsIMG src={XYRailsPNG} left={lerp(xyrailsMin, xyrailsMax, props.height)} h={cadHeight(props.height, xyrailsDef)}/>
                        </ExplodedImageContainer>
                        <InfoBlock>
                            <MainText>Team</MainText>
                            <MainText>SOAR</MainText>
                            <SubText>Storage, Organization,</SubText> 
                            <SubText>Automation, Retrieval</SubText>
                        </InfoBlock>
                    </ResumeContainer>
                    <Label style={{bottom: '6%', left: '10%'}}>Housing</Label>
                    <Label style={{bottom: '25%', left: '47%'}}>Manipulator</Label>
                    <Label style={{bottom: '2%', left: '75%'}}>Cart</Label>
                    <Label style={{bottom: '15%', left: '64%'}}>End Effector</Label>
                    <Label style={{bottom: '23%', left: '73%'}}>Shelf</Label>
                </div>

                <WhoImage>
                    <WhoBlock>
                        <WhoText>
                            <p>
                            </p>
                        </WhoText>
                    </WhoBlock>
                </WhoImage>
                <BreakBlock>
                    <p style={{marginBottom: '-2%'}}>ModStore takes the functionality and efficiency of automated warehouse storage systems</p>
                    <p> and scales it down into the corner of any room</p>
                </BreakBlock>
                
                <ProjectAndWork>
                    <HomeProject>
                        <ShadowBlock>
                            <div> Learn more about ModStore </div>
                            <StyledNavButton to='/projects' onClick={navContentScroll}> ModStore </StyledNavButton>
                        </ShadowBlock>
                    </HomeProject>
                    <HomeWork>
                        <ShadowBlock>
                            <div> Learn about the team </div>
                            <StyledNavButton to='/about' onClick={navContentScroll}> About Us </StyledNavButton>
                        </ShadowBlock>
                    </HomeWork>
                </ProjectAndWork>

                <BreakBlock>
                    Contact the team!
                </BreakBlock>
            </div>);
}

const WhoImage = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: black;
    text-align: center;
    font-size: 2em;
    font-weight: 200;
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
    height: 40vh;

    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: 200;
`;

const HomeWork = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 640px;

    background-size: cover;
    background-position: center;
    height: 40vh;

    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: 200;
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
    margin-top: ${props => props.h}%;
    left: ${props => props.left}%;
    z-index: 3;
`;

const EECIMG = styled.img`
    position: absolute;
    margin-top:${props => props.h}%;
    left: ${props => props.left}%;
    z-index: 6;
`;

const HousingUIMG = styled.img`
    position: absolute;
    margin-top:${props => props.h}%; 
    left: ${props => props.left}%;
    z-index: 1;
`;

const HousingOIMG = styled.img`
    position: absolute;
    margin-top: ${props => props.h}%;
    left: ${props => props.left}%;
    z-index: 6;
`;

const ShelfIMG = styled.img`
    position: absolute;
    margin-top: ${props => props.h}%;
    left: ${props => props.left}%;
    z-index: 2;
`;

const XYRailsIMG = styled.img`
    position: absolute;
    margin-top: ${props => props.h}%;
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

const Label = styled.p`
    position: absolute;
    font-size: 3em;
    font-weight: 200;
`;

export { Home };
