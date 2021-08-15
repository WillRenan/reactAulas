import logo from './logo.svg';
import Menu from './components/Menu/'
import './App.css';


const btnA = <button>True</button>;
const btnB = <button>False</button>
const boleano = false;

const listCustomer = [
  {
    id:0,
    nome:'Willian'
  },
  {
    id:1,
    nome:'Renan'
  }

]

function App() {

  //////////////////////////////////////////////////////////////////////////////
  const renderTrue = ()=>(
    <div>
      <h1>True</h1>
      {btnA}
    </div>
  )
  const renderFalse = ()=>(
    <div>
      <h1>False</h1>
      {btnB}
    </div>
  )
  //////////////////////////////////////////////////////////////////////////////
  const renderListCustomers = (customer, index) =>{
    return(
      <tr> 
        <td>{customer.id}</td>
        <td>{customer.nome}</td>
      </tr>
      
    )
  }
  ////////////////////////////////////////////////////////////////////////////// 
  
  return (

    <div className="App">
      <header>
        <Menu/>
      </header>
      <btnA/>
      {boleano ? renderTrue() : renderFalse() }

      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
        </tr>
        {listCustomer.map(renderListCustomers)}

      </table>
    </div>
  );
}

export default App;
