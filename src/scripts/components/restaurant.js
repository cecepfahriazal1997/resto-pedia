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
                <li><a href="javascript:void(0)" class="nav-link active">Home</a></li>
                <li><a href="javascript:void(0)" class="nav-link">Favorite</a></li>
                <li><a href="javascript:void(0)" class="nav-link">About Us</a></li>
            </ul>
        </div>`;
    }
}

customElements.define('restaurant-component', NavBar)