import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import * as projects_data from '../misc/projects.json';

function ProjectCard(props) {

    const project = props.proj;
    var code = "";
    var codeString;
    if (project.hasOwnProperty('Code')) {
        code = project.Code;
        if (code != "No longer available")
            codeString = <p>Code: <a href={code}>{code}</a></p>;
        else codeString = <p>Code: {code}</p>;
    }
    var about = project.About.split('@');
    var tags = project.Tags.split('@').map((tag) => <Tag> {tag} </Tag>);

    return (
            <CardContainer>
                <CardInfo>
                    <CardTitle>
                        <h3 style={{margin: '1vh 0'}}> #{project.id} {project.Name} </h3>
                        {project.Date}
                    </CardTitle>
                    <CardAbout>
                        <p>{about[0]}</p>
                        {codeString}
                    </CardAbout>
                </CardInfo>
                <CardTags>
                    {tags}
                </CardTags>
                <CardMore>
                    
                </CardMore>
            </CardContainer>
    );
}

function ProjectList(props) {

    const [current_image, update_image] = React.useState(projects_data.items[0].Images);
    var mobile = (window.innerWidth < window.innerHeight);
    var disp_height = mobile ? 20 : 80;
    var image_width = mobile ? 100 : 40;
    var card_scroll = mobile ? 0.4 : 0.15;
    var image_wrap = mobile ? 'wrap' : 'nowrap';

    var proj_list = projects_data.items.map((proj) => {
        const position = React.useRef(null); 
        function projectClick(){
            window.scrollTo({top: position.current.getBoundingClientRect().top + window.pageYOffset - card_scroll * window.innerHeight, behavior: 'smooth'});
            
            if ({proj}.proj.hasOwnProperty('Images')){
                update_image({proj}.proj.Images);
            }
            else{
                update_image('NoImages.png');
            }
        }
        return (
            <ListItem ref={position} onClick={projectClick}> 
                <ProjectCard proj={proj} />
            </ListItem>)
    });
  
    var image_list = current_image.split("@");
    var image_height = mobile ? 30 : 80/image_list.length;
    image_list = image_list.map((img) => {
        return <>
                <ProjectImage src={'./project_images/' + img}>
                </ProjectImage>
            </>
    });

    return (
        <div>
            <h1 style={{margin: '0'}}> Projects </h1>
            <ProjectsContainer wrap={image_wrap}>
                <ProjectDisplay height={disp_height} width={image_width}>
                    {image_list}
                </ProjectDisplay>
                <ProjectsBox>
                    <ProjectNote>Click on some projects I've done</ProjectNote>
                    <ListContainer> {proj_list} </ListContainer>
                </ProjectsBox>
            </ProjectsContainer>
        </div>
    );
}

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: ${props => props.wrap};
`;

const ProjectDisplay = styled.div`
    display: flex;
    background-color: white;
    height: ${props => props.height}vh;
    width: ${props => props.width}vw;
    
    position: sticky;
    top: 10vh;
    padding: 5vh 0.5vw;
    
    flex-flow: column wrap;
`;

const ProjectImage = styled.div`
    display: flex;
   
    justify-content: center;
    flex: 1 1 15vh;

    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid #06B25F;
`;

const ProjectPic = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    height: ${props => props.height}vh;
`;

const ProjectsBox = styled.div`
    display: flex;
    flex-basis: 640px;
    flex-grow: 1;
    margin-top: 5vh;
    margin-left: 2vw;
    flex-direction: column;
`;

const ProjectNote = styled.div`
    display: flex;
    height: 5vh;
    justify-content: center;
`;

const ListContainer = styled.ul`
    width: 100%;
    padding: 0;
`;

const ListItem = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0;
    &:hover{
        border: 1px solid #222222
    }
`;

const CardContainer = styled.div`
    display: flex;
    width: 100%;
    border-top: 2px solid #06B25F; 
    border-bottom: 2px solid #06B25F; 

`;

const CardInfo = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    margin-right: 5%;
`;

const CardTitle = styled.div`
    width: 100%;
`;

const CardAbout = styled.div`
    width: 100%;
    height: 70%;
    font-size: 0.9em;
`;

const CardTags = styled.div`
    display: flex;
    width: 15%;
    margin: 3vh 0;
    flex-direction: column;
`;

const Tag = styled.div`
    display: flex;
    width: 8em;
    margin: 1vh 0;
`;

const CardMore = styled.div`
    display: flex;
    width: 10%;
`
export { ProjectCard, ProjectList };
