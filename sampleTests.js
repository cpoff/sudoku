// sample of Sudoku behavior descriptions, partially Mocha-fied

describe("Game", function() {
	describe('game methods', function() {

		describe('remaining', function() {
			it('should return the number of squares left to solve', function() {
				expect(game.remaining()).to.be.a('number');
				expect(game.remaining()).to.be.less.than(81);
				expect(game.remaining()).to.be.more.than(-1);

			})
		})
		describe('finished', function() {
			it('should check the sum of all rows, cols, block to ensure 45')
		})
		describe('load', function() {
			it('should ingest a string')
			it('should return the number of squares still to solve')
			it('should fill in some squares from the string')
		})
		describe('solve', function() {
			it('should fill every square with the right digits')
		})
		describe('show', function() {
			it('should produce a string which describes the board')
		})
	})


	Square
		get
			should return the digit in a given square
		possibilities
			should determine what possibilities remain for a square

		update square:
			mark as square as done
			should remember change for other squares to use
		locateRow
			should return the row for a given square
		locateCol
			should return the col for a given square
		locateBlock
			should return the block for a given square

	Row/Col/Block
		lookForDigits
			should find, for a given square, which digits are in the same row/col/Block
		lookForSquares
			should find, for a given square, the other squares in the same row/col/Block
		needed
			should determine what digits are missing from a row/col/Block

