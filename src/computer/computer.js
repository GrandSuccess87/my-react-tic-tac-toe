import seedrandom from 'seedrandom';
import PhoenixApi from '../services/phoenixAPI';

export default class Computer {
  constructor(symbol){
    this.symbol = symbol;
  }

  makeMove = (board, seed) => {
    const random = new seedrandom(seed);
    let available_moves = board.availableIndices();
    let random_range = available_moves.length;
    let randomNumInRange = Math.floor(random() * random_range);
    let randomMove = available_moves[randomNumInRange];

    board.makeMark(randomMove, this.symbol);
  }

  makeMoveFromEndpoint = async (board, humanPlayer) => {
    let move = await PhoenixApi.getComputerMove(board.marks(), this.symbol, humanPlayer);
    board.makeMark(move, this.symbol)
  }
}
