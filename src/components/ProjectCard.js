import React from 'react'
import styled from 'styled-components'
import youtube_icon from '../images/youtube.png'
import github_icon from '../images/github.png'
import website_icon from '../images/website.png'

function ProjectCard({project: {name, description, technologies, github, site, youtube}}) {

    return (
        <ProjectCardStyle className="project-card">
            <ul>
                <li><a href={github} target="_blank" rel="noreferrer"><img src={github_icon} alt="GitHub" /></a></li>
                {youtube ? <li><a href={youtube} target="_blank" rel="noreferrer"><img src={youtube_icon} alt="YouTube Demo" /></a></li> : null}
                <li><a href={site} target="_blank" rel="noreferrer"><img src={website_icon} alt="Hosted Site" /></a></li>
            </ul>
            <h1>{name}</h1>
            <div className="card-body">
                <p>{description}</p>
                <hr />
                <div className="technologies">
                    {technologies.map(tech => {
                        return <span>#{tech}</span>
                    })}
                </div>
            </div>
        </ProjectCardStyle>
    )
}

export default ProjectCard

const ProjectCardStyle = styled.div`

    flex-basis: 20vw;
    margin: 1em;
    background-color: white;
    border-radius: 15px;
    /* height: 70vh; */
    padding: 0.75em;


    /* background-color: rgba(255, 255, 255, .1); */
    h1 {
        height: auto;
        background: black;
        color: white;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Londrina Solid', cursive;
        font-size: 2.5rem;
        margin-top: 0.25em;
        margin-bottom: 0.25em;
        padding: 0.1em 0.2em 0.1em 0.2em;
    }

    ul {
        list-style: none;
        padding: 0;
        background-color: white;
        display: flex;
        justify-content: space-around;
        border-radius: 15px;
        border: 5px solid black;
        margin-bottom: 0.1em;
        margin-top: 0;
    }

    img {
        width: 36px;
    }

    .card-body {
        background-color: white;
        border-radius: 15px;
        border: 5px solid black;
        height: auto;
        padding: 0 0.35em 0 0.35em;
        div {
            margin: 16px 0 16px 0;
        }
    }

    hr {
        border: 2px solid black;
        border-radius: 5px;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        span {
            padding: 0 0.5em 0 0.5em;
        }
    }

    @media screen and (max-width: 480px) {
        margin-left: 2em;
        margin-right: 2em;
    }

`