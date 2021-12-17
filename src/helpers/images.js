export function getImageUrl(card) {
  return window.location.origin + '/images/' + card.set + '/' + card.name + '.png'
}