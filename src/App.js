import Deck from './components/deck/Deck'
import Stats from './components/deck/Stats'
import './App.css';
import { buildSealedPool } from './helpers/packs';

function App() {
  const cardPool = buildSealedPool();
  const deckBuild = [];
  return (
    <div className="App">
      <div className="card-pool-container">
        <Deck cards={cardPool}/>
      </div>
      <div className="deck-stats-container">
        <Stats cards={cardPool}/>
      </div>
      {/* <div className="deck-build-container">
        <Deck cards={deckBuild}/>
      </div> */}
    </div>
  );
}

export default App;
