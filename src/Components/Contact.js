import Location from '../Assets/location-black.svg'
import Email from '../Assets/email-black.svg'
import LocationLight from '../Assets/location-white.svg'
import EmailLight from '../Assets/email-white.svg'
import { Link } from 'react-router-dom'

const Contact = ( {mode} ) => {
    return (
        <div className='contact'>
            <ul>
                <li>
                    <img src={ mode === "light" ? Location : LocationLight } alt="Location icon"/>
                    New York
                </li>
                <li>
                    <img src={ mode === "light" ? Email : EmailLight } alt="Email icon"/>
                    carrietang117 [at] gmail.com
                </li>
                <li>
                <i className={ mode === "dark" ? "devicon-github-original" : "devicon-github-original colored"}
                style={{ fontSize: "1.5em"}}></i>
                    <Link to='../github.com/ctang415' style={ mode === "light" ? { color: "black"} : {color: "white"}}>github.com/ctang415</Link>
                </li>
            </ul>
        </div>
    )
}

export default Contact