export default class FakeComputer {
  constructor(symbol){
    this.symbol = symbol;
  }

  makeMove = async (board, humanPlayer) => {
    let move = 0;
    board.makeMark(move, this.symbol);
  }
}