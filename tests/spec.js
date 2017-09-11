describe('your UI automated test', function() {
    it('should navigate to angular.io site and check page title', function() {
      browser.get('https://angular.io/');
      expect(browser.getTitle()).toEqual('Angular');
    });
});