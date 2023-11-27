class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
            <img class="lazyload" data-src="/images/hero-image-large.jpg" width="100%" alt="hero-image-large" alt="" />
        </picture>
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
