import React from 'react';
import styled, { css } from 'styled-components';

import EmailIcon from '../misc/email.png';
import LinkedinIcon from '../misc/linkedin.png';
import GithubIcon from '../misc/github.png';

function Contact(props){
    return (
            <>
            <ContactBody>
                    <ContactInfo>
                        <div>
                            <img src={EmailIcon} width={'60vw'}/>
                        </div>
                        <div style={{width: '1vw'}}/>
                        <div> 
                            Primary : <a href="mailto:jerrychang22@gmail.com"> jerrychang22@gmail.com </a> <br/>
                            Edu : <a href="mailto:jchang5@stevens.edu"> jchang5@stevens.edu </a> <br/>
                        </div>
                    </ContactInfo>
                    <ContactInfo>
                        <div>
                            <img src={LinkedinIcon} width={'60vw'}/>
                        </div>
                        <div style={{width: '1vw'}}/>
                        <div> 
                            LinkedIn : <a href="https://linkedin.com/in/jerrychang22"> linkedin.com/in/jerrychang22 </a> <br/>
                        </div>
                    </ContactInfo>
                    <ContactInfo>
                        <div>
                            <img src={GithubIcon} width={'60vw'}/>
                        </div>
                        <div style={{width: '1vw'}}/>
                        <div> 
                            Github : <a href="https://github.com/jerrychang22"> github.com/jerrychang22 </a> <br/>
                        </div>
                    </ContactInfo>
            </ContactBody>
            </>);
}

function ContactFooter(props){
    return (
        <StyledContactFooter>
            <ContactItem href="mailto:jerrychang22@gmail.com">
                <Icon src={EmailIcon}/>
                Email
            </ContactItem>
            
            <ContactItem href="https://www.linkedin.com/in/jerrychang22/">
                <Icon src={LinkedinIcon}/>
                LinkedIn
            </ContactItem>

            <ContactItem href="https://github.com/jerrychang22/">
                <Icon src={GithubIcon}/>
                Github
            </ContactItem>
            
            <Copyright>Jerry Chang @ 2020</Copyright> 
        </StyledContactFooter>
    );
}


const ContactBody = styled.div`
    display: flex;
    min-height: 55vh;
    flex-direction: column;
    justify-content: space-evenly;
    width: 25vw;
    position: absolute;
    left: 40vw;
    font-size: 1.2em;
`;

const ContactInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

const StyledContactFooter = styled.div`
    background-color: #06B25F; 
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: white;
    text-align: center;
    font-size: 1em;
    position: relative;
`;

const ContactItem = styled.a`
    display: flex;
    margin: 5vw;
    text-decoration: none;
    font-size: 1.5em;
    
    &:link, &:visited {
        color: white;
    }

`;

const Icon = styled.img`
    margin: 0 0.5vw;
    width: 30px;
`;

const Copyright = styled.div`
    position: absolute;
    bottom: 2%;
    right: 1%;
    font-size: 0.7em;
`;

export { Contact, ContactFooter };

