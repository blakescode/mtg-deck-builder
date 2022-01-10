import Deck from './components/deck/Deck'
import Stats from './components/deck/Stats'
import Filter from './components/filter/Filter'
import { useState, useEffect } from 'react'
import './App.css';
import { buildSealedPool } from './helpers/packs';

function App() {
  const [ filter, setFilter ] = useState('')
  const [ cardPool, setCardPool ] = useState([])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    const cards = buildSealedPool();
    setCardPool(cards);
  }, [])

  const filtered = () => {
    return cardPool.filter(card => 
      card.name.toLowerCase().includes(filter)
    )
  };


  return (
    <div className="App">
      <div className="card-pool-container">
        <Deck cards={cardPool}/>
      </div>
      <div className="deck-stats-container">
        <Stats cards={cardPool}/>
      </div>
      <div className="filter-container">
        <Filter 
          filter={filter}
          filterChange={handleFilterChange}
        />
      </div>
      <div className="deck-build-container">
        <Deck cards={filtered()}/>
      </div>
    </div>
  );
}

export default App;
