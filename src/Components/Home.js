import Me from "../Assets/me.jpg"

const Home = () => {
    return (
        <div className="display">
            <div className="image">
                    <img src={Me} alt="Me"></img>
            </div>
            <div className="home-text">
                Self-taught developer.
                Front-end experienced.
            </div>
        </div>
    )

}
export default Home