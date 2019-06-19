import Board from '../board/board';
import Computer from './computer';
import FakeComputer from './fakeComputer';

describe("Computer", () => {
  it("Chooses a move to place on board", () => {
    let fakeComputer = new FakeComputer('X'); 
    let board = new Board();

    fakeComputer.makeMove(board, 'O');

    expect(board.marks()).toEqual(["X","","","","","","","",""])
  });

});
