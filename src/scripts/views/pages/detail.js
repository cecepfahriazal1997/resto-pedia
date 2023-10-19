import ApiServices from "../../services/api-service"
import API_ENDPOINT from "../../globals/api-config"

import UrlParser from '../../routes/url-parser'

const Detail = {
    async render() {
        return `
        <div class="detail-restaurant">
            <div class="thumbnail mb-3">
                <img src="https://restaurant-api.dicoding.dev/images/small/22"></img>
                <div class="thumbnail-content">
                    <h1 class="mb-2">Melting Pot</h1>
                    <div class="thumbnail-detail">
                        <div>
                            <div id="city"><i class="ph-fill ph-map-pin-line"></i> Makasar</div>
                            <div id="address">Jln. Pandeglang no 19</div>
                        </div>
                        <div><i class="ph-fill ph-star"></i> 3.4</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="categories">
                    <div>Italia</div>
                    <div>Modern</div>
                </div>
                <h3 class="mt-3 mb-3">Overview</h3>
                <p class="mb-3" id="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
                <div class="menu mb-4">
                    <h3 class="mb-2"><i class="ph-fill ph-bowl-food mr-2"></i> Menu Makanan</h3>
                    <div class="menu-child foods mb-4">
                        <div>Paket rosemary</div>
                        <div>Toastie salmon</div>
                    </div>
                    <h3 class="mb-2"><i class="ph-fill ph-brandy mr-2"></i> Menu Minuman</h3>
                    <div class="menu-child drinks mb-3">
                    <div>Es krim</div>
                    <div>Sirup</div>
                    </div>
                </div>
                <h3 class="mb-2"><i class="ph-fill ph-star-half mr-2"></i> Review</h3>
                <div class="rating">
                    <div class="rating-child">
                        <h4>Ahmad</h4>
                        <h5>13 November 2019</h5>
                        <p>Tidak rekomendasi untuk pelajar</p>
                    </div>
                </div>
            </div>
        </div>
        `
    },
    async finishRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const fetchData = await ApiServices.fetchData(API_ENDPOINT.DETAIL(url.id))

        if (!fetchData.error) {
            this._detail = fetchData.restaurant
        }
    }
}

export default Detail