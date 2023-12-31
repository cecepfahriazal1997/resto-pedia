import UrlParser from '../routes/url-parser';
import logo from '../../public/images/logo.png';

class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
        this._initEvent();
    }

    _initEvent() {
        const hamburgerButtonElement = document.querySelector('#menu');
        const drawerElement = document.querySelector('#drawer');
        const mainElement = document.querySelector('body');
        const listMenu = document.querySelectorAll('.nav-link');

        // initialize event for menu desktop
        for (const menu of listMenu) {
            menu.addEventListener('click', (event) => {
                for (const allMenu of listMenu) {
                    allMenu.classList.remove('active');
                }
                event.target.classList.toggle('active');
            });
        }

        // initialize event for menu mobile
        hamburgerButtonElement.addEventListener('keypress', (event) => {
            event.preventDefault();
            this._toggleSideBar(event, hamburgerButtonElement, drawerElement);
            window.scrollTo(0, 0);
        });

        hamburgerButtonElement.addEventListener('click', (event) => {
            event.preventDefault();
            this._toggleSideBar(event, hamburgerButtonElement, drawerElement);
        });

        mainElement.addEventListener('click', (event) => {
            // event.preventDefault();
            this._toggleSideBar(event, hamburgerButtonElement, drawerElement, 'nonactive');
        });
    }

    _toggleSideBar(event, hamburgerButtonElement, drawerElement, mode = 'toggle') {
        event.stopPropagation();
        if (mode === 'nonactive') {
            hamburgerButtonElement.classList.remove('active');
            drawerElement.classList.remove('open');
        } else {
            hamburgerButtonElement.classList.toggle('active');
            drawerElement.classList.toggle('open');
        }
    }

    render() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        this.innerHTML = `
        <div class="container">
            <div class="action-bar">
                <a name="logo" class="icon" href="/" aria-label="logo">
                    <img src="${logo}" width="44" height="44" alt="" />
                    <h1 id="title">RestoPedia</h1>
                </a>
                <button id="menu">
                    <span></span>
                </button>
            </div>
            <ul id="drawer" class="nav">
                <li><a href="#/" class="nav-link ${url === '/' ? 'active' : ''}">Home</a></li>
                <li><a href="#/favorite" class="nav-link ${url === '/favorite' ? 'active' : ''}">Favorite</a></li>
                <li><a href="#/about" class="nav-link ${url === '/about' ? 'active' : ''}">About</a></li>
            </ul>
        </div>`;
    }
}

customElements.define('nav-bar-component', NavBar);
