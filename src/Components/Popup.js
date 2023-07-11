import { useState } from "react"

const Popup = ( { x, handleModal, name } ) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselScroll = () => {
        if (currentIndex === x.images.length -1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    if (x.modal) {
    return (
        <div className="pop-up">
            <div className="pop-up-container">
                <div className="close" onClick={handleModal}>
                    X
                </div>
                <div className="pop-up-projects-container">
                    {x.images.map( (item) => {
                        return (
                            <div className="pop-up-project" style={ {transform: `translate(-${currentIndex * 100}%)`}}>
                                <img src={item} key={item} alt={x.name}></img>
                            </div>
                        )
                    })}
                </div>
                <button onClick={carouselScroll}/>
            </div>
        </div>
    )
    }
}

export default Popup