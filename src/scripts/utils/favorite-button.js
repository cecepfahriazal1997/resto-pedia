import FavoriteRestaurant from './local-idb';

const FavoriteButton = {
    async init({ favoriteButtonContainer, restaurant }) {
        this._favoriteButtonContainer = favoriteButtonContainer;
        this._restaurant = restaurant;

        await this._renderButton();
    },
    async _renderButton() {
        const { id } = this._restaurant;

        if (await this.isRestaurantExists(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },
    async isRestaurantExists(id) {
        return FavoriteRestaurant.findRestaurant(id);
    },
    buildUIButtonFavoriteLike() {
        return '<button class="button button-primary button-circle" aria-label="like" id="favorite"><i class="ph ph-heart f-3"></i></button>';
    },
    buildUIButtonFavoriteLiked() {
        return '<button class="button button-primary button-circle" aria-label="unlike" id="favorite"><i class="ph-fill ph-heart f-3"></i></button>';
    },
    _renderLike() {
        this._favoriteButtonContainer.innerHTML = this.buildUIButtonFavoriteLike();

        const favoriteBtn = document.querySelector('#favorite');

        favoriteBtn.addEventListener('click', async () => {
            await FavoriteRestaurant.pustRestaurant(this._restaurant);
            this._renderButton();
        });
    },
    _renderLiked() {
        this._favoriteButtonContainer.innerHTML = this.buildUIButtonFavoriteLiked();

        const favoriteBtn = document.querySelector('#favorite');

        favoriteBtn.addEventListener('click', async () => {
            await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default FavoriteButton;
