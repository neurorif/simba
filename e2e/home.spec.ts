import {device, expect, element} from 'detox';

describe('starter', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should play with the home screen', async () => {
    await expect(element(by.text('Hello World'))).toBeVisible();
    await expect(element(by.text('4'))).toBeVisible();
    await expect(element(by.text('Hi!'))).toBeVisible();
    await expect(element(by.text('0'))).toBeVisible();
    await element(by.id('increase')).tap();
    await expect(element(by.text('1'))).toBeVisible();
  });

  it('should list some of the pokemon', async () => {
    await expect(element(by.text('bulbasaur'))).toBeVisible();
    await expect(element(by.text('ivysaur'))).toBeVisible();
    await expect(element(by.text('venusaur'))).toBeVisible();
  });

  it('should mark a pokemon as favorite', async () => {
    await waitFor(element(by.id('pokemon-list')))
      .toBeVisible()
      .withTimeout(2000);
    const addFavoriteButton = element(by.id('pokemon-favorite-button')).atIndex(
      0,
    );
    await addFavoriteButton.tap();
    await expect(addFavoriteButton).toHaveLabel(
      device.getPlatform() === 'ios' ? 'Favorite' : 'FAVORITE',
    );
  });

  it('should unmark a pokemon as favorite after restarting the app', async () => {
    await device.launchApp({newInstance: true});
    await waitFor(element(by.id('pokemon-list')))
      .toBeVisible()
      .withTimeout(2000);
    const addFavoriteButton = element(by.id('pokemon-favorite-button')).atIndex(
      0,
    );
    await expect(addFavoriteButton).toHaveLabel(
      device.getPlatform() === 'ios' ? 'Favorite' : 'FAVORITE',
    );
    await addFavoriteButton.tap();
    await expect(addFavoriteButton).toHaveLabel(
      device.getPlatform() === 'ios' ? 'Add to favorite' : 'ADD TO FAVORITE',
    );
  });
});
