import Location from '../Assets/location-black.svg'
import Email from '../Assets/email-black.svg'
const Contact = () => {
    return (
        <div className='contact'>
            <ul>
                <li>
                    <img src={Location} alt="Location icon"/>
                    New York
                </li>
                <li>
                    <img src={Email} alt="Email icon"/>
                    carrietang117 at gmail dot com
                </li>
                <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github icon" />
                    github.com/ctang415
                </li>
            </ul>
        </div>
    )
}

export default Contact