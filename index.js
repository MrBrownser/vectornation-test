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
    if (this._image.length) {
      if (Array.isArray(this._image[0])) {
        return [this._image[0].length, this._image.length];
      } else {
        return [this._image.length, this._image.length];
      }
    } else {
      return 0;
    }
  }
}

module.exports = { Image, Pixel };
