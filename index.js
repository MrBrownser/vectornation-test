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

  get width() {
    return this.size[0];
  }
  get height() {
    return this.size[1];
  }

  get image() {
    return this._image;
  }
}

function mergePixels(pixel1, pixel2) {
  if (pixel1.color === 'black' || pixel2.color === 'black') return new Pixel('black');
  return new Pixel('white');
}

function mergeImages(image1, image2) {
  let finalImage;
  if (image1.width === 1 && image1.height === 1 ) {
    finalImage = new Image([ mergePixels(image1.image[0], image2.image[0]) ]);
  }
  return finalImage;
}

module.exports = {
  Image,
  mergeImages,
  mergePixels,
  Pixel,
};
