import Deck from './components/deck/Deck'
import './App.css';
import { buildSealedPool } from './helpers/packs';

function App() {
  const cardPool = buildSealedPool();
  console.log('sealed pool', cardPool);
  return (
    <div className="App">
      <Deck cards={cardPool}/>
    </div>
  );
}

export default App;
