class Restaurant extends HTMLElement {
    constructor() {
        super()
    }

    set detail(data) {
        this._detail = data
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="thumbnail">
                <img src="${this._detail.pictureId}" class="img-thumbnail" alt="Foto Restaurant ${this._detail.name}" />
            </div>
            <div class="header">
                <div class="title">
                    <h5>${this._detail.name}</h5>
                    <p>${this._detail.city}</p>
                </div>
                <div>
                    <i class="ph-fill ph-star"></i> <span>${this._detail.rating}</span>
                </div>
            </div>
            <div class="content">
                <p>${this._detail.description}</p>
            </div>
        `;
    }
}

customElements.define('restaurant-component', Restaurant)