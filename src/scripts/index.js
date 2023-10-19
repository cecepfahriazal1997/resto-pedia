import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'

// Import Another Components
import './components/nav-bar.js'
import './components/hero.js'
import './components/list-horizontal.js'
import './components/list-vertical.js'
import './components/footer.js'

import App from './views/app'

const app = new App({
    navbar: document.querySelector('#nav-bar'),
    hero: document.querySelector('#hero'),
    content: document.querySelector('#content')
})

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    // swRegister();
    // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
    // Initialize footer tools
    // FooterToolsInitiator.init({
    //     subscribeButton: document.querySelector('#subscribePushNotification'),
    //     unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
    // });
});