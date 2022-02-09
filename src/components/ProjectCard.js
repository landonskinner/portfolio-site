import React from 'react'

function ProjectCard({project: {name, description, summary, technologies, github, site}}) {

    return (
        <div>
            <h1>{name}</h1>
            <h4>{description}</h4>
            <p>{summary}</p>
            <ul>
                <li><a href={github}>Github</a></li>
                <li><a href={site}>Hosted Site</a></li>
            </ul>
            <div>
                {technologies.map(tech => {
                    return <span>#{tech}</span>
                })}
            </div>
        </div>
    )
}

export default ProjectCard