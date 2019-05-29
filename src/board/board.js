export default class Board {
  currentSpots = ["","","","","","","","",""];

  makeMark = (index, symbol) => {
    this.currentSpots[index] = symbol;
  }

  marks = () => {
    return this.currentSpots;
  }
}
