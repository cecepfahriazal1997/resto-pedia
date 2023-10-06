class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="border-footer"></div>
            <div class="content-footer">Copyright 	&#169; 2023 - Cecep Rokani All Rights Reserved.</div>`;
    }
}

customElements.define('footer-component', Footer)