import FavoriteRestaurant from "../../utils/local-idb";

const Favorite = {
    async render() {
        return `
        <div id="list-restaurant">
        <list-vertical-component></list-vertical-component>
        </div>`
    },
    async finishRender() {
        const restaurant = await FavoriteRestaurant.fetchAllRestaurant();
        const restaurantContainer = document.querySelector('list-vertical-component');

        const data = {
            title: 'Favorite Restaurants',
            lists: restaurant
        }
        
        restaurantContainer.listItem = data
    }
}

export default Favorite