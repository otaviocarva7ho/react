import './App.css';
import SayMayName from './components/SayMayName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Silva"

  return (
    <div className="App">
      <SayMayName nome = "Carvalho" />
      <SayMayName nome = "Isabelly" />
      <SayMayName nome = {nome}/>
      <Pessoa 
        nome = "Otávio" 
        idade = "18" 
        profissao = "Programador" 
        foto = "https://via.placeholder.com/150" 
      />
    </div>
  );
}

export default App;
