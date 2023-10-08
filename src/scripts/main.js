import data from '../public/data/DATA.json';
export default class Main {
    static main() {
        // initialize menu navbar
        this.initMenu()

        // initialize list restaurant
        this.initList('horizontal', 'top', 4)
        this.initList('horizontal','nearby', 4)
        this.initList('vertical','all')
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

    static initList(direction, type, limit=null) {
        let listRestaurant = ''
        if (direction == 'vertical') {
            listRestaurant = document.querySelector('list-vertical-component')
        } else {
            listRestaurant = document.querySelectorAll('list-horizontal-component')
        }
        let index = 0

        let tmpData = {lists: []}
        if (type == 'top') {
            tmpData.title = "Top Rated"
        } else if (type == 'nearby') {
            tmpData.title = "Nearby"
            index = 1
        } else if (type == 'all') {
            tmpData.title = "Semua Restaurant"
        }

        let pos = 0
        for (const dataRestaurant of data.restaurants) {
            if (limit == pos) { // set limit of data
                break
            }
            tmpData.lists.push(dataRestaurant)
            pos++
        }

        if (direction == 'horizontal') {
            listRestaurant[index].listItem = tmpData
        } else {
            listRestaurant.listItem = tmpData
        }
    }
}