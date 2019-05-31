import seedrandom from 'seedrandom';
export default class Computer {
  constructor(symbol){
    this.symbol = symbol;
  }

  makeRandomMove = (board, seed) => {
    const random = new seedrandom(seed);
    let randomMove = Math.floor(random() * 9);
    board.makeMark(randomMove, this.symbol);
  }
}
