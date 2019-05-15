import BoardState from './boardState';

describe('it is false', () => {
  test('0 is false', () => {
    expect(0).toBe(0);
  });

  describe('wins from board', () => {
    test('X symbol on current board', () => {
      let boardState = new BoardState();
      boardState.mark(3, "X");
      expect(boardState.currentBoard()).toEqual(["","","","X","","","","",""]);
    });

    test('O symbol on current board', () => {
      let boardState = new BoardState();
      boardState.mark(7, "O");
      expect(boardState.currentBoard()).toEqual(["","","","","","","","O",""]);
    });

    test('no symbol on current board', () => {
      let boardState = new BoardState();
      boardState.mark("");
      expect(boardState.currentBoard()).toEqual(["","","","","","","","",""]);
    });
  });
});
