import React, { useState, useEffect} from "react";
import './style.css'


export function IfoodCounter(){

   const [value,setValue] = useState(0)
   const [ButtonStyle,setButtonStyle] = useState("counter-button-minus-active")


   useEffect(() => {
      document.getElementById('moeda').innerHTML ="R$ "+ 2.00 * value
   },[value])


   useEffect(() => {
      alert('Esse valor não pode ser mais alterado')
   },[ButtonStyle])
   
   function Down(){
      if(value <= 0){
         // mudar o css
         setButtonStyle('counter-button-minus-desactive')
      }

      if(value > 0){
         setValue(value - 1)
      }
   }

   function Up(){
      setValue(value + 1)
      setButtonStyle('counter-button-minus-active')
   }
   
   return(
      <>
         <h1>IfoodCounter</h1>
         <p>componente onde recria o contador de pedido no ifood, utilizando useState pra manipula o css da nossa pasta e nosso values tambem </p>
         <div className="countex-wrapper">
            <button 
            className={ButtonStyle}
            onClick={Down}
            >
               -
            </button>

            <p>{value}</p>

            <button 
            className="counter-button-plus-active"
            onClick={Up}

            >
               +
            </button>

            <button className="buttonValor" id="moeda"></button>
         </div>
      </>
   )
}