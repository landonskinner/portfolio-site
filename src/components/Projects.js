import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {

    const projectArr = [
        {
            name: 'unLeashed',
            technologies: ['React', 'Rails'],
            github: 'link',
            site: 'link',
            description: 'dog dating app',
            summary: 'this is a really cool app'
        },
        {
            name: 'DropAPin',
            technologies: ['React', 'Ruby/Sinatra'],
            github: 'link',
            site: 'link',
            description: 'travel blog app',
            summary: 'this is a really cool app too'
        }
    ]

    return (
        <div>
            {projectArr.map(project => <ProjectCard key={project.name} project={project}/>)}
        </div>
    )
}

export default Projects