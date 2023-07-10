

const Popup = ( { x, handleModal, name } ) => {

    if (x.modal) {
    return (
        <div className="pop-up">
            <div className="pop-up-container">
                <button onClick={handleModal}>X</button>
                <img src={x.image} alt={x.name}/>
            </div>
        </div>
    )
    }
}

export default Popup