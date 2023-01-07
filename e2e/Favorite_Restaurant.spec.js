Feature('Favorite Restaurant');

Scenario('favorite one restaurant', ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 20);
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.waitForElement('#favoriteButton', 20);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
});

Scenario('not favorite one restaurant', ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 20);
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.waitForElement('#favoriteButton', 20);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.seeElement('#notFavoriteButton');
  I.click('#notFavoriteButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});

Scenario('add new reiview', ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 20);
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.waitForElement('#reviewer-name', 20);
  I.fillField('Name:', 'Ahmad');
  I.fillField('Description:', 'Harganya murah dan makanannya enak');
  I.click('#submit');

  I.seeInPopup('success');
});
