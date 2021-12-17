import set from '../data/sets/vow.json'

const rares = set.filter(card => card.rarity.toLowerCase() === 'rare')
const mythics = set.filter(card => card.rarity.toLowerCase() === 'mythics')
/* 
  Each booster needs either a mythic/rare/uncommon transform card. We will roll randomly for the rare/mythics.
  If we don't have a transform card at the rare/mythic slot, we will pull from the uncommon transforms.
*/ 

const transforms = set.filter(card => card.flip_image !== null)
const regulars = set.filter(card => card.flip_image === null)

const commons = regulars.filter(card => card.rarity.toLowerCase() === 'common')
const uncommons = regulars.filter(card => card.rarity.toLowerCase() === 'uncommon')

const commonTransforms = transforms.filter(card => card.rarity.toLowerCase() === 'common')
const uncommonTransforms = transforms.filter(card => card.rarity.toLowerCase() === 'uncommon')


/*
https://magic.wizards.com/en/articles/archive/feature/innistrad-crimson-vow-product-overview-2021-10-28
Each Draft Booster contains 15 Innistrad: Crimson Vow cards, including one showcase eternal night basic land and at least two double-faced cards in every pack!

1x Double- or single-faced rare or mythic rare
1x Double- or single-faced uncommon
2x Single-faced uncommons
1x Double-faced common
9x Single-faced commons
*/
export function buildSamplePack() {
  const pack = [];
  pack.push(getRareSlot());

  const hasRareTransform = pack[0].flip_image !== null;
  // If we don't have a transform card at the rare/mythic slot, we will pull from the uncommon transforms.
  if (!hasRareTransform) {
    pack.push(getRandomFromSet(uncommonTransforms));
  } else {
    pack.push(getRandomFromSet(uncommons));
  }

  // guaranteed 2 regular uncommons
  for (let i = 0; i < 2; i++) {
    pack.push(getRandomFromSet(uncommons));
  }

  // guaranteed 1 transform common
  pack.push(getRandomFromSet(commonTransforms));

  // guaranteed 9 regular commons
  for (let i = 0; i < 9; i++) {
    pack.push(getRandomFromSet(commons));
  }

  return pack;
}

function randomIndex(setSize) {
  return Math.floor(Math.random() * setSize);
}

function getRareSlot() {
  // Mythic is 1/8 chance
  if (Math.random() <= (1/8)) {
    return getRandomFromSet(mythics);
  } else {
    return getRandomFromSet(rares);
  }
}

function getRandomFromSet(set) {
  return set[randomIndex(set.length)];
}