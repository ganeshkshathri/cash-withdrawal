
import "./index.css"

const DenominationItem =props=>{
    const {eachItem} = props
    const {value,id}=eachItem
    const {calculate} =props
    const myfun=()=>{
        calculate(id,value)
    }
    return(
        
        <button className="button" onClick={myfun} >{value}</button>
    )
}
export default DenominationItem