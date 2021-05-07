const assert = require('assert');
const expect = require('chai').expect;

const {
  Image,
  mergeImages,
  mergePixels,
  Pixel,
} = require('../index');

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
      expect(mergePixels(new Pixel('black'), new Pixel('black')).color).to.equal('black');
    });
    it('Black & White is Black', function() {
      expect(mergePixels(new Pixel('black'), new Pixel('white')).color).to.equal('black');
    });
    it('White & Black is Black', function() {
      expect(mergePixels(new Pixel('white'), new Pixel('black')).color).to.equal('black');
    });
    it('White & White is White', function() {
      expect(mergePixels(new Pixel('white'), new Pixel('white')).color).to.equal('white');
    });
  });
});

describe('Image', function() {
  describe('Creation', function() {
    it('Can create a 1 pixel squared image', function() {
      const aPixel = new Pixel('black');
      const anImage = new Image([aPixel]);
      expect(anImage.size).to.deep.equal([1,1]);
      expect(anImage.width).to.equal(1);
      expect(anImage.height).to.equal(1);
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
      expect(anImage.width).to.equal(2);
      expect(anImage.height).to.equal(4);
    });

    it('Can retreive the whole image (1x1)', function() {
      const anImage = new Image([new Pixel('black')]);
      expect(anImage.image[0].color).to.equal('black');
    });

    it('Can retreive the whole image (2x2)', function() {
      const anImage = new Image([
        [new Pixel(), new Pixel('black')],
        [new Pixel('black'), new Pixel()],
      ]);
      expect(anImage.image[0][1].color).to.equal('black');
      expect(anImage.image[1][0].color).to.equal('black');
    });
  });

  describe('Merging SAME SIZE images', function() {
    it('Can merge 2 1x1 Images', function() {
      const firstImage = new Image([new Pixel()]);
      const secondImage = new Image([new Pixel('black')]);
      const merged = mergeImages(firstImage, secondImage);

      expect(merged instanceof Image).to.be.true;
      expect(merged.size).to.deep.equal([1,1]);
    });
  });
});
