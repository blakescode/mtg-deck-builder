import Deck from './components/deck/Deck'
import './App.css';

function App() {
  const cards = [
    {
      name: 'adamant-will',
      set: 'vow'
    },
    {
      name: 'angelic-quartermaster',
      set: 'vow'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Deck cards={cards}/>
      </header>
    </div>
  );
}

export default App;
