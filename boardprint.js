function boardDivide() {
  console.log('+----------+----------+----------+');
}
var divider = '| ';

function line(sliceStart, sliceEnd, boardArray) {
  var linePrint = '| ';
  var boxPrint = function(boxSliceStart, boxSliceEnd) {
      boardArray.slice(boxSliceStart,boxSliceEnd).forEach(function(number){
      linePrint += (number + '  ')
    })
      linePrint += divider;
  }
  boxPrint(sliceStart, sliceEnd);
  boxPrint(sliceStart+3, sliceEnd+3);
  boxPrint(sliceStart+6, sliceEnd+6);
  console.log(linePrint);
}
function boardPrinter(boardArray) {
  var box1 = [0,9,18]
  var box2 = [27,36,45]
  var box3 = [54,63,72]

  boardDivide();

  box1.forEach(function(value, index){
    line(box1[index], box1[index]+3, boardArray);
  })
  boardDivide();
  box2.forEach(function(value, index){
    line(box2[index], box2[index]+3, boardArray);
  })
  boardDivide();
  box3.forEach(function(value, index){
    line(box3[index], box3[index]+3, boardArray);
  })
  boardDivide();
};




//'158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'
module.exports = boardPrinter;
