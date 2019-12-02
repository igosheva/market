import { Card } from './card';
import { data } from './data';

const cardList = document.querySelector('#card-list');

for (let i = 0; i < data.length; i++) {
  const card = new Card(cardList, data[i]);
  card.render();
}
