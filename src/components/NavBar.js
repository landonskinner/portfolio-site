import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default NavBar