class Pixel {
  constructor(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }
}

module.exports = { Pixel };