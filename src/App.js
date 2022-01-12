import Deck from './components/deck/Deck'
import Stats from './components/deck/Stats'
import Filter from './components/filter/Filter'
import { useState, useEffect } from 'react'
import './App.css';
import { buildSealedPool } from './helpers/packs';

function App() {
  const [ filter, setFilter ] = useState('')
  const [ cardPool, setCardPool ] = useState([])
  const [ deckList, setDeckList ] = useState([]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleMoveCard = (cardKey) => {
    console.log('handleMoveCard => ', cardKey);
    if (cardPool.find(card => card.key === cardKey)) {
      console.log('found card with key');
      const cardToMove = cardPool.filter(card => card.key === cardKey);
      console.log('cardToMove', cardToMove);
      console.log('currentCardPool', cardPool);
      // remove from CardPool list
      setCardPool(cardPool.filter(card => card.key !== cardKey));
      console.log('cardpoolafter removal', cardPool);
      // add to DeckList
      setDeckList((deckList) => [...deckList, cardToMove[0]]);
    }
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
        <Deck cards={filtered()} handleMoveCard={handleMoveCard}/>
      </div>
      <div className="deck-stats-container">
        <Stats cards={filtered()}/>
      </div>
      <div className="filter-container">
        <Filter 
          filter={filter}
          filterChange={handleFilterChange}
        />
      </div>
      <div className="deck-build-container">
        <Deck cards={deckList}/>
      </div>
    </div>
  );
}

export default App;
