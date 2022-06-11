import React, { useState } from "react";


export function SmartCounter(){
   const [quantity, setQuantity] = useState(1)

   function upCounter(){
      setQuantity(quantity + 1)
   }
   function dnCounter(){
      if(quantity > 0){
         setQuantity(quantity - 1)
      }
   }


   return(
      <>
         <h1>SmartCounter</h1>
         <p>componente com utilizar hooks</p>
         <h1>{quantity}</h1>
         <button onClick={upCounter}>Almentar</button>
         <button onClick={dnCounter}>Diminuir</button>
      </>
   )
}