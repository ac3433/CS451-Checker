/**
 * Created by zoltangercsak1 on 3/9/17.
 */
// move validations
// function test(){
//     var gameBoard = [
//         [  0,  1,  0,  1,  0,  1,  0,  1 ],
//         [  1,  0,  1,  0,  1,  0,  1,  0 ],
//         [  0,  1,  0,  1,  0,  1,  0,  1 ],
//         [  0,  0,  0,  0,  0,  0,  0,  0 ],
//         [  0,  0,  0,  0,  0,  0,  0,  0 ],
//         [  2,  0,  2,  0,  2,  0,  2,  0 ],
//         [  0,  2,  0,  2,  0,  2,  0,  2 ],
//         [  2,  0,  2,  0,  2,  0,  2,  0 ]
//     ];
//
//     for(i=0; i < gameBoard.length; i++)
//     {
//         var word = "";
//         var k = gameBoard[i];
//         for (j = 0; j < gameBoard.length; j++){
//             word += (gameBoard[i][j] + " ");
//         }
//         console.log(word);
//
//     }
/*
 * Created by kashyap1 on 3/12/17.
 */
function mandatoryCapture(board, playerTurn) {
    var moves = [];

    for (var i = 0; i < board.length; i++) {
        var temp_board = board[i];

        for (var j = 0; j < board.length; j++) {
            var piece = board[i][j];
            if (piece == playerTurn) {
                var temp = [];
                if (i + 2 < 8 && j + 2 < 8) {
                    var xAxis = i + 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] != 0) {
                        if (board[xAxis + 1][yAxis + 1] == 0) { // this is assuming the empty spaces are integers like 0
                            temp.push(xAxis + 1);
                            temp.push(yAxis + 1);
                            moves.push(temp);
                        }
                    }
                }
            } else if (piece == 3) {
                var temp = [];
                if (i + 2 < 8 && j + 2 < 8) {
                    var xAxis = i + 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] != 0) {
                        if (board[xAxis + 1][yAxis + 1] == 0) { // this is assuming the empty spaces are integers like 0
                            temp.push(xAxis + 1);
                            temp.push(yAxis + 1);
                            moves.push(temp);
                        }
                    }
                }
            }

        }
    }

    for (var i = 0; i < board.length; i++) {
        var temp_board = board[i];

        for (var j = 7; j >= 0; j--) {
            var piece = board[i][j];
            if (piece == playerTurn) {
                var temp = [];
                if (i + 2 < 8 && j - 2 >= 0) {
                    var xAxis = i + 1;
                    var yAxis = j - 1;
                    if ((board[xAxis][yAxis]) != playerTurn && board[xAxis][yAxis] != 0) {
                        if (board[xAxis + 1][yAxis - 1] == 0) { // this is assuming the empty spaces are integers like 0
                            temp.push(xAxis + 1);
                            temp.push(yAxis - 1);
                            moves.push(temp);
                        }
                    }
                }
            } else if (piece == 3) {
                var temp = [];
                if (i + 2 < 8 && j - 2 >= 0) {
                    var xAxis = i + 1;
                    var yAxis = j - 1;
                    if ((board[xAxis][yAxis]) != playerTurn && board[xAxis][yAxis] != 0) {
                        if (board[xAxis + 1][yAxis - 1] == 0) { // this is assuming the empty spaces are integers like 0
                            temp.push(xAxis - 1);
                            temp.push(yAxis - 1);
                            moves.push(temp);
                        }
                    }
                }
            }

        }
    }

    return moves;
}

function mandatoryCapturePlayer2(board, playerTurn) {
    var moves = [];

    // checking one side of the diagonal for captures
    for (var i = board.length - 1; i >= 0; i--) {
        var temp_board = board[i];

        for (var j = 0; j < board.length; j++) {
            var piece = board[i][j];
            if (piece == playerTurn) {
                var temp = [];
                if (i - 2 >= 0 && j + 2 < 8) {
                    var xAxis = i - 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] != 0) {
                        if (board[xAxis - 1][yAxis + 1] == 0) { // this is assuming the empty spaces are integers like 0
                            temp.push(xAxis - 1);
                            temp.push(yAxis + 1);
                            moves.push(temp);
                        }
                    }
                }
            } else if (piece == 4) {
                var temp = [];
                if (i - 2 >= 0 && j + 2 < 8) {
                    var xAxis = i - 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] != 0) {
                        if (board[xAxis - 1][yAxis + 1] == 0) { // this is assuming the empty spaces are integers like 0
                            temp.push(xAxis - 1);
                            temp.push(yAxis + 1);
                            moves.push(temp);
                        }
                    }
                }
            }


        }
    }
    // checking other side of the piece for diagonal captures
    for (var i = board.length - 1; i >= 0; i--) {
        var temp_board = board[i];

        for (var j = 7; j >= 0; j--) {
            var piece = board[i][j];
            if (piece == playerTurn) {
                var temp = [];
                if (i - 2 >= 0 && j - 2 >= 0) {
                    var xAxis = i - 1;
                    var yAxis = j - 1;
                    if ((board[xAxis][yAxis]) != playerTurn && board[xAxis][yAxis] != 0) {
                        if (board[xAxis - 1][yAxis - 1] == 0) { // this is assuming the empty spaces are integers like 0
                            temp.push(xAxis - 1);
                            temp.push(yAxis - 1);
                            moves.push(temp);
                        }
                    }
                }
            } else if (piece == 4) {
                var temp = [];
                if (i - 2 >= 0 && j - 2 >= 0) {
                    var xAxis = i - 1;
                    var yAxis = j - 1;
                    if ((board[xAxis][yAxis]) != playerTurn && board[xAxis][yAxis] != 0) {
                        if (board[xAxis - 1][yAxis - 1] == 0) { // this is assuming the empty spaces are integers like 0
                            temp.push(xAxis - 1);
                            temp.push(yAxis - 1);
                            moves.push(temp);
                        }
                    }
                }
            }


        }
    }

    return moves;
}

function multipleCaptureForward(board, playerTurn) {
    // var moves = []; // contains all the multiple capture moves.
    var keep = 0;
    var temp = []
    for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
        var temp_board = board[i];
        if (temp.length > 2) {
            break;
        }
        for (var j = 0; j < board.length; j++) {
            if (temp.length > 2) {
                break;
            }
            var piece = board[i][j]; // gets each checker piece or an empty space.

            if (piece == playerTurn) {
                temp = [];
                var i_ = i
                var j_ = j

                while (i_ + 2 < 8 && j_ + 2 < 8) {
                    var xAxis = i_ + 1;
                    var yAxis = j_ + 1;
                    if ((board[xAxis][yAxis]) != playerTurn) {
                        if (board[xAxis + 1][yAxis + 1] == 0) {
                            //i+2;
                            //j+2;
                            i_ = xAxis + 1;
                            j_ = yAxis + 1;
                            keep = board[i_][j_];
                            board[i_][j_] = piece;
                            temp.push(i_);
                            temp.push(j_);

                        } else {
                            board[i_][j_] = keep;
                            break;
                        }
                    } else {
                        break;
                    }
                }
                if (temp.length > 2) {

                    // moves.push(temp);
                    break;
                } // see if the checker piece is one of the player. Note: check for empty space
            } else if (piece == 3) {
                var temp = [];
                var i_ = i
                var j_ = j
                while (i_ + 2 < 8 && j_ + 2 < 8) {
                    var xAxis = i_ + 1;
                    var yAxis = j_ + 1;
                    if ((board[xAxis][yAxis]) != playerTurn) {
                        if (board[xAxis + 1][yAxis + 1] == 0) {
                            //i+2;
                            //j+2;
                            i_ = xAxis + 1;
                            j_ = yAxis + 1;
                            keep = board[i_][j_];
                            board[i_][j_] = piece;
                            temp.push(i_);
                            temp.push(j_);

                        } else {
                            board[i_][j_] = keep;
                            break;
                        }
                    } else {
                        break;
                    }
                }
                if (temp.length > 2) {
                    // moves.push(temp);
                    break;
                } // see if the checker piece is one of the player. Note: check for empty space

            }
            if (temp.length > 2) {
                break;
            }
        }
        if (temp.length > 2) {
            break;
        }
    }

    for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
        var temp_board = board[i];
        if (temp.length > 2) {
            break;
        }

        for (var j = 7; j >= 0; j--) {
            if (temp.length > 2) {
                break;
            }
            var piece = board[i][j]; // gets each checker piece or an empty space.
            //console.log("piece here" + piece);
            if (piece == playerTurn) {
                temp = [];
                var i_ = i
                var j_ = j
                while (i_ + 2 < 8 && j_ - 2 >= 0) {
                    var xAxis = i_ + 1;
                    var yAxis = j_ - 1;
                    if ((board[xAxis][yAxis]) != playerTurn) {
                        if (board[xAxis + 1][yAxis - 1] == 0) {
                            //i+2;
                            //j+2;
                            i_ = xAxis + 1;
                            j_ = yAxis - 1;
                            keep = board[i_][j_];
                            board[i_][j_] = piece;
                            temp.push(i_);
                            temp.push(j_);
                        } else {
                            board[i_][j_] = keep;
                            break;
                        }
                    } else {
                        break
                    }
                }
                if (temp.length > 2) {
                    // moves.push(temp);
                    break;
                } // see if the checker piece is one of the player. Note: check for empty space
            } else if (piece == 3) {
                var i_ = i
                var j_ = j
                var temp = [];

                while (i + 2 < 8 && j - 2 >= 0) {
                    var xAxis = i_ + 1;
                    var yAxis = j_ - 1;
                    if ((board[xAxis][yAxis]) != playerTurn) {
                        if (board[xAxis + 1][yAxis - 1] == 0) {
                            i_ = xAxis + 1;
                            j_ = yAxis - 1;
                            keep = board[i_][j_];
                            board[i_][j_] = piece;
                            temp.push(i_);
                            temp.push(j_);
                        } else {
                            board[i_][j_] = keep;
                            break;
                        }
                    } else {
                        break
                    }
                }
                if (temp.length > 2) {
                    // moves.push(temp);
                    break;
                } // see if the checker piece is one of the player. Note: check for empty space

            }
            if (temp.length > 2) {

                break;
            }
        }
    }

console.log("Forward");
    console.log(temp);
    return temp

}

function multipleCaptureBackward(board, playerTurn) {
    // var moves = []; // contains all the multiple capture moves.
    var keep = 0;
    var temp = []
    for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
        var temp_board = board[i];
        if (temp.length > 2) {
            break;
        }
        for (var j = 0; j < board.length; j++) {
            var piece = board[i][j]; // gets each checker piece or an empty space.
            //console.log("piece here" + piece);
            if (temp.length > 2) {
                break;
            }
            if (piece == playerTurn) {
                temp = [];
                var i_ = i
                var j_ = j

                while (i_ - 2 >= 0 && j_ + 2 < 8) {

                    var xAxis = i_ - 1;
                    var yAxis = j_ + 1;
                    if ((board[xAxis][yAxis]) != playerTurn) {
                        if (board[xAxis - 1][yAxis + 1] == 0) {
                            i_ = xAxis - 1;
                            j_ = yAxis + 1;
                            keep = board[i_][j_];
                            board[i_][j_] = piece;
                            temp.push(i_);
                            temp.push(j_);

                        } else {
                            board[i_][j_] = keep;
                            break;
                        }
                    } else {
                        break;
                    }
                }
                if (temp.length > 2) {
                    // moves.push(temp);
                    break;
                } // see if the checker piece is one of the player. Note: check for empty space
            } else if (piece == 3) {
                var temp = [];
                var i_ = i
                var j_ = j
                while (i_ - 2 >= 0 && j_ + 2 < 8) {
                    var xAxis = i_ - 1;
                    var yAxis = j_ + 1;
                    if ((board[xAxis][yAxis]) != playerTurn) {
                        if (board[xAxis - 1][yAxis + 1] == 0) {
                            //i+2;
                            //j+2;
                            i_ = xAxis - 1;
                            j_ = yAxis + 1;
                            keep = board[i_][j_];
                            board[i_][j_] = piece;
                            temp.push(i_);
                            temp.push(j_);

                        } else {
                            board[i_][j_] = keep;
                            break;
                        }
                    } else {
                        break;
                    }
                }
                if (temp.length > 2) {
                    // moves.push(temp);
                    break;
                } // see if the checker piece is one of the player. Note: check for empty space

            }
            if (temp.length > 2) {
                break;
            }
        }
        if (temp.length > 2) {
            break;
        }
    }

    for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
        var temp_board = board[i];
        if (temp.length > 2) {
            break;
        }
        for (var j = 7; j >= 0; j--) {
            if (temp.length > 2) {
                break;
            }
            var piece = board[i][j]; // gets each checker piece or an empty space.
            if (piece == playerTurn) {

                temp = [];
                var i_ = i
                var j_ = j
                while (i_ - 2 >= 0 && j_ - 2 >= 0) {
                    var xAxis = i_ - 1;
                    var yAxis = j_ - 1;
                    if ((board[xAxis][yAxis]) != playerTurn) {
                        if (board[xAxis - 1][yAxis - 1] == 0) {
                            //i+2;
                            //j+2;
                            i_ = xAxis - 1;
                            j_ = yAxis - 1;
                            keep = board[i_][j_];
                            board[i_][j_] = piece;
                            temp.push(i_);
                            temp.push(j_);
                        } else {
                            board[i_][j_] = keep;
                            break;
                        }
                    } else {
                        break
                    }
                }
                if (temp.length > 2) {
                    // moves.push(temp);
                    break;
                } // see if the checker piece is one of the player. Note: check for empty space
            } else if (piece == 4) {
                var i_ = i
                var j_ = j
                var temp = [];

                while (i - 2 >= 0 && j - 2 >= 0) {
                    var xAxis = i_ - 1;
                    var yAxis = j_ - 1;
                    if ((board[xAxis][yAxis]) != playerTurn) {
                        if (board[xAxis - 1][yAxis - 1] == 0) {
                            i_ = xAxis - 1;
                            j_ = yAxis - 1;
                            keep = board[i_][j_];
                            board[i_][j_] = piece;
                            temp.push(i_);
                            temp.push(j_);
                        } else {
                            board[i_][j_] = keep;
                            break;
                        }
                    } else {
                        break
                    }
                }
                if (temp.length > 2) {
                    // moves.push(temp);
                    break;
                } // see if the checker piece is one of the player. Note: check for empty space

            }
            if (temp.length > 2) {
                break;
            }
        }
    }
    console.log("Backward");

    console.log(temp);
    return temp
}


function mandatoryCaptureKing(board, playerturn) {
    var moves = [];
    var temp_b = [];
    var temp_f = [];
    if (playerturn == 1) {
        for (var i = 0; i < board.length; i++) {
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece == 3) {
                    temp_b = mandatoryCapture(board, playerturn);
                    temp_f = mandatoryCapturePlayer2(board, playerturn);
                }
            }
            for (var x = 0; x < temp_b.length; x++) {
                moves.push(temp_b[x]);
            }
            for (var y = 0; y < temp_f.length; y++) {
                moves.push(temp_f[y]);
            }
        }
    } else if (playerturn == 2) {
        for (var i = 7; i >= 0; i--) {
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece == 4) {
                    temp_b = mandatoryCapture(board, playerturn);
                    temp_f = mandatoryCapturePlayer2(board, playerturn);
                }
            }
            for (var x = 0; x < temp_b.length; x++) {
                moves.push(temp_b[x]);
            }
            for (var y = 0; y < temp_f.length; y++) {
                moves.push(temp_f[y]);
            }
        }
    }

    return moves;

}


function multipleCaptureKing(board, playerturn) {
    var moves = [];
    var temp_b = [];
    var temp_f = [];
    if (playerturn == 1) {
        for (var i = 0; i < board.length; i++) {
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece == 3) {
                    temp_b = multipleCaptureBackward(board, playerturn);
                    temp_f = multipleCaptureForward(board, playerturn);
                }
            }
            for (var x = 0; x < temp_b.length; x++) {
                moves.push(temp_b[x]);
            }
            for (var y = 0; y < temp_f.length; y++) {
                moves.push(temp_f[y]);
            }
        }
    } else if (playerturn == 2) {
        for (var i = 7; i >= 0; i--) {
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece == 3) {
                    temp_b = multipleCaptureBackward(board, playerturn);
                    temp_f = multipleCaptureForward(board, playerturn);
                }
            }
            for (var x = 0; x < temp_b.length; x++) {
                moves.push(temp_b[x]);
            }
            for (var y = 0; y < temp_f.length; y++) {
                moves.push(temp_f[y]);
            }
        }
    }

    var length = moves.length;
    var returnArray = [];

    returnArray.push(moves[length - 2]);
    returnArray.push(moves[length - 1]);

    return returnArray;

}


function kinging(board, playerTurn) {

    if (playerTurn == 1) {
        var position = [
            [7, 0],
            [7, 1],
            [7, 2],
            [7, 3],
            [7, 4],
            [7, 5],
            [7, 6],
            [7, 7]
        ];
        for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.

                if (piece == 1) {
                    for (var k = 0; k < position.length; k++) {

                        if ((position[k][0] == i) && (position[k][1] == j)) {
                            piece == 3;
                            window.alert("Piece became a King");
                        }
                    }
                }


            }
        }
    } else if (playerTurn == 2) {
        var position = [
            [0, 7],
            [0, 6],
            [0, 5],
            [0, 4],
            [0, 3],
            [0, 2],
            [0, 1],
            [0, 0]
        ];
        for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.

                if (piece == 2) {
                    for (var k = 0; k < position.length; k++) {

                        if ((position[k][0] == i) && (position[k][1] == j)) {
                            piece == 4;
                            window.alert("Piece became a King");
                        }
                    }
                }
            }
        }

    }

}


function winningCheckKingsforward(board, playerTurn) {
    var result = true;
    if (playerTurn == 1) {
        // check board for the pieces of player 2
        for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                if (piece == 4) { // check if other player still has a piece
                    var xAxis = i - 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] == 1) {
                        if (board[xAxis - 1][yAxis + 1] == 0) {
                            result = false;
                            break;
                        }
                    }
                }
            }
            break;
        }

        return result;
    } else if (playerTurn == 2) {

        // check board for the pieces of player 2
        for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                if (piece == 3) { // check if other player still has a piece
                    var xAxis = i + 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] == 2) {
                        if (board[xAxis + 1][yAxis + 1] == 0) {
                            result = false;
                            break;
                        }
                    }
                }
            }
            break;
        }

    }
    return result;

}

function winningCheckKingsbackward(board, playerTurn) {
    var result = true;
    if (playerTurn == 2) {
        // check board for the pieces of player 2
        for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                // console.log(piece);
                if (piece == 3) { // check if other player still has a piece
                    var xAxis = i - 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] == 2) {
                        if (board[xAxis - 1][yAxis + 1] == 0) {
                            result = false;
                            break;
                        }
                    }
                }
            }
            break;
        }

        return result;
    } else if (playerTurn == 1) {

        // check board for the pieces of player 2
        for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                if (piece == 4) { // check if other player still has a piece
                    var xAxis = i + 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] == 1) {
                        if (board[xAxis + 1][yAxis + 1] == 0) {
                            result = false;
                            break;
                        }
                    }
                }
            }
            break;
        }
    }
    return result;

}

function winningCheckforKings(board, playerTurn) {
    var result = true;
    if (playerTurn == 1) {
        var forward = winningCheckKingsforward(board, 1);
        var backward = winningCheckKingsforward(board, 1);

        if (forward == true && backward == true) {
            result = true;
        } else {
            result = false
        }
    }
    if (playerTurn == 2) {
        var forward = winningCheckKingsforward(board, 2);
        var backward = winningCheckKingsforward(board, 2);

        if (forward == true && backward == true) {
            result = true;
        } else {
            result = false
        }
    }
    return result;
}

function winningCheckForBlocks(board, playerTurn) { // implement for king
    var result = true;
    if (playerTurn == 1) {
        // check board for the pieces of player 2
        for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                if (piece == 2) { // check if other player still has a piece
                    var xAxis = i - 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] == 1 || board[xAxis][yAxis] == 0) {
                        if (board[xAxis - 1][yAxis + 1] == 0) {
                            result = false;

                            break;
                        }
                    }
                }
            }
            if (!result) {
                break;
            }
        }
        if (result == true) {
            console.log("Player 1 has won the game by blocking all of player 2's pieces");
        }
        return result;
    } else if (playerTurn == 2) {

        // check board for the pieces of player 2
        for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                if (piece == 1) { // check if other player still has a piece
                    var xAxis = i + 1;
                    var yAxis = j + 1;
                    if (board[xAxis][yAxis] == 2 || board[xAxis][yAxis] == 0) {
                        if (board[xAxis + 1][yAxis + 1] == 0) {
                            result = false;
                            break;
                        }
                    }
                }
            }
            if (!result) {
                break;
            }
        }
        if (result == true) {
            console.log("Player 2 has won the game by blocking all of player 1's pieces");
        }
    }
    return result;
}

function winCheckByCapture(board, playerTurn) {

    var result = true;
    if (playerTurn == 2) {
        for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece == 1) {
                    result = false;
                    break;
                }
            }
            if (result == false) {
                break;
            }
        }
        if (result == true) {
            console.log("PlAYER 2 HAS WON THE GAME BY CAPTURING ALL OF PLAYER 1'S PIECES.")
        }
        return result;
    }

    if (playerTurn == 1) {
        for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece == 2) {
                    result = false;
                    break;
                }
            }
            if (!result) {
                break;
            }
        }
        if (result) {
            console.log("PlAYER 1 HAS WON THE GAME BY CAPTURING ALL OF PLAYER 2'S PIECES.")
        }
        return result;
    }
}

function checkBackward(move, playerturn, piece, board) {
    if (playerturn == 1) {
        var temp = piece.position;
        var xAxis = temp[0];
        var yAxis = temp[1];
        if (board[xAxis][yAxis] != 3) {
            if (move[0] < xAxis) {
                return true;
            } else {
                return false;
            }
        }
    } else if (playerturn == 2) {
        var temp = piece.position;
        var xAxis = temp[0];
        var yAxis = temp[1];
        if (board[xAxis][yAxis] != 4) {
            if (move[0] > xAxis) {
                return true;
            } else {
                return false;
            }
        }
    }

}

function validateMovement(piece, move, board) {
    var xAxis = move[0];
    var yAxis = move[1];
    var validate = true;
    var reason;
    var returnArray = [];

    if (board[xAxis][yAxis] == -1) { // make sure the non white spaces are -1 .
        console.log("You can only move diagonally");
        validate = false;
        reason = "You can only move diagonally";
        returnArray.push(validate);
        returnArray.push(reason);
        return returnArray;
    }

    var checkBack = checkBackward(move, piece.player, piece, board);

    if (checkBack == true) {
        validate = false;
        reason = "You cant move backwards";
        returnArray.push(validate);
        returnArray.push(reason);
        return returnArray;
    }
    var wincapture = winCheckByCapture(board, piece.player);

    var winblock = winningCheckForBlocks(board, piece.player);

    var winKing = winningCheckforKings(board, piece.player);

    var mandatory = [];
    var multipleCapture = [];
    if (wincapture || (winblock && winKing)) {
        validate = true;
        reason = "ALREADY WON GAME";
        returnArray.push(validate);
        returnArray.push(reason);
        return returnArray;
    }

    if (piece.player == 1) {
        multipleCapture = multipleCaptureForward(board, piece.player);
    } else {
        multipleCapture = multipleCaptureBackward(board, piece.player);
    }
    var corrLen = multipleCapture.length

    // console.log([xAxis,yAxis])
    console.log("asdasd")
    console.log(multipleCapture[corrLen-2])
    console.log(multipleCapture[corrLen-1])
    console.log(xAxis);
    console.log(yAxis);
    if (multipleCapture.length == 0) {



    } else if (xAxis == multipleCapture[corrLen - 2] && yAxis == multipleCapture[corrLen - 1]) {
        validate = true;
        reason = "validated";
    } else {
        validate = false;
        reason = "A multiple capture can be made";
    }
    // console.log(multipleCapture)
    if (validate == true) {
        returnArray.push(validate);
        returnArray.push(reason);
        return returnArray;
    }
    var multipleCaptureKingReturn = multipleCaptureKing(board, piece.player);
    var corrLen = multipleCapture.length
    if (multipleCapture.length == 0) {

    }
    //check multiple capture for king
    else if (xAxis == multipleCaptureKingReturn[corrLen - 2] && yAxis == multipleCaptureKingReturn[corrLen - 1]) {
        validate = true;
    } else {
        validate = false;
        reason = "A multiple capture can be made";
    }

    if (validate == false) {
        returnArray.push(validate);
        returnArray.push(reason);
        return returnArray;
    }

    // MANDATORY CAPTURE
    var mandatoryCaptureKingArr = []
    if (piece.player == 1) {
        mandatory = mandatoryCapture(board, piece.player);
        mandatoryCaptureKingArr =  mandatoryCaptureKing(board, piece.player)

        }else {
            mandatory = mandatoryCapturePlayer2(board, piece.player);
             mandatoryCaptureKingArr =  mandatoryCaptureKing(board, piece.player)
        }
        console.log(mandatory)
        if (mandatory.length > 0) {
            for (var i = 0; i < mandatory.length; i++) {
                var temp = mandatory[i];
                if (temp[0] == xAxis && temp[1] == yAxis) {
                    validate = true;
                    reason = "validated";
                    break;
                } else {
                    validate = false;
                    reason = "There is a mandatory capture that should be made";
                }
            }
        }
        if (mandatoryCaptureKingArr.length > 0) {
            for (var i = 0; i < mandatoryCaptureKingArr.length; i++) {
                var temp = mandatoryCaptureKingArr[i];
                if (temp[0] == xAxis && temp[1] == yAxis) {
                    validate = true;
                    reason = "validated";
                    break;
                } else {
                    validate = false;
                    reason = "There is a mandatory king capture that should be made";
                }
            }
        }


        if (validate == true) {
            returnArray.push(validate);
            returnArray.push(reason);
            return returnArray;
        } else if (Math.abs(piece.position[0] - xAxis) > 1 ||
            Math.abs(piece.position[1] - yAxis) > 1
        ) {
            validate = false;
            reason = "You can move only one spot";
            returnArray.push(validate);
            returnArray.push(reason);
            return returnArray;
        }

        returnArray.push(validate);
        returnArray.push(reason);

        return returnArray;

    }