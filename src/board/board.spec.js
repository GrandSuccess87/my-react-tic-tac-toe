import Board from './board';

describe('Marking the board', () => {
  it('places a X symbol on current board', () => {
    let board = new Board();

    board.makeMark(3, "X");

    expect(board.marks()).toEqual(["","","","X","","","","",""]);
  });

  it('places an O symbol on current board', () => {
    let board = new Board();

    board.makeMark(7, "O");

    expect(board.marks()).toEqual(["","","","","","","","O",""]);
  });

  it('places no symbol on current board', () => {
    let board = new Board();

    board.makeMark("");

    expect(board.marks()).toEqual(["","","","","","","","",""]);
  });
});
