import logo from '../../public/images/logo.png'

class NavBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <a class="icon" href="/">
                <img src="${logo}" />
            </a>
            <ul class="nav">
                <li><a href="/" class="nav-link active">Home</a></li>
                <li><a href="#" class="nav-link">Favorite</a></li>
                <li><a href="https://github.com/cecepfahriazal1997" class="nav-link" target="_blank">About Us</a></li>
            </ul>
        </div>`;
    }
}

customElements.define('nav-bar-component', NavBar)