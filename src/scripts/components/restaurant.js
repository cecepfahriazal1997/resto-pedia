import CONFIG from '../globals/config';

class Restaurant extends HTMLElement {
    set detail(data) {
        this._detail = data;
        this.render();
    }

    render() {
        this.innerHTML = `
            <a href="#/detail/${this._detail.id}">
                <div class="thumbnail">
                    <img data-src="${CONFIG.API_BASE_URL_IMAGE_SMALL}${this._detail.pictureId}" class="lazyload img-thumbnail" alt="Foto Restaurant ${this._detail.name}" />
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
            </a>
        `;
    }
}

customElements.define('restaurant-component', Restaurant);
