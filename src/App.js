import logo from './logo.svg';
import './App.css';
import Person from './components/personTemplate';

const App = ()=> {
  const name = 'Wanjugu'
  const namesArray= ['Joshua','Nderi','Wanjugu', 'Sovereign','Hello']
  return (
    <div className="App">
     <h2>Hello from {name}</h2>
     {
      //write code here
      namesArray.sort().map((name, pos)=>(
      
         <Person name={name} id={pos}/>

      ))

     }
    </div>
  );
}

export default App;
