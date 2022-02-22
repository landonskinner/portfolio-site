import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <HomeStyle id="home">
            <div className="intro-container">
                <div className="intro">
                    <span className="greeting">Hello! I am</span><span className="name">Landon Skinner</span><span className="role">Full Stack Developer</span>
                    <div className="about"></div>
                </div>
                
            </div>
        </HomeStyle>
    )
}

export default Home

const HomeStyle = styled.div`

    height: 100vh;

    

    .intro-container {
        background-color: black;
        height: 100%;
        width: 100vw;
    }

    .intro {
        
        font-family: 'Londrina Outline', cursive;
        color: white;
        font-size: 7rem;
        position: relative;
        top: 30vh;
        padding-left: 0.15em;
        
    }

    span {
        text-align: left;
        display: block;
        line-height: 0.75em;
    }

    .name {
        display: block;
        font-family: 'Londrina Solid', cursive;
        font-size: 12rem;
    }

    @media screen and (max-width: 480px) {
        .intro-container {
            width: 100%;
        }

        .intro {
            font-size: 4.25rem;
        }

        .name {
            font-size: 6rem;
        }
    }

    .about {
        color: white;
        font-family: Arial !important;
        font-size: 1.15rem;
        text-align: left;
        margin-top: 1em;
    }
    
    /* background-image: linear-gradient(#5089e1, #7170D5); */

`