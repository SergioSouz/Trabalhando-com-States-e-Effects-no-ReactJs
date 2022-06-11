import React from "react";

export function Counter(){
   let quantity = 0;

   function UpQuantity(){
      quantity = quantity + 1
      let box = document.getElementById('counter-box')
      box.innerHTML = quantity
   }  
   
   function DnQuantity(){
      if(quantity > 0){
         quantity = quantity - 1
         let box = document.getElementById('counter-box')
         box.innerHTML = quantity
      }
   }

   return (
      <>
         <h1>Counter</h1>
         <p>componente sem utilizar hooks</p>
         <h1 id="counter-box">{quantity}</h1>
         <button onClick={UpQuantity}>Almentar</button>
         <button onClick={DnQuantity}>Diminuir</button>
      </>
   )
}