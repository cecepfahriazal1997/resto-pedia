import './restaurant.js'

class ListVertical extends HTMLElement {
    constructor() {
        super()
    }

    set listItem(item) {
        this._item = item
        this.render()
    }

    render() {
        // create container for list movie
        const container = document.createElement('div')
        container.classList.add('list')

        if (this._item && this._item.lists.length > 0) {
            this._item.lists.forEach(detail => {
                // init item movie from component
                const itemMovie = document.createElement('restaurant-component')
                itemMovie.detail = detail
                container.appendChild(itemMovie)
            });
        }

        this.innerHTML = `
            <div class="container">
                <div class="header">
                    <h1>${this._item.title}</h1>
                    <div>
                        <button class="button button-light"><i class="ph-fill ph-sliders"></i> Filter</button>
                    </div>
                </div>
                <div class="list-restaurant-vertical">
                    ${container.innerHTML}
                </div>
            </div>`;
    }
}

customElements.define('list-vertical-component', ListVertical)