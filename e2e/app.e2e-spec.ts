import { browser, element, by } from 'protractor';

describe('first protractor test', function() {
  it('should get title', function() {
    browser.get('http://localhost:4200/');

    expect(browser.getTitle()).toEqual('Docker App');
  });
});

describe('second protractor test', function() {
  it('should check some elements if they are presented', function() {
    browser.get('http://localhost:4200/');

    expect(element(by.css('.row')).isPresent()).toBe(true);
    expect(element(by.css('.col-md-3')).isPresent()).toBe(true);
    expect(element(by.css('.col-md-9')).isPresent()).toBe(true);
  });
});


