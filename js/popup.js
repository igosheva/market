export class Popup {
    constructor(text = '') {
        this.text = text;
        this.popup = null;
        this.close = this.close.bind(this);
        this.toEscPress = this.toEscPress.bind(this);
    }

    template() {
        const templateString = `<div class="popup">
            <div class="popup__box">
                <button class="popup__close" type="button">x</button>
                <div class="popup__body">${this.text}</div>
            </div>
        </div>`;
        let element = document.createElement("div");
        element.insertAdjacentHTML('beforeend', templateString.trim());
        return element.firstChild;
    }

    render() {
        this.popup = this.template();
        document.querySelector('body').appendChild(this.popup);
        this.addListeners();
    }

    close() {
        this.popup.remove();
        this.removeListeners();
    }

    toEscPress(event) {
        if (event.keyCode === 27) {
            event.preventDefault();
            this.close();
            this.removeListeners();
        }
    }

    addListeners() {
        this.popup.querySelector(".popup__close").addEventListener('click', this.close);
        document.querySelector("body").addEventListener('keydown', this.toEscPress);
    }

    removeListeners() {
        this.popup.querySelector(".popup__close").removeEventListener('click', this.close);
        document.querySelector("body").removeEventListener('keydown', this.toEscPress);
    }
}
