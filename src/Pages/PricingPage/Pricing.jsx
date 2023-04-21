import React from "react"
import styled from "./Pricing.module.css"
import Card from "./Card"
import cardData from "./CardData"

const ncard=(elem) => {
 return (
  <>
  <Card  subscription={elem.subscription} amount ={elem.amount} facilities={elem.facilities} />
  </>
 )
}

const Pricing=()=> {

  return(
 <div className={styled.mainContainer}>

    <div className={styled.cards}>

    {cardData.map(ncard)}
    </div>
    
   </div>

    
  )
}
export default Pricing
