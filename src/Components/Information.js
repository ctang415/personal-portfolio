import { useState } from "react"

const Information = () => {
    const [ skills, setSkills ] = useState(["JavaScript", "React", "HTML", "CSS", "Git"])
    
    return (
        <div className="display">
            <h3>Information</h3>
                <h4 className="skills">Skills</h4>
                <div className="info">
                {skills.map(skill => {
                    return (
                        <div className="skill">
                            {skill}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Information