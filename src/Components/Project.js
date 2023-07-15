import { useState } from "react";
import { Link } from "react-router-dom"
import Popup from "./Popup";
import LinkWhite from "../Assets/link-white.svg"
import LinkBlack from "../Assets/link-black.svg"

const Project = ( {x, mode, currentIndex, data, setData} ) => {
    const [ name, setName ] = useState('')

    const handleModal = (e) => {
        setName(e.target.alt)
        if (x.modal) {
            let x = data.map( (x) => {
                if ( x.name === e.target.alt || x.name === name ) {
                    x.modal = !x.modal
                    return x
                }
                return x
            })
            setData(x)
        } else {
            let x = data.map( (x) => {
                if ( x.name === e.target.alt || x.name === name  ) {
                    x.modal = !x.modal
                    return x
                }
                return x
            })
            setData(x)
        }
    }

    return (
        <div className="project-page" key={x.name}>
            <Popup mode={mode} x={x} setData={setData} data={data} handleModal={handleModal} name={name} />
            <div className={ mode === "dark" ? "project-dark" : "project"} style={{transform: `translate(-${currentIndex * 100}%)`}}>
                <h4>
                    {x.name}
                </h4>
                <img src={x.image} alt={x.name} onClick={handleModal} />
                <div className="project-info">
                    {x.info}
                    <div className="project-tools" style={{fontWeight: "bold"}}>
                        {x.tools}
                        <a href={`${x.link}`}
                            target="_blank" rel='noopener noreferrer'
                            style={ mode === "dark" ? {textDecoration: "none", color: "white"} : {textDecoration: "none", color: "black"}}>
                            <i className={mode === "dark" ? "devicon-github-original" : "devicon-github-original colored"}/>
                        </a>
                        <a href={`${x.demo}`} target="_blank" rel='noopener noreferrer'>
                            <img src={ mode === "dark" ? LinkWhite : LinkBlack } alt="Link icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project