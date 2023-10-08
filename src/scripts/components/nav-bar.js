import logo from '../../public/images/logo.png'

class NavBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
        this._initEvent()
    }

    _initEvent() {
        const hamburgerButtonElement = document.querySelector("#menu");
        const drawerElement = document.querySelector("#drawer");
        const mainElement = document.querySelector("body");
        const listMenu = document.querySelectorAll(".nav-link");

        // initialize event for menu desktop
        for (const menu of listMenu) {
            menu.addEventListener('click', (event) => {
                for (const allMenu of listMenu) {
                    allMenu.classList.remove('active')
                }
                event.target.classList.toggle('active')
            })
        }

        // initialize event for menu mobile
        hamburgerButtonElement.addEventListener("click", (event) => {
            this._toggleActionBar(event, hamburgerButtonElement, drawerElement)
        });
        
        mainElement.addEventListener("click", (event) => {
            this._toggleActionBar(event, hamburgerButtonElement, drawerElement)
        });

        console.log(listMenu);
    }

    _toggleActionBar(event, hamburgerButtonElement, drawerElement) {
        hamburgerButtonElement.classList.toggle("active");
        drawerElement.classList.toggle("open");
        event.stopPropagation();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <div class="action-bar">
                <a class="icon" href="/">
                    <img src="${logo}" />
                    <h1 id="title">RestoPedia</h1>
                </a>
                <div id="menu">
                    <span></span>
                </div>
            </div>
            <ul id="drawer" class="nav">
                <li><a href="/" class="nav-link active">Home</a></li>
                <li><a href="#" class="nav-link">Favorite</a></li>
                <li><a href="https://github.com/cecepfahriazal1997" class="nav-link" target="_blank">About Us</a></li>
            </ul>
        </div>`;
    }
}

customElements.define('nav-bar-component', NavBar)