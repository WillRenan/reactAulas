import './App.css';
import Menu from './components/Menu/'
import Item from './components/Item'
import Card from './components/Card';



function App() {

  return (

    <div className="App">
      <header>
        <Menu/>
      </header>
      <div className="container ">
        <ul>
          <Item>
            Januária
          </Item>
          <Item>
            Bonito de Minas
          </Item>
          <Item>
            Montes Claros
          </Item>
        </ul>
        <Card 
            titulo='Car Store' 
            srcImg='https://jorgemoraes.com/wp-content/uploads/2018/09/JBS-Loja-nova-Pina-1.1_2-990x556.jpeg'
        />
      
      </div>
    </div>
  );
}

export default App;
