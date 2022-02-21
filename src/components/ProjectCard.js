import React from 'react'
import styled from 'styled-components'

function ProjectCard({project: {name, description, technologies, github, site}}) {

    return (
        <ProjectCardStyle>
            <h1>{name}</h1>
            <p>{description}</p>
            <ul>
                <li><a href={github} target="_blank" rel="noreferrer">Github</a></li>
                <li><a href={site} target="_blank" rel="noreferrer">Hosted Site</a></li>
            </ul>
            <div>
                {technologies.map(tech => {
                    return <span>{tech}, </span>
                })}
            </div>
        </ProjectCardStyle>
    )
}

export default ProjectCard

const ProjectCardStyle = styled.div`

    flex-basis: 20vw;
    margin: 1em;
    /* background-color: rgba(255, 255, 255, .1); */

    ul {
        list-style: none;
        padding: 0;
    }

    @media screen and (max-width: 480px) {
        margin-left: 2em;
        margin-right: 2em;
    }

`