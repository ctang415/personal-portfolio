import { Link } from "react-router-dom"
import Light from '../Assets/light-mode.svg'
import Dark from '../Assets/dark-mode.svg'

const Header = ( {setMode, mode}) => {

    return (
        <nav className="nav-bar">
            <div className="nav-bar-left">
                <h1>
                    Carrie Tang
                </h1>
                <h4>
                    Software Engineer
                </h4>
            </div>
            <div className="nav-bar-right">
                <ul>
                    <li>
                        <Link to="/" style={ mode === "dark"  ? {color: "white" } : {color: "" }  }>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/info" style={ mode === "dark"  ? {color: "white" } : {color: "" }  }>
                        Info
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" style={ mode === "dark"  ? {color: "white" } : {color: "" }  }>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <img src={ mode === "light" ? Light : Dark} onClick={() => setMode(mode === "light" ? "dark" : "light")} 
                        alt={ mode === "light" ? "Light" : "Dark"}></img>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header