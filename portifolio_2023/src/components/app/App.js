import './App.css';
import tecnologiesData from '../../data/tecnologies'

function App() {
  return (
    <div className="App">
      <h1> {tecnologiesData[0].name} </h1>
      <img src={tecnologiesData[0].logo} alt='asa'/>
    </div>
  );
}

export default App;
