import './App.css';
import SayMayName from './components/SayMayName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Silva"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMayName nome = "Carvalho" />
      <SayMayName nome = "Isabelly" />
      <SayMayName nome = {nome}/>
      <Pessoa 
        nome = "Otávio" 
        idade = "18" 
        profissao = "Programador" 
        foto = "https://via.placeholder.com/150" 
      />
      <List />
    </div>
  );
}

export default App;
