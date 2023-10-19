import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ navbar, hero, content }) {
        this._navbar = navbar;
        this._hero = hero;
        this._content = content;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];

        if (url == '/') {
            this._navbar.classList.remove('sticky')
            this._hero.innerHTML = '<hero-component></hero-component>';
            this._toggleStickyMenu()
        } else {
            this._hero.innerHTML = ''
            this._navbar.classList.add('sticky')
        }

        this._content.innerHTML = await page.render();
        await page.finishRender();
    }

    _toggleStickyMenu() {
        var menuSticky = document.getElementById("nav-bar");
        window.document.addEventListener('scroll', function () {
            var scroll = window.scrollY

            if (scroll >= 450) {
                menuSticky.classList.add("sticky");
            } else {
                menuSticky.classList.remove("sticky");
            }
        });
    }
}

export default App;