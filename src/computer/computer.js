import seedrandom from 'seedrandom';

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
}
