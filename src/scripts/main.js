import data from '../public/data/DATA.json';
export default class Main {
    static main() {
        // initialize menu navbar
        this.initMenu()

        // initialize list restaurant
        this.initList('top', 4)
    }

    static initMenu() {
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

    static initList(type, limit) {
        const listRestaurant = document.querySelectorAll('list-horizontal-component')
        let index = 0

        const tmpData = []
        tmpData.title = "Top Rated"
        tmpData.lists = data.restaurants.splice(data.restaurants.length - limit, limit)
        listRestaurant[index].listItem = tmpData

        console.log(data.restaurants);
    }
}