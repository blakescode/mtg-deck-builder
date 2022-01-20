function countCardsInList(cards) {
  return cards.reduce(function (allNames, card) {
    if (card.name in allNames) {
      allNames[card.name]++
    }
    else {
      allNames[card.name] = 1
    }
    return allNames
  }, {})
}

export function deckListToMTGA(deck, sideboard) {
  let deckCounted = countCardsInList(deck.sort((a, b) => a.name.localeCompare(b.name)));
  let sideboardCounted = countCardsInList(sideboard.sort((a, b) => a.name.localeCompare(b.name)));
  let output = '';
  output += 'Deck';
  for (const property in deckCounted) {
    output += `\n${deckCounted[property]} ${property}`
  }
  output += `\n\nSideboard`;
  for (const property in sideboardCounted) {
    output += `\n${sideboardCounted[property]} ${property}`
  }
  updateClipboard(output);
}

function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    alert('Decklist copied to clipboard')
  }, function() {
    /* clipboard write failed */
  });
}