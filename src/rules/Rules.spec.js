import Rules from './Rules';
import BoardState from '../boardState/boardState';

describe('Rules for the game', () => {
  test('it is false', () => {
    expect(0).toBe(0);
  });

  describe('Winner in a row', () => {
    test('3 Xs in first row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(0, "X");
      boardState.mark(1, "X");
      boardState.mark(2, "X");

      expect(rules.checkFirstRow(boardState.currentBoard())).toEqual("X WON");

    });

    test('3 Os in first row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(0, "O");
      boardState.mark(1, "O");
      boardState.mark(2, "O");

      expect(rules.checkFirstRow(boardState.currentBoard())).toEqual("O WON");

    });

    test('3 Xs in second row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(3, "X");
      boardState.mark(4, "X");
      boardState.mark(5, "X");

      expect(rules.checkSecondRow(boardState.currentBoard())).toEqual("X WON");
    });

    test('3 Os in a second row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(3, "O");
      boardState.mark(4, "O");
      boardState.mark(5, "O");

      expect(rules.checkSecondRow(boardState.currentBoard())).toEqual("O WON");

    });

    test('3 Xs in last row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(6, "X");
      boardState.mark(7, "X");
      boardState.mark(8, "X");

      expect(rules.checkThirdRow(boardState.currentBoard())).toEqual("X WON");
    });

    test('3 Os in last row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(6, "O");
      boardState.mark(7, "O");
      boardState.mark(8, "O");

      expect(rules.checkThirdRow(boardState.currentBoard())).toEqual("O WON");
    });

    test('3 Xs not in the first row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(0, "X");
      boardState.mark(1, "X");
      boardState.mark(2, "O");

      expect(rules.checkRow(boardState.currentBoard())).toEqual("KEEP TRYING");
    });

    test('3 Os not in the first row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(0, "O");
      boardState.mark(1, "O");
      boardState.mark(2, "X");

      expect(rules.checkRow(boardState.currentBoard())).toEqual("KEEP TRYING");
    });

    test('3 Xs not in the second row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(3, "X");
      boardState.mark(4, "X");
      boardState.mark(5, "O");

      expect(rules.checkRow(boardState.currentBoard())).toEqual("KEEP TRYING");
    });

    test('3 Os not in the third row', () => {
      let rules = new Rules();
      let boardState = new BoardState();

      boardState.mark(6, "O");
      boardState.mark(7, "O");
      boardState.mark(8, "X");

      expect(rules.checkRow(boardState.currentBoard())).toEqual("KEEP TRYING");
    });
  });
});
