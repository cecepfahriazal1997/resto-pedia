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
            <p id="subtitle">Daftar restaurant dari berbagai kota berbintang.</p>
            <p>Yuk! cari restaurant favoritmu disini.</p>
        </div>
        `;
    }
}

customElements.define('hero-component', Hero)