const assert = require('assert');
const expect = require('chai').expect;

const { Pixel } = require('../index');

describe('Pixel', function() {
  it('Can be black', function() {
    const aPixel = new Pixel('black');
    expect(aPixel.color).to.equal('black');
  });

  it('Can be white', function() {
    const aPixel = new Pixel('white');
    expect(aPixel.color).to.equal('white');
  });
});
