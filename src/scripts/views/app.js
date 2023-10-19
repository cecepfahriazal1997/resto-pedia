import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ navbar, hero, content }) {
        this._navbar = navbar;
        this._hero = hero;
        this._content = content;

        this._eventListenerScrolling = () => {
            var menuSticky = document.getElementById("nav-bar");
            var scroll = window.scrollY

            if (scroll >= 450) {
                menuSticky.classList.add("sticky");
            } else {
                menuSticky.classList.remove("sticky");
            }
        }
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];

        if (url == '/') {
            this._navbar.classList.remove('sticky')
            this._hero.innerHTML = '<hero-component></hero-component>';
            window.document.addEventListener('scroll', this._eventListenerScrolling);
        } else {
            this._hero.innerHTML = ''
            this._navbar.classList.add('sticky')
            window.document.removeEventListener('scroll', this._eventListenerScrolling);
        }

        window.scrollTo(0,0)
        this._content.innerHTML = await page.render();
        await page.finishRender();
    }
}

export default App;