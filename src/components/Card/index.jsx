/* import React from 'react'; */
import { useState } from "react"
const Card = (props)=>{

  const [valor, setValor] = useState(0);

 /*  const Adicionar = () =>{
    setValor(valor+1);
  } */

  function Adicionar (){
    setValor(valor + 1);
  }
  function Remover (){

    
      setValor(valor - 1);
 
    
  }


  let estilo ={
    width: '18rem',
    color: '#1e1e1e',
    
  }
  return(
  
      <div className="card" style={estilo}>
        <div className="card-body">
          <h5 className="card-title">{valor}</h5>
          <button
             type="button" 
             className="btn btn-danger"
             onClick = {Remover}
          >
          -
          </button>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick = {Adicionar}
          >
            +
          </button>
          
        </div>
      </div>
 
  )
}

export default Card;