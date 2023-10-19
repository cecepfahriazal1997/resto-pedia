import data from '../../../public/data/DATA.json';
const Dashboard = {
    async render() {
        return `<section id="list-restaurant">
            <list-horizontal-component></list-horizontal-component>
            <list-horizontal-component></list-horizontal-component>
            <list-vertical-component></list-vertical-component>
        </section>`
    },

    async finishRender() {
        this._initList('horizontal', 'top', 4)
        this._initList('horizontal','nearby', 4)
        this._initList('vertical','all')
    },
    async _initList(direction, type, limit=null) {
        let listRestaurant = ''
        if (direction == 'vertical') {
            listRestaurant = document.querySelector('list-vertical-component')
        } else {
            listRestaurant = document.querySelectorAll('list-horizontal-component')
        }
        let index = 0

        let tmpData = {lists: []}
        if (type == 'top') {
            tmpData.icon = "ph-star"
            tmpData.title = "Top Rated"
        } else if (type == 'nearby') {
            tmpData.icon = "ph-map-pin"
            tmpData.title = "Nearby"
            index = 1
        } else if (type == 'all') {
            tmpData.icon = ""
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

export default Dashboard