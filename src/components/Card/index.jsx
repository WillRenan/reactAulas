/* import React from 'react'; */
import { useState } from "react";
import Btn from '../Btn';
import './index.css'


const Card = (props)=>{
  const [valor, setValor] = useState(0);
  function Adicionar (){
    setValor(valor + 1);
  }
  function Remover (){
      setValor(valor - 1);
  }
  function Zerar (){
      setValor(0);
  }
  let estilo ={
    width: '18rem',
    color: '#1e1e1e',
  
  }

  return(
    
        <div className="card-body">
          <h5 className="card-title">{valor}</h5>
          <Btn
          
            className="btn btn-danger  teste"
            onClick = {Remover}
          >
            -
          </Btn>
          <Btn
             className="btn btn-success teste"
            onClick = {Zerar}
          >
           -0-
          </Btn>

          <Btn
            className="btn btn-primary  teste"
            onClick = {Adicionar}
          >
            +
          </Btn>
          
        </div>
      
 
  )
}

export default Card;