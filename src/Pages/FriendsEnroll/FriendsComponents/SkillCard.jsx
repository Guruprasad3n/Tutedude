import "./skillcard.css"
import data from "../../data.json"
function SkillCard(){
    return(
        <>
        <div>{data.skills}</div>
        </>
    )
}
export default SkillCard