var game =
    '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'
var game1 =
    '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'
console.log('This is the game ' + game)
var gameboard_rows = []
var gameboard_columns = []
var gameboard_block = []
var len = game.length

    //create row arrays
for (var x = 0, num = 0; x < 9; x++) {
    num += 9;
    gameboard_rows[x] = game.slice(num - 9, num)
}
var gameboard_row_arrays = gameboard_rows.map(function(thing) {
    return thing.split('')
})
console.log(gameboard_row_arrays)
    //create array of columns
for (var x = 0, column = 0; x < 81; x++) {
    if (x < 9) {
        gameboard_columns[column] = game.slice(x, x + 1)
    }
    if (x > 8) {
        gameboard_columns[column] = gameboard_columns[column] + game.slice(x, x +
            1)
    }
    if (column === 8) {
        column = 0;
    } else {
        column += 1;
    }
}
var gameboard_columns_arrays = gameboard_columns.map(function(thing) {
    return thing.split('')
})
console.log(gameboard_columns_arrays)
    //create array of blocks
for (var x = 0, grid = 0; x < 81; x += 3) {
    if (x < 9) {
        gameboard_block[grid] = game.slice(x, x + 3)
    } else if ((9 <= x) && (x <= 24)) {
        gameboard_block[grid] = gameboard_block[grid] + game.slice(x, x + 3)
    } else if ((27 <= x) && (x <= 33)) {
        gameboard_block[grid] = game.slice(x, x + 3)
    } else if ((33 < x) && (x <= 51)) {
        gameboard_block[grid] = gameboard_block[grid] + game.slice(x, x + 3)
    } else if ((54 <= x) && (x <= 60)) {
        gameboard_block[grid] = game.slice(x, x + 3)
    } else if ((60 < x) && (x <= 78)) {
        gameboard_block[grid] = gameboard_block[grid] + game.slice(x, x + 3)
    }
    grid++
    if (grid === 3 && x <= 24) {
        grid = 0;
        if (x === 24) {
            grid = 3;
        }
    }
    if (grid === 6 && 27 < x <= 54) {
        grid = 3;
        if (x === 51) {
            grid = 6
        }
    }
    if (grid === 9 && (54 < x < 81)) {
        grid = 6;
    }
}
var gameboard_block_arrays = gameboard_block.map(function(thing) {
    return thing.split('')
})
console.log(gameboard_block_arrays)

