import Card from './components/card/Card'
import './App.css';

function App() {
  const card = {
    name: 'angelic-quartermaster',
    set: 'vow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <Card card={card}/>
      </header>
    </div>
  );
}

export default App;
