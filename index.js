class Pixel {
  constructor(color) {
    this._color = color || 'white';
  }

  get color() {
    return this._color;
  }
}

class Image {
  constructor(initialImage) {
    this._image = initialImage;
  }

  get size() {
    return [this._image.length, this._image.length];
  }
}

module.exports = { Image, Pixel };


/**
 * An Image will be a multidimensional Array.
 * Image(1 x 1) = [Pixel];
 * Image(2 x 2) = [[Pixel, Pixel], [Pixel, Pixel]];
 */