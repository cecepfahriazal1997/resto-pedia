import ApiServices from '../../services/api-service';
import API_ENDPOINT from '../../globals/api-config';

const Dashboard = {
    async render() {
        return `<section id="list-restaurant">
            <list-horizontal-component></list-horizontal-component>
            <list-horizontal-component></list-horizontal-component>
            <list-vertical-component></list-vertical-component>
        </section>`;
    },
    async finishRender() {
        this._initList('horizontal', 'top', 8);
        this._initList('horizontal', 'nearby', 6);
        this._initList('vertical', 'all');
    },
    async _initList(direction, type, limit = null) {
        const fetchData = await ApiServices.fetchData(API_ENDPOINT.LIST);

        if (fetchData.error) return false;

        let listRestaurant = '';
        if (direction === 'vertical') {
            listRestaurant = document.querySelector('list-vertical-component');
        } else {
            listRestaurant = document.querySelectorAll('list-horizontal-component');
        }
        let index = 0;

        const tmpData = { lists: [] };
        if (type === 'top') {
            tmpData.icon = 'ph-star';
            tmpData.title = 'Top Rated';
        } else if (type === 'nearby') {
            tmpData.icon = 'ph-map-pin';
            tmpData.title = 'Nearby';
            index = 1;
        } else if (type === 'all') {
            tmpData.icon = '';
            tmpData.title = 'Semua Restaurant';
        }

        let pos = 0;
        for (const dataRestaurant of fetchData.restaurants) {
            if (limit === pos) { // set limit of data
                break;
            }
            tmpData.lists.push(dataRestaurant);
            pos += 1;
        }

        if (direction === 'horizontal') {
            if (type === 'top') tmpData.lists.reverse();
            listRestaurant[index].listItem = tmpData;
        } else {
            listRestaurant.listItem = tmpData;
        }
        return true;
    },
};

export default Dashboard;
