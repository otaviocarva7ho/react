import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meuItens = ['React', 'Vue', 'angular']

  return (
    <div className="App">
      <h1>Renderizção de Listas</h1>
      <OutraLista itens={meuItens} />
      <OutraLista itens={[]} />
    </div>  
  );
}

export default App;
