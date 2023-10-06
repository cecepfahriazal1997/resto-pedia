// import logo from '../../public/images/heros/hero-image_2.jpg'

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
            <p>Daftar restaurant dari berbagai kota dengan bintang 1 sampai 5.</p>
            <p>Yuk! cari restaurant favoritmu disini.</p>
        </div>
        `;
    }
}

customElements.define('hero-section', Hero)