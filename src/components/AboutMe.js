import React from 'react'
import styled from 'styled-components'
import github_icon from '../images/github.png'
import linkedin_icon from '../images/linkedin.png'
import email_icon from '../images/email.png'

function AboutMe() {
    return (
        <AboutMeStyle id="about">
            <div className="intro">
                <span>I am...</span>
                <span>a Full Stack Developer based in Austin, Texas.</span>
                <hr />
                <span>experienced in HTML, CSS, JavaScript, and Ruby along with frameworks like React and Rails.</span>
                <hr />
                <span>passionate about clean code and delivering responsive products.</span>
                <hr /> 
                <span>always looking for something new to learn.</span>
                <hr />
                <span>probably hiking or running somewhere.</span>
            </div>
            <ul>
                <li><a href='https://github.com/landonskinner' target="_blank" rel="noreferrer"><img src={github_icon} alt="GitHub" /></a></li>
                <li><a href='https://www.linkedin.com/in/landon-skinner/' target="_blank" rel="noreferrer"><img src={linkedin_icon} alt="LinkedIn" /></a></li>
                <li><a href="mailto: landonjskinner@gmail.com" target="_blank" rel="noreferrer"><img src={email_icon} alt="Email" /></a></li>
            </ul>
        </AboutMeStyle>
    )
}

export default AboutMe

const AboutMeStyle = styled.div`

    height: 100vh;
    color: white;

    .intro {
        position: relative;
        top: 15vh;
        padding-left: 1em;
    }

    span:first-of-type {
        font-size: 7rem;
        font-family: 'Londrina Outline', cursive;
        margin-bottom: 0.15em;
    }

    span {
        text-align: left;
        display: block;
        line-height: 0.75em;
        font-size: 3rem;
        font-family: 'Londrina Solid', cursive;
        margin-right: 0.5em;
    }

    hr {
        border: 2px solid white;
        margin: 1em 1em 1em 0;
        border-radius: 15px;
    }

    ul {
        list-style: none;
        padding: 0;
        width: 50vw;
        margin: auto;
        background-color: white;
        position: relative;
        top: 9em;
        display: flex;
        justify-content: space-around;
        border-radius: 15px;
        border: 5px solid black;
        margin-bottom: 1em;
        margin-top: 1em;
        z-index: 1;
    }

    img {
        width: 6em;
    }

    @media screen and (max-width: 480px) {
        span {
            font-size: 2rem;
        }
        span:first-of-type {
            font-size: 3rem;
            margin-bottom: 0.3em;
        }
        ul {
            width: 90vw;
            margin-top: 2em;
        }
        img {
            width: 4em;
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }
    }

`