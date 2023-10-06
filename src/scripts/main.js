export default class Main {
    static main() {
        document.addEventListener('DOMContentLoaded', () => {
            // set menu to sticky mode when scrolling
            var menuSticky = document.getElementById("nav-bar");
            window.document.addEventListener('scroll', function () {
                var scroll = window.scrollY

                if (scroll >= 450) {
                    menuSticky.classList.add("sticky");
                } else {
                    menuSticky.classList.remove("sticky");
                }
            });
        })
    }
}