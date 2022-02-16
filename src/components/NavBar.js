import {Link} from 'react-scroll'

function NavBar() {
    return (
        <div className="navbar">
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>
                Home
            </Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
                Projects
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                About Me
            </Link>
        </div>
    )
}

export default NavBar