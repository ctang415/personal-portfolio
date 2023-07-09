import FredditHome from "../Assets/Freddit/freddit-home.png"
import BattleshipHome from "../Assets/Battleship/battleship-home.png"
import WeatherApp from "../Assets/Weather-App/weather-app-alt.png"
import MemoryGame from "../Assets/Memory-Game/memory-game.png"
import Waldo from "../Assets/Waldo/waldo-photo-tag.png"
import Shopping from "../Assets/Shopping-Cart/shopping-cart-home.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Projects = ( {mode} ) => {
    const data = [ 
    [{ name: "Freddit - Reddit Clone", image: FredditHome, info: "", link: "../https://github.com/ctang415/reddit-clone" },
    { name: "Battleship", image: BattleshipHome, info: "", link: "../https://github.com/ctang415/battleship" }, 
    { name: "Weather App", image: WeatherApp, info: "", link:"../https://github.com/ctang415/weather-app" }], 
    [{ name: "Memory Card Game", image: MemoryGame, info: "", link:"../https://github.com/ctang415/memory-game" },
    { name: "Where's Waldo", image: Waldo, info: "", link:"../https://github.com/ctang415/Wheres-waldo" }, 
    { name: "Shopping Cart", image: Shopping, info: "", link:"../https://github.com/ctang415/shopping-cart" }] 
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselScroll = () => {
        if (currentIndex === 3.5) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 3.5)
    }

    return (
        <div className="display">
            <h3>Projects</h3>
            <div className="projects-container">
                {data.map( (x) => { 
                    return (
                     x.map( (item, index ) => {
                    return (
                        <div className="project" style={ {transform: `translate(-${currentIndex * 100}%)`}}>
                            <h4>
                                {item.name}
                            </h4>
                            <img src={item.image} alt={item.name}></img>
                            <p>
                                {item.info}
                                <Link to={item.link} style={ mode === "dark" ? {textDecoration: "none", color: "white"} : {textDecoration: "none", color: "black"}}>
                                    <i className={mode === "dark" ? "devicon-github-original" : "devicon-github-original colored"}/>
                                </Link>
                            </p>
                        </div>
                    )
                }))}
                )}
            </div>
            <button onClick={carouselScroll}/>
        </div>
    )
}

export default Projects

/*

                <div className="projects-top">
                    <div className="project">
                        <h4>Freddit - Reddit Clone</h4>
                        <img src={FredditHome} alt="Freddit website" />
                        <p>Hello</p>
                    </div>
                    <div className="project">
                        <h4>Battleship</h4>
                        <img src={BattleshipHome} alt="Battleship Game"/>
                    </div>
                    <div className="project">
                        <h4>Weather App</h4>
                        <img src={WeatherApp} alt="Weather App"/>
                    </div>
                </div>
                <div className="projects-bottom">
                <div className="project">
                        <h4>Memory Card Game</h4>
                        <img src={MemoryGame} alt="Memory Card Game"/>
                    </div>
                    <div className="project">
                        <h4>Where's Waldo</h4>
                        <img src={Waldo} alt="Where's Waldo Game"/>
                    </div>
                    <div className="project">
                        <h4>Shopping Cart</h4>
                        <img src={Shopping} alt="Shopping Cart Project"/>
                    </div>
                </div>
                */