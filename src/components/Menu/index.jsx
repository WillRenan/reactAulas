import React from 'react'
import Button from '../Button/';
import './index.css'

const Menu = () =>{
  const soma = (a,b)=>{
    alert(a+b);
  }
  return(
    <div>
      <header>
        <div className="container">
          <div className="logo  ">
              <h1>MyPage</h1>
          </div>
          <nav>
            
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Contatos</a>
            <a href="#">Entrar</a>
            <a href="#">Perfil</a>
         
            <Button name="LOGAR" onClick={()=>{soma(10,20)}}/>
            {/* <Button name="Sair" onClick={()=>{soma(20,20)}}/> */}
          </nav>
          
          
        </div>
      </header>

    </div>
  )
}

export default Menu;
