import Rules from './Rules';
import Board from '../board/board';

describe('Rules for the game', () => {
  describe('Winner in a row', () => {
    it('checks for 3 Xs in first row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(0, "X");
      boardState.mark(1, "X");
      boardState.mark(2, "X");

      expect(rules.checkFirstRow(boardState.currentBoard())).toEqual("X WON");

    });

    it('checks for 3 Os in first row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(0, "O");
      boardState.mark(1, "O");
      boardState.mark(2, "O");

      expect(rules.checkFirstRow(boardState.currentBoard())).toEqual("O WON");

    });

    it('checks for 3 Xs in second row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(3, "X");
      boardState.mark(4, "X");
      boardState.mark(5, "X");

      expect(rules.checkSecondRow(boardState.currentBoard())).toEqual("X WON");
    });

    it('checks for 3 Os in second row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(3, "O");
      boardState.mark(4, "O");
      boardState.mark(5, "O");

      expect(rules.checkSecondRow(boardState.currentBoard())).toEqual("O WON");

    });

    it('checks for 3 Xs in last row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(6, "X");
      boardState.mark(7, "X");
      boardState.mark(8, "X");

      expect(rules.checkThirdRow(boardState.currentBoard())).toEqual("X WON");
    });

    it('checks for 3 Os in last row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(6, "O");
      boardState.mark(7, "O");
      boardState.mark(8, "O");

      expect(rules.checkThirdRow(boardState.currentBoard())).toEqual("O WON");
    });

    it('checks that 3 Xs are not in the first row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(0, "X");
      boardState.mark(1, "X");
      boardState.mark(2, "O");

      expect(rules.checkRow(boardState.currentBoard())).toEqual("KEEP TRYING");
    });

    it('checks that 3 Os are not in the first row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(0, "O");
      boardState.mark(1, "O");
      boardState.mark(2, "X");

      expect(rules.checkRow(boardState.currentBoard())).toEqual("KEEP TRYING");
    });

    it('checks that 3 Xs are not in the second row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(3, "X");
      boardState.mark(4, "X");
      boardState.mark(5, "O");

      expect(rules.checkRow(boardState.currentBoard())).toEqual("KEEP TRYING");
    });

    it('checks that 3 Os are not in the third row', () => {
      let rules = new Rules();
      let boardState = new Board();

      boardState.mark(6, "O");
      boardState.mark(7, "O");
      boardState.mark(8, "X");

      expect(rules.checkRow(boardState.currentBoard())).toEqual("KEEP TRYING");
    });
  });
});
