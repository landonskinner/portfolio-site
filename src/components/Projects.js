import React from 'react'
import ProjectCard from './ProjectCard'
import styled from 'styled-components'

function Projects() {

    const projectArr = [
        {
            name: 'unLeashed',
            technologies: ['React', 'React Router', 'Rails', 'ActiveRecord', 'PostgreSQL', 'Material UI', 'ChatEngine API', 'Navigator Web API', 'HTML5', 'CSS3', 'Heroku'],
            github: 'https://github.com/landonskinner/unleashed-app',
            site: 'https://unleashed-project.herokuapp.com/',
            description: 'Dog “play-dating” application that allows owners to find companions for their dogs and direct message their matches'
        },
        {
            name: 'DropAPin',
            technologies: ['React', 'React Router', 'Rails', 'ActiveRecord', 'PostgreSQL', 'Styled Components', 'HTML5', 'CSS3', 'Heroku'],
            github: 'https://github.com/landonskinner/drop-a-pin-app',
            site: 'https://dropapin-travel-blog.herokuapp.com/',
            description: 'Travel blogging application for sharing photos and stories from trips with the ability to comment on other users’ posts'
        },
        {
            name: 'Currency Exchange',
            technologies: ['React', 'React Router', 'Currency Exchange API', 'Boostrap', 'CSS3', 'Heroku', 'Vercel'],
            github: 'https://github.com/landonskinner/currency-exchange-app',
            site: 'https://currency-exchange-app.vercel.app/',
            description: 'Application for following exchange rates between 180+ foreign and cryptocurrencies'
        },
        {
            name: 'NHL Fantasy App',
            technologies: ['JavaScript', 'NHL API', 'Bootstrap', 'HTML5', 'CSS3', 'Heroku', 'Vercel'],
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