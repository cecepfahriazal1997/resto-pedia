import './restaurant.js'

class ListHorizontal extends HTMLElement {
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
            <h1>${this._item.title}</h1>
            <div class="list-restaurant">
                ${container.innerHTML}
            </div>`;
    }
}

customElements.define('list-horizontal-component', ListHorizontal)