import { useEffect, useState } from "react"

const Loading = ( {loading} ) => {
    const [copy, setCopy] = useState("initializing ... personal portfolio")

    if (loading) {
        return (
            <div className="loading-page"> 
         <span aria-label={copy}>
          {copy.split("").map( (char, index) => {
            return  (
                <span
                    style={{animationDelay: (0.5 + index / 10) + "s"}}
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