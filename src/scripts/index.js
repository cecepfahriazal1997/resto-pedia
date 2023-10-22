import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

// Import Another Components
import './components/nav-bar';
import './components/hero';
import './components/list-horizontal';
import './components/list-vertical';
import './components/footer';

import swRegister from './utils/sw-register';

import App from './views/app';

const app = new App({
    navbar: document.querySelector('#nav-bar'),
    hero: document.querySelector('#hero'),
    content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
