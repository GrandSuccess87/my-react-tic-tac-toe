export default class Board {
  currentSpots = ["1","2","3","4","5","6","7","8","9"];

  makeMark = (index, symbol) => {
    this.currentSpots[index] = symbol;
  }

  marks = () => {
    return this.currentSpots;
  }
}
