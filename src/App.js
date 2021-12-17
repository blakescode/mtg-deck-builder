import Deck from './components/deck/Deck'
import './App.css';
import { buildSamplePack } from './helpers/packs';

function App() {
  const cardPool = buildSamplePack();
  return (
    <div className="App">
      <header className="App-header">
        <Deck cards={cardPool}/>
      </header>
    </div>
  );
}

export default App;
