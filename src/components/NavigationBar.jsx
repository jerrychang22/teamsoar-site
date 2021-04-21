import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import TeamSoarLogo from '../misc/teamsoarlogo.png';

import { lerp, lerp2 } from '../utils/lerp.js';
import { scrollSwitch, navMinHeight, navMaxHeight, logoMinSize, logoMaxSize, logoFontScale, logoMinLeft, butMinSize, butMaxSize, hrMinWidth, throttleTime } from '../utils/constants.js';

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

function NavBar(props) {
    
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

    return ( 
        <StyledNavBar>

            <Link to="/" onClick={navHomeScroll}>
                <StyledLogo src={TeamSoarLogo}/> 
            </Link>
            
            <StyledButtonGroup size={butMinSize} right={butMinSize} >
                <StyledNavButton to="/projects" onClick={navContentScroll}> Project ModStore </StyledNavButton>
                <StyledNavButton to="/about" onClick={navContentScroll}> About Us   </StyledNavButton>
                <StyledNavButton to="/contact" onClick={navContentScroll}> Contact  </StyledNavButton>
            
            </StyledButtonGroup>
            
            <StyledRule width={100} margin={0}/>
        </StyledNavBar>
    );
}

const StyledLogo = styled.img`
    color: #000000;    
    display: inline-block;
    height: 150%;
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translate(-50%, -50%);
`;

const StyledButtonGroup = styled.div`
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 12%;
    transform: translate(50%, -50%);
`;

const StyledNavButton = styled(Link)`
    display: inline-block;
    color: #000000;
    font-size: 1em;
    margin: 1vw;
    padding: 0.25em 1em;
    border: 2px solid #000000;
    border-radius: 3px;
    text-decoration: none;
    background-color: #FFFFFF;
    font-weight: 200;
`;

const StyledRule = styled.hr`
    color: #000000;
    width: ${props => props.width}vw;
    position: absolute;
    bottom: 0;
    margin-left: ${props => props.margin}vw;
    margin-bottom: 0;
`;

const StyledNavBar = styled.div`
    
    background-repeat: no-repeat;
    background-size: cover;
    
    background-color: #FFFFFF;
    display: inline-block;
    z-index: 1000;
    position: fixed;
    height: 7vh;
    width: 100%;
    top: 0;
`;

//export { StyledNavBar };
export { NavBar, StyledNavButton, navContentScroll2 };
