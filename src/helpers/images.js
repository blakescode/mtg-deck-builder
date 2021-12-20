export function getImageUrl(card) {
  return window.location.origin + '/images/vow/' + card.collector + '-' + formattedCardName(card.name) + '.png';
}

function formattedCardName(name) {
  let formattedName = name.replace(/[,']/g, "");
  formattedName = formattedName.replaceAll(' ', '-');
  return formattedName;
}