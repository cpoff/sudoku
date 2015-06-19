var fakeArray = [];
//    require('../fakearray.js');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

var possibleNums = [1,2,3,4,5,6,7,8,9];

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

describe('get', function() {
  it('return value of given square', function() {
      expect(square.finished()).to.be.a('number');
      expect(square.notFinished()).to.equal('.');
    })
});

describe('Game', function() {
    describe('possibleNums', function() {
        it('lists the number(s) that are available to go into a square')
            expect(squares.possibleNums()).to.be.lessThan(10)
            expect(squares.possibleNums()).to.be.moreThan(-1)
            expect(squares.possibleNums()).to.NOT.BE.ANYWHERE.ELSE.IN.THE.ROW()
            expect(squares.possibleNums()).to.NOT.BE.ANYWHERE.ELSE.IN.THE.COL()
            expect(squares.possibleNums()).to.NOT.BE.ANYWHERE.ELSE.IN.THE.BLOCK()
    })
});

describe('Game', function() {
    describe('lookSquares', function() {
      it('return the number of unfinished squares remaining in row/col/block.')
          expect(square.finished()).to.be.a('number');
          expect(square.notFinished()).to.equal('.');
    })
});

describe('locateRow', function() {
  it('should return a row number within range 0-8. based on math', function() {
      expect(game.locateRow(squareNum)).to.be.a('number');
      expect(game.locateRow(17)).to.equal(1);
      expect(game.locateRow(0)).to.be.a(0);
      expect(game.locateRow(80)).to.be.a(8);
      expect(game.locateRow(82)).to.throw();
    })
});


//---------------------------
//describe('The post-pop array length', function() {
//    it('should return the new array length', function() {
//        expect(fakeArray.length).to.equal(5);
//    });
//});
//
//describe('Populated array', function() {
//        it('array should have contents', function() {
//        expect(fakeArray).to.not.be.empty;
//  });
//});
//
//describe('Contents of the array items', function() {
//        it('should all be integers', function() {
//        expect(fakeArray).to.not.contain.a('string');
//  })
//});
