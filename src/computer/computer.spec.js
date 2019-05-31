import Board from '../board/board';
import Computer from './computer';

describe("Random Computer", () => {
  it("Places a random mark on an empty board", () => {
    let board = new Board ();
    let computer = new Computer("X");
    let seed = "seed";

    computer.makeRandomMove(board, seed);

    expect(board.marks()).toEqual(["","","","","","X","","",""]);
  });
});
