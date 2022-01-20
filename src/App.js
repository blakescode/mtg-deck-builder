import Deck from './components/deck/Deck'
import Stats from './components/deck/Stats'
import Filter from './components/filter/Filter'
import { useState, useEffect } from 'react'
import './App.css';
import { buildSealedPool } from './helpers/packs';
import { search, sortByColor } from './helpers/filters';
import { deckListToMTGA } from './helpers/export';

function App() {
  const [ searchFilter, setSearchFilter ] = useState('')
  const [ cardPool, setCardPool ] = useState([])
  const [ deckList, setDeckList ] = useState([]);

  const handleFilterChange = (event) => {
    setSearchFilter(event.target.value)
  }

  const handleMoveCard = (cardKey) => {
    if (cardPool.find(card => card.key === cardKey)) {
      const cardToMove = cardPool.filter(card => card.key === cardKey);
      // remove from CardPool list
      setCardPool(cardPool.filter(card => card.key !== cardKey));
      // add to DeckList
      setDeckList((deckList) => [...deckList, cardToMove[0]]);
    } else {
      const cardToMove = deckList.filter(card => card.key === cardKey);
      setDeckList(deckList.filter(card => card.key !== cardKey));
      setCardPool((cardPool) => [...cardPool, cardToMove[0]]);
    }
  }

  useEffect(() => {
    const cards = buildSealedPool();
    setCardPool(cards);
  }, [])

  const applyFilters = (cards) => {
    return search(searchFilter, cards);
  };


  return (
    <div className="App">
      <div className="card-pool-container">
        <Deck cards={applyFilters(cardPool)} handleMoveCard={handleMoveCard}/>
      </div>
      <div className="filter-container">
        <Filter 
          filter={searchFilter}
          filterChange={handleFilterChange}
        />
      </div>
      <div className="deck-stats-container">
        <Stats cards={applyFilters(deckList)}/>
      </div>

      <div className="deck-build-container">
        <Deck cards={applyFilters(deckList)} handleMoveCard={handleMoveCard}/>
      </div>
      <button onClick={() => deckListToMTGA(deckList, cardPool)}>
        Export to MTGA format
      </button>
    </div>
  );
}

export default App;
