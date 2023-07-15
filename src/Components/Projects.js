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
import { useState } from "react"
import Project from "./Project"

const Projects = ( {mode, mobile, landscape} ) => {
    const [ data, setData ] = useState([ 
    { modal: false, name: "Freddit", image: FredditHome, info: "Mobile-responsive clone of Reddit with CRUD functionality", 
    tools: "ReactJS, Firebase ", link: "../https://github.com/ctang415/reddit-clone", demo: "../reddit-clone-e4070.web.app/", 
    images: [ {image: FredditHome, caption: "Front page - post content pulled from Firebase" }, 
    {image: FredditLogin, caption: "Feed for logged-in users - users authenticated by Firebase" }, 
    { image: FredditCommunity, caption: "Community pages" }, 
    { image: FredditUser, caption: "User pages" }] },
    { modal: false, name: "Battleship", image: BattleshipHome, info: "Classic game of Battleship made with object-oriented programming", 
    tools:"JavaScript ", link: "../https://github.com/ctang415/battleship", demo: "../https://ctang415.github.io/battleship/", 
    images: [ {image: BattleshipHome, caption: "Player can move their ships (in grey) by dragging and clicking before hitting start"}, 
    {image: BattleshipPlay, caption: "Basic gameplay - misses are in white and hits are in red"}, 
    {image: BattleshipGameover, caption: "End screen"} ] }, 
    { modal: false, name: "Weather App", image: WeatherApp, info: "App that fetches real-time forecast data using OpenWeather API", 
    tools:"JavaScript ", link:"../https://github.com/ctang415/weather-app", demo: "../https://ctang415.github.io/weather-app/",
    images: [ {image: WeatherApp, caption: "Search result with metric system - click on temperature to convert to imperial" }, 
        {image:WeatherAppAlt, caption: "Alternate view in imperial measurements" }] }, 
    { modal: false, name: "Memory Card Game", image: MemoryGame, info: "Simple memory game with cards that rearrange after every click", 
    tools: "ReactJS ",  link:"../https://github.com/ctang415/memory-game", demo: "../https://ctang415.github.io/memory-game/",
    images: [ {image: MemoryGame, caption: "Character cards based off the game, Animal Crossing"}, 
    { image: MemoryGameWin, caption: "Win screen" }] },
    { modal: false, name: "Where's Waldo", image: Waldo, info: "Photo-tagging application with a score leaderboard", 
    tools:"ReactJS, Firebase ", link:"../https://github.com/ctang415/Wheres-waldo", demo: "../where-s-waldo-22957.web.app/",
    images: [ {image: Waldo, caption: "Home page - 3 different levels to play" }, 
    { image: WaldoSearch, caption: "Search for characters in the header within the image"}, 
    {image: WaldoWin, caption: "Submit name and score to leaderboard" }, 
    {image: WaldoBoard, caption: "Leaderboard - data stored with Firebase" }] }, 
    { modal: false, name: "Shopping Cart", image: Shopping, info: "Basic mock up of an online shopping page", 
    tools: "ReactJS ", link:"../https://github.com/ctang415/shopping-cart", demo: "../https://ctang415.github.io/shopping-cart/",
    images: [ {image: Shopping, caption: "Home page"}, 
    { image: ShoppingProducts, caption: "Store page" }, 
    {image: ShoppingProduct, caption: "Product page"}] } 
    ])
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [ active, setActive ] = useState(true)

    const setSlide = (num) => {
        if (num !== currentIndex) {
        setActive(!active)
        setCurrentIndex(num)
    }
}

    return (
        <div className="display">
            <h3>Projects</h3>
            <div className="projects-container">
                {data.map( (x, index) => { 
                    return (
                        <Project landscape={landscape} key={index} index={index} data={data} setData={setData} x={x} mode={mode} 
                        currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                    )}
                )}
            </div>
            <div className={ mobile && !landscape ? "none" : "pop-up-button"}>
                <div className={ active ? "active" : "dot"} style={ mode === "light" && active ? { border: " solid 1px black", backgroundColor: "black"} : {}} onClick={() => setSlide(0)}/>
                <div className={ !active ? "active" : "dot"} style={ mode === "light" && !active ? { border: " solid 1px black", backgroundColor: "black"}: {}} onClick={() => setSlide(3.4)}/>
            </div>
        </div>
    )
}

export default Projects
