import FavoriteRestaurant from "../src/scripts/utils/local-idb";
import FavoriteButton from "../src/scripts/utils/favorite-button";

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="action-favorite"></div>';
  };
  
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurant.addRestaurant({ id: 1 });
  });
  
  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });
  
  it('should display unlike widget when the restaurant has been liked', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {id: 1},
    });
 
    expect(document.querySelector('[aria-label="unlike"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {id: 1},
    });
 
    expect(document.querySelector('[aria-label="like"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {id: 1},
    });
    document.querySelector('[aria-label="unlike"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.fetchAllRestaurant()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#action-favorite'),
      restaurant: {id: 1},
    });
    // Hapus dulu restaurant dari daftar restaurant yang disukai
    await FavoriteRestaurant.deleteRestaurant(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
    document.querySelector('[aria-label="unlike"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.fetchAllRestaurant()).toEqual([]);
  });
});