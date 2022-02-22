import React from 'react'
import ProjectCard from './ProjectCard'
import styled from 'styled-components'

function Projects() {

    const projectArr = [
        {
            name: 'unLeashed',
            technologies: ['React', 'ReactRouter', 'Rails', 'ActiveRecord', 'PostgreSQL', 'MaterialUI', 'ChatEngineAPI', 'NavigatorWebAPI', 'HTML5', 'CSS3', 'Heroku'],
            github: 'https://github.com/landonskinner/unleashed-app',
            site: 'https://unleashed-project.herokuapp.com/',
            youtube: 'https://www.youtube.com/watch?v=ja4nO0mtDH4',
            description: 'Dog “play-dating” application that allows owners to find companions for their dogs and direct message their matches'
        },
        {
            name: 'DropAPin',
            technologies: ['React', 'ReactRouter', 'Rails', 'ActiveRecord', 'PostgreSQL', 'StyledComponents', 'HTML5', 'CSS3', 'Heroku'],
            github: 'https://github.com/landonskinner/drop-a-pin-app',
            site: 'https://dropapin-travel-blog.herokuapp.com/',
            youtube: 'https://www.youtube.com/watch?v=SWAy7fnVAFY&t',
            description: 'Travel blogging application for sharing photos and stories from trips with the ability to comment on other users’ posts'
        },
        {
            name: 'Currency Exchange',
            technologies: ['React', 'ReactRouter', 'CurrencyExchangeAPI', 'Bootstrap', 'CSS3', 'Heroku', 'Vercel'],
            github: 'https://github.com/landonskinner/currency-exchange-app',
            site: 'https://currency-exchange-app.vercel.app/',
            youtube: 'https://www.youtube.com/watch?v=VYuZbrbVt60',
            description: 'Application for following exchange rates between 180+ foreign and cryptocurrencies'
        },
        {
            name: 'NHL Fantasy App',
            technologies: ['JavaScript', 'NHLAPI', 'Bootstrap', 'HTML5', 'CSS3', 'Heroku', 'Vercel'],
            github: 'https://github.com/landonskinner/nhl-fantasy-app',
            site: 'https://nhl-fantasy-app.vercel.app/',
            description: 'Application that allows users to build an NHL fantasy team with player statistics and the ability to filter by team and position'
        }
    ]

    return (
        <ProjectsStyle id="projects">
            {projectArr.map(project => <ProjectCard key={project.name} project={project}/>)}
        </ProjectsStyle>
    )
}

export default Projects

const ProjectsStyle = styled.div`

    background-color: black;
    
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* background-image: linear-gradient(#7170D5, #AE46B4); */

    @media screen and (max-width: 480px) {
        display: block;
    }

`