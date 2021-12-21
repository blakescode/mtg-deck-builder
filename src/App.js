import Deck from './components/deck/Deck'
import './App.css';
import { buildSealedPool } from './helpers/packs';

function App() {
  const cardPool = buildSealedPool();
  console.log('sealed pool', cardPool);
  return (
    <div className="App">
      <header className="App-header">
        <Deck cards={cardPool}/>
      </header>
    </div>
  );
}

export default App;
