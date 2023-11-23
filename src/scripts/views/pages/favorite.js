import FavoriteRestaurant from '../../utils/local-idb';

const Favorite = {
    async render() {
        return `
        <div id="list-restaurant" class="bg-light" style="min-height: 100vh">
        <list-vertical-component></list-vertical-component>
        </div>`;
    },
    async finishRender() {
        const restaurant = await FavoriteRestaurant.fetchAllRestaurant();
        const mainContainer = document.querySelector('#list-restaurant');
        const restaurantContainer = document.querySelector('list-vertical-component');

        if (restaurant.length > 0) {
            const data = {
                title: 'Favorite Restaurants',
                lists: restaurant,
            };

            restaurantContainer.listItem = data;
        } else {
            mainContainer.innerHTML = `
            <div class="p-4"></div>
            <div class="container text-center p-4 text-muted">Belum ada restaurant favoritmu.<br>Silahkan tambahkan restaurant favorite</div>
            `;
        }
    },
};

export default Favorite;
