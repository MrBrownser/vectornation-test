class Pixel {
  constructor(color) {
    this._color = color || 'white';
  }

  get color() {
    return this._color;
  }
}

module.exports = { Pixel };


/**
 * An Image will be a multidimensional Array.
 * Image(1 x 1) = [Pixel];
 * Image(2 x 2) = [[Pixel, Pixel], [Pixel, Pixel]];
 */