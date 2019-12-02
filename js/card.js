import { Popup } from './popup';

export class Card {
    constructor(container, props) {
        this.name = props.name;
        this.cost = props.cost;
        this.text = props.text;
        this.container = container;
        this.card = null;
        this.showPopup = this.showPopup.bind(this);
    }

    template() {
        const templateString = `<div class="col-lg-6" style="margin-bottom: 20px;">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p>${this.cost}</p>
                <button href="#" id="showProduct" class="btn btn-primary">Все характеристики</button>
                <button href="#" id="buyProduct" class="btn btn-warning">В магазин</button>
              </div>
            </div>
          </div>`;
        let element = document.createElement("div");
        element.insertAdjacentHTML('beforeend', templateString.trim());
        return element.firstChild;
    }

    render() {
        this.card = this.template();
        this.container.appendChild(this.card);
        this.addListeners();
    }

    showPopup() {
        const popup = new Popup(this.text);
        popup.render();
    }

    addListeners() {
        this.card.querySelector("#showProduct").addEventListener('click', this.showPopup);
    }
}
