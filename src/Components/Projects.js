import FredditHome from "../Assets/Freddit/freddit-home.png"
import BattleshipHome from "../Assets/Battleship/battleship-home.png"
import WeatherApp from "../Assets/Weather-App/weather-app-alt.png"
import MemoryGame from "../Assets/Memory-Game/memory-game.png"
import Waldo from "../Assets/Waldo/waldo-photo-tag.png"
import Shopping from "../Assets/Shopping-Cart/shopping-cart-home.png"
import { useEffect, useState } from "react"
import Project from "./Project"

const Projects = ( {mode} ) => {
    const [ data, setData ] = useState([ 
    { modal: false, name: "Freddit", image: FredditHome, info: "Mobile-responsive clone of Reddit with CRUD functionality", tools: "ReactJS, Firebase ", link: "../https://github.com/ctang415/reddit-clone" },
    { modal: false, name: "Battleship", image: BattleshipHome, info: "Classic game of Battleship made with object-oriented programming", tools:"JavaScript ", link: "../https://github.com/ctang415/battleship" }, 
    { modal: false, name: "Weather App", image: WeatherApp, info: "App that fetches real-time forecast data using OpenWeather API", tools:"JavaScript ", link:"../https://github.com/ctang415/weather-app" }, 
    { modal: false, name: "Memory Card Game", image: MemoryGame, info: "Simple memory game with cards that rearrange after every click", tools: "ReactJS ",  link:"../https://github.com/ctang415/memory-game" },
    { modal: false, name: "Where's Waldo", image: Waldo, info: "Photo-tagging application with a score leaderboard", tools:"ReactJS, Firebase ", link:"../https://github.com/ctang415/Wheres-waldo" }, 
    { modal: false, name: "Shopping Cart", image: Shopping, info: "Basic mock up of an online shopping page", tools: "ReactJS ", link:"../https://github.com/ctang415/shopping-cart" } 
    ])
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselScroll = () => {
        if (currentIndex === 3.4) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 3.4)
    }
    
    useEffect(() => {
        console.log(data)
    }, [data]) 

    return (
        <div className="display">
            <h3>Projects</h3>
            <div className="projects-container">
                {data.map( (x, index) => { 
                    return (
                        <Project key={index} index={index} data={data} setData={setData} x={x} mode={mode} currentIndex={currentIndex}/>
                    )}
                )}
            </div>
            <button onClick={carouselScroll}/>
        </div>
    )
}

export default Projects
