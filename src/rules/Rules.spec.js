import Rules from './Rules';
import Board from '../board/board';

describe('Rules for the game', () => {
  describe('Winner in a row', () => {
    it('checks for 3 Xs in first row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(0, "X");
      board.makeMark(1, "X");
      board.makeMark(2, "X");

      expect(rules.checkFirstRow(board.marks())).toEqual("X WON");

    });

    it('checks for 3 Os in first row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(0, "O");
      board.makeMark(1, "O");
      board.makeMark(2, "O");

      expect(rules.checkFirstRow(board.marks())).toEqual("O WON");

    });

    it('checks for 3 Xs in second row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(3, "X");
      board.makeMark(4, "X");
      board.makeMark(5, "X");

      expect(rules.checkSecondRow(board.marks())).toEqual("X WON");
    });

    it('checks for 3 Os in second row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(3, "O");
      board.makeMark(4, "O");
      board.makeMark(5, "O");

      expect(rules.checkSecondRow(board.marks())).toEqual("O WON");

    });

    it('checks for 3 Xs in last row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(6, "X");
      board.makeMark(7, "X");
      board.makeMark(8, "X");

      expect(rules.checkThirdRow(board.marks())).toEqual("X WON");
    });

    it('checks for 3 Os in last row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(6, "O");
      board.makeMark(7, "O");
      board.makeMark(8, "O");

      expect(rules.checkThirdRow(board.marks())).toEqual("O WON");
    });

    it('checks that 3 Xs are not in the first row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(0, "X");
      board.makeMark(1, "X");
      board.makeMark(2, "O");

      expect(rules.checkRow(board.marks())).toEqual("KEEP TRYING");
    });

    it('checks that 3 Os are not in the first row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(0, "O");
      board.makeMark(1, "O");
      board.makeMark(2, "X");

      expect(rules.checkRow(board.marks())).toEqual("KEEP TRYING");
    });

    it('checks that 3 Xs are not in the second row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(3, "X");
      board.makeMark(4, "X");
      board.makeMark(5, "O");

      expect(rules.checkRow(board.marks())).toEqual("KEEP TRYING");
    });

    it('checks that 3 Os are not in the third row', () => {
      let rules = new Rules();
      let board = new Board();

      board.makeMark(6, "O");
      board.makeMark(7, "O");
      board.makeMark(8, "X");

      expect(rules.checkRow(board.marks())).toEqual("KEEP TRYING");
    });
  });
});
