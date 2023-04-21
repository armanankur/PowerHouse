
import Button from "../../components/Button/Button"
import styled from "./Card.module.css"
import { useNavigate } from "react-router-dom"
const Card =(props)=> {
    const navigate = useNavigate()
const handleBtnClick=()=>{
navigate("/login")
}
    return(
      <div className={styled.cardContainer}>

          <div className={styled.pass}>
             <h2 className={styled.plans}>{props.subscription}</h2>
               <h3 className={styled.amt}><span>@</span> {props.amount}/<sub> year</sub></h3>
          </div>

          <div className={styled.facilities}>
            <h3> Fitness Plan</h3>
  <ul className={styled.lists}>
   {props.facilities.map((facility) => {
    return <li className={styled.list}> {facility}</li>
   })}
  </ul>
          
          </div>

          <div className={styled.btnContainer}>
            <Button btnName="Buy"  onClick={handleBtnClick}/>
          </div>
            
        </div>
    )
  }
  export default Card