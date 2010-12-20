//= require "public/javascripts/Song.js"
describe('Song', function () {
  it('should have a passing test', function() {
      expect(true).toEqual(true);
  });

  describe('nested describe', function () {
     it('should also have a passing test', function () {
        expect(true).toEqual(true);
     });
  });
});