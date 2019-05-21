import Board from './board';

describe('Updates board', () => {
  it('Places a X symbol on current board', () => {
    let boardState = new Board();

    boardState.mark(3, "X");

    expect(boardState.currentBoard()).toEqual(["","","","X","","","","",""]);
  });

  it('Places an O symbol on current board', () => {
    let boardState = new Board();

    boardState.mark(7, "O");

    expect(boardState.currentBoard()).toEqual(["","","","","","","","O",""]);
  });

  it('Places no symbol on current board', () => {
    let boardState = new Board();

    boardState.mark("");

    expect(boardState.currentBoard()).toEqual(["","","","","","","","",""]);
  });
});
