import Board from './board';

describe('Marking the board', () => {
  it('places a X symbol on current board', () => {
    let board = new Board();

    board.makeMark(3, "X");

    expect(board.marks()).toEqual(["1","2","3","X","5","6","7","8","9"]);
  });

  it('places an O symbol on current board', () => {
    let board = new Board();

    board.makeMark(7, "O");

    expect(board.marks()).toEqual(["1","2","3","4","5","6","7","O","9"]);
  });

  it('places no symbol on current board', () => {
    let board = new Board();

    board.makeMark("");

    expect(board.marks()).toEqual(["1","2","3","4","5","6","7","8","9"]);
  });
});
