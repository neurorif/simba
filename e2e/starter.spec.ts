import {device, expect} from 'detox';

describe('starter', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Hello World'))).toBeVisible();
    await expect(element(by.text('4'))).toBeVisible();
    await expect(element(by.text('Hi!'))).toBeVisible();
  });
});
