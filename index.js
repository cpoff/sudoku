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
    this.block = block;

    row.sqrs.push(this); // this.rows[0].sqrs
    col.sqrs.push(this);
    block.sqrs.push(this);

    this.possibleNums = function(){
        return _.difference(completedArray,this.row,this.col,this.block)
    }
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
                if(this.rows[x].sqrs[y].value === '.'){counter++}
            }
        }
        return counter;
    }


    this.neededToFinish = function(col){
        var counter = 0;
        this.rows[col].sqrs.forEach(function(sqr){
            if(sqr === '.'){counter++;}
        })
        return counter;
    }
    /*
    this.confirm = {
        row = function(){
            var sum = 0;
            this.row.forEach(function(sqr){

            })
        },
        col = function(){

        },
        block = function(){

        } 

    }
    */
}

var grid = new Grid(9);

var arrGrid1 = game.split('');
var indexSquare = 0;
for(var x = 0; x < 9;x++){
    for(var y = 0; y < 9;y++){
        grid.rows[x].sqrs[y].value = arrGrid1.shift();
        grid.rows[x].sqrs[y].indexSquare = indexSquare;
        grid.rows[x].sqrs[y].colNum = y; 
        grid.rows[x].sqrs[y].rowNum = x;  
        grid.rows[x].sqrs[y].blockNum = ((Math.floor(x/3)*3) + Math.floor(y/3)) 
        indexSquare++;
    }
}

//console.log(grid.rows)
//console.log(grid.cols)
//console.log(grid.blocks)

var completedArray = ['1','2','3','4','5','6','7','8','9']

console.log(grid.neededToFinish(0))

module.exports = grid;

console.log(grid.blocks[0])
var y = _.pluck(grid.blocks[0].sqrs,'value')
console.log(y)
console.log(_.difference(completedArray,y))
console.log(grid.rows[1].sqrs[2].indexSquare)

/*
for(var x = 0; x < 9;x++){
    for(var y = 0; y<9;y++){
        for(var z = 0; z < 9; z++){
            var row = _.pluck(grid.row[x].sqrs,'value')
            var col = _.pluck(grid.col[y].sqrs,'value')
            var block = _.pluck(grid.block[z].sqrs,'value')
            if(_.difference(completedArray,row,col,block).length === 1){

                var val = _.difference(completedArray,row,col,block)[0]
                grid.row[x].sqrs[].value = val;
            }
        }
    }
}
*/

console.log(grid.rows[1].sqrs)

//filter
var counterzzz = 0
while(grid.remaining() > 0 && counterzzz < 20){
    for(var x = 0; x < 9;x++){
        for(var y = 0; y < 9;y++){
            if(grid.rows[x].sqrs[y].value === '.'){
                var colNum = grid.rows[x].sqrs[y].colNum
                var rowNum = grid.rows[x].sqrs[y].rowNum
                var blockNum = grid.rows[x].sqrs[y].blockNum
                var colArray = _.pluck(grid.cols[colNum].sqrs,'value')
                var rowArray = _.pluck(grid.rows[rowNum].sqrs,'value')
                var blockArray = _.pluck(grid.blocks[blockNum].sqrs,'value')
                if(_.difference(completedArray,rowArray,colArray,blockArray).length === 1){
                    var val = _.difference(completedArray,rowArray,colArray,blockArray)[0]
                    grid.rows[x].sqrs[y].value = val;
                    console.log('we changed something')
                }
            } else{
                console.log('You\'re good!')
            }
        }
    }
    counterzzz++;
    console.log(counterzzz)
}
//console.log(grid.rows[1].sqrs)


