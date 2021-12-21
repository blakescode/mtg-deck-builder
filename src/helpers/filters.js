export function sortByColor(cards) {
  const COLORS = ["W", "U", "B", "R", "G"];
  let cardPool = [];
  COLORS.forEach(color => {
    cardPool.push(cards.filter(card => colorFilter(card, color)));
  });
  cardPool.push(cards.filter(card => card.colors.length > 1));
  cardPool.push(cards.filter(card => card.colors.length === 0));
  return cardPool;
}

function colorFilter(card, color) {
  return card.colors.length === 1 && card.colors[0] === color;
}