import ApiServices from '../../services/api-service';
import API_ENDPOINT from '../../globals/api-config';
import CONFIG from '../../globals/config';

import UrlParser from '../../routes/url-parser';

import FavoriteRestaurant from '../../utils/local-idb';

const Detail = {
    async render() {
        return `
        <div id="detail-restaurant" class="detail-restaurant"></div>
        `;
    },
    async finishRender() {
        const contain = document.querySelector('#detail-restaurant');
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const fetchData = await ApiServices.fetchData(API_ENDPOINT.DETAIL(url.id));
        if (!fetchData.error) {
            contain.innerHTML = await this._buildUIDetailData(fetchData.restaurant);
            await this._operationFavoriteButton(fetchData.restaurant);
        }
    },
    async _buildUIDetailData(data) {
        return `<a href="#/" class="button button-light btn-back"><i class="ph ph-arrow-left mr-2"></i><span>Kembali</span></a>
                <div class="thumbnail mb-3">
                    <img src="${CONFIG.API_BASE_URL_IMAGE_MEDIUM}${data.pictureId}"></img>
                    <div class="thumbnail-content">
                        <h1 class="mb-2">${data.name}</h1>
                        <div class="thumbnail-detail">
                            <div>
                                <div id="city"><i class="ph-fill ph-map-pin-line"></i> ${data.city}</div>
                                <div id="address">${data.address}</div>
                            </div>
                            <div><i class="ph-fill ph-star"></i> ${data.rating}</div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div style="display:flex; justify-content: space-between; width: 100%">
                        <div>
                            ${await this._buildUICategories(data.categories)}
                        </div>
                        <div class="action-control">
                            <button class="button button-primary button-circle" id="favorite"><i class="ph ph-heart f-3"></i></button>
                        </div>
                    </div>
                    <h3 class="mt-3 mb-3">Overview</h3>
                    <p class="mb-3" id="description">${data.description}</p>
                    <div class="menu mb-4">
                        ${await this._buildUIMenu(data.menus)}
                    </div>
                    ${await this._buildUIRating(data.customerReviews)}
                </div>`;
    },
    async _buildUICategories(listCategories) {
        let result = '';
        listCategories.forEach((element) => {
            result += `<div>${element.name}</div>`;
        });

        return `
        <div class="categories">
        ${result}
        </div>`;
    },
    async _buildUIMenu(listMenu) {
        // get list foods
        let containerFood = '<div class="empty-state mb-4">Daftar menu makanan tidak tersedia</div>';
        if (listMenu && listMenu.foods) {
            let listMenuFoods = '';
            listMenu.foods.forEach((element) => {
                listMenuFoods += `<div>${element.name}</div>`;
            });

            containerFood = `
            <div class="menu-child foods mb-4">
            ${listMenuFoods}
            </div>`;
        }

        // get list drinks
        let containerDrink = '<div class="empty-state">Daftar menu minuman tidak tersedia</div>';
        if (listMenu && listMenu.drinks) {
            let listMenuDrinks = '';
            listMenu.drinks.forEach((element) => {
                listMenuDrinks += `<div>${element.name}</div>`;
            });

            containerDrink = `
            <div class="menu-child foods mb-4">
            ${listMenuDrinks}
            </div>`;
        }

        return `
        <h3 class="mb-2"><i class="ph-fill ph-bowl-food mr-2"></i> Menu Makanan</h3>
        ${containerFood}
        <h3 class="mb-2"><i class="ph-fill ph-brandy mr-2"></i> Menu Minuman</h3>
        ${containerDrink}
        `;
    },
    async _buildUIRating(listRating) {
        let rating = '';
        let containerRating = '<div class="empty-state mb-4">Daftar menu makanan tidak tersedia</div>';
        if (listRating) {
            listRating.forEach((element) => {
                rating += `
                <div class="rating-child">
                    <div class="identity">
                        <img src="./images/user.png" />
                        <div>
                            <h4>${element.name}</h4>
                            <h5>${element.date}</h5>
                        </div>
                    </div>
                    <p>${element.review}</p>
                </div>`;
            });
            containerRating = `
            <div class="rating">
            ${rating}
            </div>`;
        }
        return `
        <h3 class="mb-2"><i class="ph-fill ph-star-half mr-2"></i> Review</h3>
        ${containerRating}
        `;
    },
    async _operationFavoriteButton(data) {
        const restaurant = await FavoriteRestaurant.findRestaurant(data.id);
        this._likeButton = document.querySelector('#favorite');

        // set active/non-active favorite
        this._toggleButtonFavorite(restaurant);
        this._likeButton.addEventListener('click', async () => {
            const restaurant = await FavoriteRestaurant.findRestaurant(data.id);
            if (restaurant) { // jika sudah menambahkan restaurant ke favorite
                await FavoriteRestaurant.deleteRestaurant(data.id); // hapus dari favorite
                this._toggleButtonFavorite(false);
            } else { // jika belum menambahkan restaurant ke favorite
                await FavoriteRestaurant.pustRestaurant(data);
                this._toggleButtonFavorite(true);
            }
        });
    },
    async _toggleButtonFavorite(isActive = false) {
        if (isActive) {
            this._likeButton.innerHTML = '<i class="ph-fill ph-heart f-3"></i>';
        } else {
            this._likeButton.innerHTML = '<i class="ph ph-heart f-3"></i>';
        }
    },
};

export default Detail;
