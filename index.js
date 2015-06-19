var _ = require('lodash');
 
var game =
    '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'
var game1 =
    '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'
console.log('This is the game ' + game)

var fun = game.split('')
console.log(game)

//------ Version 5
function Sqr(row,col,block) {
    this.row = row;
    this.col = col;
    this.block = block
    row.sqrs.push(this); // this.rows[0].sqrs
    col.sqrs.push(this);
    block.sqrs.push(this);
}

function Col(grid) {
    this.grid = grid;
    this.sqrs = [];
}

function Row(grid) {
    this.grid = grid;
    this.sqrs = [];
}

function Block(grid){
    this.grid = grid;
    this.sqrs = [];
}

function Grid(size) {

    this.rows = [];
    this.cols = [];
    this.blocks = [];

    for (var i=0; i<size; i++) {
        this.rows[i] = new Row(this);
        this.cols[i] = new Col(this);
        this.blocks[i] = new Block(this);
    }

    for (var r=0; r<size; r++) {
        for (var c=0; c<size; c++) {
            var b = (Math.floor(r/3)*3) + Math.floor(c/3)       
            new Sqr(this.rows[r],this.cols[c],this.blocks[b]);  
        }
    }

    this.remaining = function(){
        var counter = 0;
        for(var x = 0; x < 9; x++){
            for(var y = 0; y < 9; y++){
                if(this.rows[x].sqrs[y] === '.'){counter++}
            }
        }
        return counter;
    }
}

var grid = new Grid(9);

var arrGrid1 = game.split('');

for(var x = 0; x < 9;x++){
    for(var y = 0; y < 9;y++){
        grid.rows[x].sqrs[y] = arrGrid1.shift()
    }
}

var completedArray = [1,2,3,4,5,6,7,8,9]

console.log(grid.remaining())

