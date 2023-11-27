import FavoriteRestaurant from "../src/scripts/utils/local-idb";
import FavoriteButton from "../src/scripts/utils/favorite-button";

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="action-favorite"></div>';
  };
  
  beforeEach(() => {
    addLikeButtonContainer();
  });

  // case if restaurant not been liked
  it('should show the like button when the restaurant has not been liked before', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {id: 1}
    });

    expect(document.querySelector('[aria-label="like"]')).toBeTruthy();
  });
  
  it('should not show the unlike button when the retaurant has not been liked before', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {id: 1}
    });

    expect(document.querySelector('[aria-label="unlike"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {id: 1}
    });

    // call trigger click
    document.querySelector('#favorite').dispatchEvent(new Event('click'));
    
    const restaurant = await FavoriteRestaurant.findRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {id: 1},
    });
    // Tambahkan restaurant dengan ID 1 ke daftar restaurant yang disukai
    await FavoriteRestaurant.addRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.fetchAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {},
    });
    document.querySelector('#favorite').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.fetchAllRestaurant()).toEqual([]);
  });
});