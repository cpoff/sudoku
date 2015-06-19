Game math for board grid
column: modulus ('mod' or %), 10 mod 9 is 1 (look it up!)
row: divide by 9. square/9 then math.floor
block: square/3 math.floor then mod 3.


var possibleNums = [1,2,3,4,5,6,7,8,9];

//TEMPLATE
describe("Game", function() {
  describe("constructor", function() {
    it("function description here", function() {
      expect(Game.name).to.equal("blah");
    })
});

        
describe('remaining', function() {
    it('should return the number of squares left to solve', function() {
        expect(game.remaining()).to.be.a('number');
        expect(game.remaining()).to.be.less.than(81);
        expect(game.remaining()).to.be.more.than(-1);
    })
})


describe('confirm', function() {
  it('sum of completed row/col/block to be 45', function() {   
      expect(game.confirm.row()).to.equal.sum.of(45);
      expect(game.confirm.col()).to.equal.sum.of(45);
      expect(game.confirm.block()).to.equal.sum.of(45);
  })
});

-load (should ingest string, should fill in some squares from the string)

-solve (fill in every square with correct number)
describe('solve', function() {
  it('confirms all squares have been filled', function() { 
    expect(square.notFinished.length()).to.equal(0);
  })
});

-show, update square (mark as done, remember changes) DO NOT NEED!!
//describe('update', function() {
//  it('return value of given square', function() {   
//      expect(square.finished()).to.be.a('number');
//      expect(square.notFinished()).to.equal('.');
//    })
//});

-get (return digit in a given square):

describe('get', function() {
  it('return value of given square', function() {   
      expect(square.finished()).to.be.a('number');
      expect(square.notFinished()).to.equal('.');
    })
});

-needed (which numbers missing from row,col,block)
describe('neededRow', function() {
  it('return value of given square', function() {   
    expect(game.remaining.row()).to.be.within(-1, 10)
    })
});

-look for digits (know exact digits in same row/col/block)
-possibilities (which numbers are eligible)

-look (for a given square, find what numbers are already taken for row/col/block)
describe('Game', function() {
    describe('possibleNums', function() {
        it('lists the number(s) that are available to go into a square')  
            expect(squares.possibleNums()).to.be.lessThan(10)
            expect(squares.possibleNums()).to.be.moreThan(-1)
            expect(squares.possibleNums()).to.NOT.BE.ANYWHERE.ELSE.IN.THE.ROW()   
            expect(squares.possibleNums()).to.NOT.BE.ANYWHERE.ELSE.IN.THE.COL()   
            expect(squares.possibleNums()).to.NOT.BE.ANYWHERE.ELSE.IN.THE.BLOCK()   
//    expect(squares.possibleNums()).to.not.include.members(game.finished.row());
    })
});

-look for squares (know how many holes it needs to fill per row/col/block)
describe('Game', function() {
    describe('lookSquares', function() {
      it('return the number of unfinished squares remaining in row/col/block. nine squares per, so count the number fo "." instances')  
          expect(square.finished()).to.be.a('number');
          expect(square.notFinished()).to.equal('.');
    })
});
             
-locate row/col/block

describe('locateRow', function() {
  it('should return a row number within range 0-8', function() {
      expect(game.locateRow(squareNum)).to.be.a('number');
      expect(game.locateRow(17)).to.equal(1);
      expect(game.locateRow(0)).to.be.a(0);
      expect(game.locateRow(80)).to.be.a(8);
      expect(game.locateRow(82)).to.throw();
    })
});
  
*********
function locateRow(squareNum) {
      if (typeof squareNum !== 'number')
          throw false;
      if (squareNum>80)
          throw 'Square number is too big';
      if (squareNum<0)
          throw 'Square number is too small';    
      return Math.floor(squareNum/9)
}
*********************************************

  
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
