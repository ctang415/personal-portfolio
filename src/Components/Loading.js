import { useState } from "react"

const Loading = ( {loading} ) => {
    const [copy, setCopy] = useState("Carrie \n\n\n\nTang ... initializing \n\n... \n\nportfolio")

    if (loading) {
        return (
            <div className="loading-page"> 
                <span className="loading-copy" aria-label={copy}>
                    {copy.replace(("\n", "\n ")).split("").map( (char, index) => {
                        return  (
                            <span
                            style={{animationDelay: (0.5 + index / 17) + "s"}}
                            aria-hidden="true"
                            key={index}>
                            {char}
                            </span>
                        )
                    })}
                </span>
            </div>
        )
    }
}

export default Loading