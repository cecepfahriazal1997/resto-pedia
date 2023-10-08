class Hero extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div>
            <h1>RestoPedia</h1>
            <p id="subtitle">Semua Restaurant Nusantara Ada Disini.</p>
            <p id="description">Yuk! cari restaurant favoritmu.</p>
        </div>
        `;
    }
}

customElements.define('hero-component', Hero)