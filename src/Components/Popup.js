import { useState } from "react"

const Popup = ( { x, handleModal, mode } ) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const currentSlide = (index) => {
        setCurrentIndex(index)
    }


    if (x.modal) {
    return (
        <div className="pop-up">
            <div className="pop-up-container" style={ mode === "light" ? {backgroundColor: "white", border: "1px solid grey"} : {}}>
                <div className="close" style={ mode === "light" ? {color: "black"} : {}} onClick={handleModal}>
                    X
                </div>
                <div className="pop-up-projects-container">
                    {x.images.map( (item, index) => {
                        return (
                            <div className="pop-up-project" style={ {transform: `translate(-${currentIndex * 100}%)`}}>
                                <img src={item} key={x.index} alt={x.name}></img>
                            </div>
                        )
                    })}
                </div>
                <div className="pop-up-button">
                    {x.images.map( (item, index) => {
                        return (
                            <div className={ currentIndex === index ? "active" : "dot"} style={ mode === "light" && currentIndex === index ? { border: " solid 1px black", backgroundColor: "black"} : {}} key={x.index} onClick={ () => currentSlide(index)}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
    }
}

export default Popup