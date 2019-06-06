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

describe('Available indices of the board', ()  => {
  it('are 0-8 for empty board', () => {
    let board = new Board();

    expect(board.availableIndices()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('returns a partially filled board', () => {
    let board = new Board();
    board.currentSpots = ["X", "O", "X", "O", "", "", "", "", ""];

    expect(board.availableIndices()).toEqual([4, 5, 6, 7, 8]);
  })

  it('do not exist for full board', () => {
    let board = new Board();
    board.currentSpots = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

    expect(board.availableIndices()).toEqual([]);
  })

});

