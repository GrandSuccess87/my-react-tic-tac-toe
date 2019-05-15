export default class BoardState {
  board = ["","","","","","","","",""];

  mark = (index, symbol) => {
    this.board[index] = symbol;
  }

  currentBoard = () => {
    return this.board;
  }
}
