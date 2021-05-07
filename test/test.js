const assert = require('assert');
const expect = require('chai').expect;

const { Image, mergePixels, Pixel } = require('../index');

describe('Pixel', function() {
  describe('Creation', function() {
    it('Can be black', function() {
      const aPixel = new Pixel('black');
      expect(aPixel.color).to.equal('black');
    });

    it('Can be white', function() {
      const aPixel = new Pixel('white');
      expect(aPixel.color).to.equal('white');
    });

    it('Should have always a color', function() {
      const aPixel = new Pixel();
      expect(aPixel.color).to.equal('white');
    });
  });
  describe('Merging', function() {
    it('Black & Black is Black', function() {
      expect(mergePixels(new Pixel('black'), new Pixel('black'))).to.equal('black');
    });
    it('Black & White is Black', function() {
      expect(mergePixels(new Pixel('black'), new Pixel('white'))).to.equal('black');
    });
    it('White & Black is Black', function() {
      expect(mergePixels(new Pixel('white'), new Pixel('black'))).to.equal('black');
    });
    it('White & White is White', function() {
      expect(mergePixels(new Pixel('white'), new Pixel('white'))).to.equal('white');
    });
  });
});

describe('Image', function() {
  describe('Creation', function() {
    it('Can create a 1 pixel squared image', function() {
      const aPixel = new Pixel('black');
      const anImage = new Image([aPixel]);
      expect(anImage.size).to.deep.equal([1,1]);
    });

    it('Can create a 2x2 pixels (4 tiles) squared image', function() {
      const anImage = new Image([
        [new Pixel(), new Pixel()],
        [new Pixel(), new Pixel()],
      ]);
      expect(anImage.size).to.deep.equal([2,2]);
    });

    it('Can create a vertical Image', function() {
      const anImage = new Image([
        [new Pixel(), new Pixel()],
        [[new Pixel(), new Pixel('black')],[new Pixel(), new Pixel()], new Pixel()],
        [new Pixel(), new Pixel()],
        [new Pixel('black'), new Pixel()],
      ]);
      expect(anImage.size).to.deep.equal([2,4]);
    });
  });
});
