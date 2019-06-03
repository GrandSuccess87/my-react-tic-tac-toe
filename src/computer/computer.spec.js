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

  it("Places a random mark on an available space on the board", () => {
    let board = new Board();
    board.currentSpots = ["O","X","","","O","X","","O","X"];
    let computer = new Computer("X");
    let seed = "seed";

    computer.makeRandomMove(board, seed);

    expect(board.marks()).toEqual(["O","X","","X","O","X","","O","X"]);
  });

  it("Places a random mark on last available space on the board", () => {
    let board = new Board ();
    board.currentSpots = ["O","X","O","X","O","X","","O","X"];
    let computer = new Computer("X");
    let seed;

    computer.makeRandomMove(board, seed);

    expect(board.marks()).toEqual(["O","X","O","X","O","X","X","O","X"]);
  });

});
