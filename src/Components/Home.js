import Me from "../Assets/me.jpg"

const Home = () => {
    return (
        <div className="display">
            <div className="image">
                    <img src={Me} alt="Me"></img>
            </div>
            <div className="home-text">
                Self-taught developer.
                Mainly front-end experienced with a strong interest in back-end development.
            </div>
        </div>
    )

}
export default Home