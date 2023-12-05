import './App.css';

function App() {

  const name = 'Carvalho'
  const newName = name.toUpperCase()
  const url = "https://via.placeholder.com/150"

  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Olá, {name}</p>
      <p>{newName}</p>
      <p>soma: {2 + 2}</p>
      <p>soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
