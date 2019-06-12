import PhoenixApi from '../services/phoenixAPI';

export default class Computer {
  constructor(symbol){
    this.symbol = symbol;
  }

  makeMove = async (board, humanPlayer) => {
    let move = await PhoenixApi.getComputerMove(board.marks(), this.symbol, humanPlayer);
    board.makeMark(move, this.symbol);

  }
}
