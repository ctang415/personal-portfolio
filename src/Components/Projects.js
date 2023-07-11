import FredditHome from "../Assets/Freddit/freddit-home.png"
import FredditLogin from "../Assets/Freddit/freddit-login.png"
import FredditCommunity from "../Assets/Freddit/freddit-community.png"
import FredditUser from "../Assets/Freddit/freddit-user.png"
import BattleshipHome from "../Assets/Battleship/battleship-home.png"
import BattleshipPlay from "../Assets/Battleship/battleship-play.png"
import BattleshipGameover from "../Assets/Battleship/battleship-gameover.png"
import WeatherApp from "../Assets/Weather-App/weather-app-alt.png"
import WeatherAppAlt from "../Assets/Weather-App/weather-app.png"
import MemoryGame from "../Assets/Memory-Game/memory-game.png"
import MemoryGameWin from "../Assets/Memory-Game/memory-game-win.png"
import Waldo from "../Assets/Waldo/waldo-photo-tag.png"
import WaldoSearch from "../Assets/Waldo/waldo-search.png"
import WaldoWin from "../Assets/Waldo/waldo-win.png"
import WaldoBoard from "../Assets/Waldo/waldo-leaderboard.png"
import Shopping from "../Assets/Shopping-Cart/shopping-cart-home.png"
import ShoppingProducts from "../Assets/Shopping-Cart/shopping-cart-products.png"
import ShoppingProduct from "../Assets/Shopping-Cart/shopping-cart-product.png"
import { useEffect, useState } from "react"
import Project from "./Project"

const Projects = ( {mode} ) => {
    const [ data, setData ] = useState([ 
    { modal: false, name: "Freddit", image: FredditHome, info: "Mobile-responsive clone of Reddit with CRUD functionality", 
    tools: "ReactJS, Firebase ", link: "../https://github.com/ctang415/reddit-clone", images: [ FredditHome, FredditLogin, FredditCommunity, FredditUser] },
    { modal: false, name: "Battleship", image: BattleshipHome, info: "Classic game of Battleship made with object-oriented programming", 
    tools:"JavaScript ", link: "../https://github.com/ctang415/battleship", images: [ BattleshipHome, BattleshipPlay, BattleshipGameover] }, 
    { modal: false, name: "Weather App", image: WeatherApp, info: "App that fetches real-time forecast data using OpenWeather API", 
    tools:"JavaScript ", link:"../https://github.com/ctang415/weather-app", images: [ WeatherApp, WeatherAppAlt] }, 
    { modal: false, name: "Memory Card Game", image: MemoryGame, info: "Simple memory game with cards that rearrange after every click", 
    tools: "ReactJS ",  link:"../https://github.com/ctang415/memory-game", images: [ MemoryGame, MemoryGameWin] },
    { modal: false, name: "Where's Waldo", image: Waldo, info: "Photo-tagging application with a score leaderboard", 
    tools:"ReactJS, Firebase ", link:"../https://github.com/ctang415/Wheres-waldo", images: [Waldo, WaldoSearch, WaldoWin, WaldoBoard] }, 
    { modal: false, name: "Shopping Cart", image: Shopping, info: "Basic mock up of an online shopping page", 
    tools: "ReactJS ", link:"../https://github.com/ctang415/shopping-cart", images: [Shopping, ShoppingProducts, ShoppingProduct] } 
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
