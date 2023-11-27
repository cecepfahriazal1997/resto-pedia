Feature('Liking Restaurant');
const assert = require('assert');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#list-restaurant');
    I.see('Belum ada restaurant favoritmu. Silahkan tambahkan restaurant favorite', '.empty-state');
});

Scenario('liking one restaurant', async({ I }) => {
    I.see('Belum ada restaurant favoritmu. Silahkan tambahkan restaurant favorite', '.empty-state');
    I.amOnPage('/');
    
    I.seeElement('restaurant-component a');
    const firstRestaurant = locate('restaurant-component a .header .title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#favorite');
    I.click('#favorite');
    
    I.amOnPage('/#/favorite');
    I.seeElement('restaurant-component');
    
    const likedMovieTitle = await I.grabTextFrom('restaurant-component a .header .title');
    assert.strictEqual(firstRestaurantTitle, likedMovieTitle);
});