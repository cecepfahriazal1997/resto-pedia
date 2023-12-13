class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div>
            <h1>RestoPedia</h1>
            <p id="subtitle">Semua Restaurant Nusantara Ada Disini.</p>
            <p id="description">Yuk! cari restaurant favoritmu.</p>
            <div class="search">
                <input type="text" class="form" placeholder="Cari restaurant disini..."></input>
                <span class="ph ph-magnifying-glass"></span>
            </div>
        </div>
        `;
    }
}

customElements.define('hero-component', Hero);
