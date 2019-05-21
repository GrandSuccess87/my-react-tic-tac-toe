export default class Board {
  currentSpot = ["","","","","","","","",""];

  mark = (index, symbol) => {
    this.currentSpot[index] = symbol;
  }

  currentBoard = () => {
    return this.currentSpot;
  }
}
