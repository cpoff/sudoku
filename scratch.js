Game math for board grid
column: modulus ('mod' or %), 10 mod 9 is 1 (look it up!)
row: divide by 9. square/9 then math.floor
block: square/3 math.floor then mod 3.


//TEMPLATE
describe('Game', function() {
    describe('methods', function() {   
        
    })
});

describe('remaining', function() {
  it('should return number of squares left to solve', function() { 
    expect(game.remaining()).to.be.a('number');
    expect(game.remaining()).to.be.within(-1, 81)
  })
});

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

-show, update square (mark as done, remember changes)
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
describe('neededRow/Col/Block', function() {
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
*********

  
  
  expect(game.finished()).to.equal.sum.of(45);

--------------------------------------

describe('My fake array object', function() {
  describe('The pop method', function() {
    it('should return the final element', function() {
      assert.equal(fakeArray.pop(), 6);
    });
  });
});

describe('The post-pop array length', function() {
    it('should return the new array length', function() {
        expect(fakeArray.length).to.equal(5);
    });
});

describe('Populated array', function() {
        it('array should have contents', function() {
        expect(fakeArray).to.not.be.empty;
  });
});

describe('Contents of the array items', function() {
        it('should all be integers', function() {
        expect(fakeArray).to.not.contain.a('string');
  })
});

--------------------------------------
'158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'

lodash library for comparing sets (union, intersection, difference)

function numbersInRow(row#) --> digits
function numbersInRow(rowObj) --> digits
rowObj.numbers() --> digits

// Make 9 rows and remember them
var grid = {}


function Grid() {
    this.rows = []
    for (var i=0, i<2, ++i {     
        this.rows.push(new Row(i));
    })
}


var grid = {};
    grid.a = {grid:grid};
    grid.b = {grid:grid};
    grid.c = {grid:grid};
    grid.d = {grid:grid};
    
OR 

    function LittleBox(target) {
        this.grid = target;
    }
var grid = {};
    grid.a = new LittleBox(grid);

--------------------------
    
function Grid() { 
    this.rowA = new Row(this);
    this.rowB = new Row(this);    
    this.colA = new Col(this);
    this.colB = new Col(this);
    
    var a = new LittleBox(this.rowA, this.colA);
    var b = new LittleBox(this.rowA, this.colB);
    var c = new LittleBox(this.rowB, this.colA);
    var d = new LittleBox(this.rowB, this.colB);

    this.rowA.a = a;
    this.rowA.b = b;
    this.rowB.a = c;
    this.rowB.b = d;
    this.colA.a = a;
    this.colA.b = b;
    this.colB.a = c;
    this.colB.b = d;

}

function Row(grid) {
    this.grid = grid;
    this.a = a;
    this.b = b;
}

function Col(grid) {
    this.grid = grid;
    this.a = a;
    this.b = b;
}
    
function LittleBox() {
}
  
var grid = new Grid();
    
    
----------------------------
//------ Version 5
function Sqr(row,col) {
	this.row = row;
	this.col = col;
	row.sqrs.push(this);
	col.sqrs.push(this);
}

function Col(grid) {
	this.grid = grid;
	this.sqrs = [];
}

function Row(grid) {
	this.grid = grid;
	this.sqrs = [];
}

function Grid(size) {

	this.rows = [];
	this.cols = [];
	for (var i=0; i<size; i++) {
		this.rows[i] = new Row(this);
		this.cols[i] = new Col(this);
	}

	for (var r=0; r<size; r++) {
		for (var c=0; c<size; c++) {
			new Sqr(this.rows[r],this.cols[c]);
		}
	}
}

var grid = new Grid(2);

------------------
        
var arr = [1,2,3,4],
lastElem = arr.pop();

assert.equal(lastElem, 3, "expected " + lastElem + " to equal 3, but it didn't!" );
    
    