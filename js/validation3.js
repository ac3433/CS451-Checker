/**
 * Created by kashyap1 on 3/14/17.
 */
function piece(king, alive, player,row,col){
    var piece = {
        king: king,
        alive: alive,
        player : player,
        row : row,
        column: col
    }
    return piece
}

function move(sRow,sCol,eRow,eCol){
    var move = {
        startRow:sRow,
        startColumn: sCol,
        endRow: eRow,
        endColumn: eCol,
        jump: ((eRow - sRow == 2) || (sRow - eRow == 2))
    }

    return move
}

// var Board2 = [
//     [  0,  1,  0,  1,  0,  1,  0,  1 ],
//     [  1,  0,  1,  0,  1,  0,  1,  0 ],
//     [  0,  1,  0,  1,  0,  1,  0,  1 ],
//     [  0,  0,  0,  0,  0,  0,  0,  0 ],
//     [  0,  0,  0,  0,  0,  0,  0,  0 ],
//     [  2,  0,  2,  0,  2,  0,  2,  0 ],
//     [  0,  2,  0,  2,  0,  2,  0,  2 ],
//     [  2,  0,  2,  0,  2,  0,  2,  0 ]
// ];

// var Board1 = [
//     [  0,  2,  0,  2,  0,  2,  0,  2 ],
//     [  2,  0,  2,  0,  2,  0,  2,  0 ],
//     [  0,  2,  0,  2,  0,  2,  0,  2 ],
//     [  0,  0,  0,  0,  0,  0,  0,  0 ],
//     [  0,  0,  0,  0,  0,  0,  0,  0 ],
//     [  1,  0,  1,  0,  1,  0,  1,  0 ],
//     [  0,  1,  0,  1,  0,  1,  0,  1 ],
//     [  1,  0,  1,  0,  1,  0,  1,  0 ]
// ];

// // initialize board 1 and 2 here.
// var board
// //and set the board to board1 or 2 depending on which player's turn it is.
// if(playerTurn == 1){
//     board = board1
// }
// else{
//     board = board2 
// }

function initialize(board, playerTurn){
    if(playerTurn == 1){
        helpInit(0, 3, 2);
        helpInit(5, 8, 1);
        setToNull(3, 5);

    }
    else{
        helpInit(0, 3, 1);
        helpInit(5, 8, 2);
        setToNull(3, 5);
    }
}


function helpInit(startRow, finishRow, playerTurn, board)
{
    for(var i = startRow; i < finishRow; ++i)
    {
        for(var j = 0; j < 8; ++j)
        {
            if ((i + j) % 2 == 1)
            {
                board[i][j] = piece(false, true, playerTurn, i, j);
            }
            else{
                board[i][j] = piece(false, false, 0 , i, j);
            }

        }
    }
}

function setToNull(startRow, finishRow)
{
    for(var i = startRow; i < finishRow; ++i)
    {
        for(var j = 0; j < 8; ++j)
        {
            pieces[i][j] = new Piece("", i, j, false, false);
        }
    }
}

function deepCopy(arr){
    var a = []
    for (var i = 0; i < arr.length; i++) {
        temp = []
        for (var j = 0; j < arr[i].length; j++) {
            temp.push(arr[i][j])
        }
        a.push(temp)
    }
    return a
}


function isValidMove(board_m,piece,tile){
    var board_t = deepCopy(board_m)
   
    var playerTurn = piece.player

    var board = initialize(board_t,playerTurn)

    var move = move(piece.position[0],piece.position[1],
                    tile.position[0],tile.position[1]) 

    var current_piece = board[move.startRow][move.startColumn]

    var dest_piece = board[move.endRow][move.endColumn]


    //check if the piece is alive
    if(current_piece.alive == false){
        return "invalid"
    }

    //cant move an opponents checker
    if(current_piece.player != playerturn){
        return "invalid"
    }

    //trying to make a move out of limits
    if(withinLimits(move) != true){
        return "invalid"
    }

    // trying to jump on another checker
    if (board[move.endRow][move.endColumn].alive == true){
        return "invalid";
    }

    //cannot move in the same row or column
    if (move.startRow == move.endRow|| move.startColumn == move.endColumn){
        return "invalid";
    }

    // can't move backwards if not king
    if (move.startRow - move.endRow < 0 && current_piece.king == true){
        return "invalid";
    }

    if (move.jump == true)
        return isValidJump(move, board,playerTurn) ? "valid" : "invalid";

    if (jumpsAvailable(board) && move.jump != true)
        return "mustJump";

    return "valid";
}



function withinLimits(move){
   if((move.startRow() >= 0 && move.endRow() <= 7) && (move.startColumn() >= 0 && move.endColumn() <= 7)){
       return true
   }
   return false

}

function withinBoard(number)
{
    return (number >= 0 && number <= 7);
}

function jumpsAvailable(board, playerTurn){
    var temp_piece

    for(var i = 0; i < 8; i++)
    {
        for(var j = 0; j < 8; ++j)
        {
            temp = board[i][j];
            if (temp.alive == true && temp.player == playerTurn )
            {
                if (findValidJumps(temp, gameBoard) != [])
                    return true;
            }
        }
    }

    return false;

}

function findValidJumps(piece, board, playerTurn){
    var validJumps = []
    var startRow = piece.row;
    var startCol = piece.column;

    var move = Move(startRow, startCol, startRow - 2, startCol + 2);
    if (isValidJump(move, gameBoard, playerTurn) == true)
        validJumps.push(move)

    move = Move(startRow, startCol, startRow - 2, startCol - 2);
    if (isValidJump(move, gameBoard, playerTurn) == true)
        validJumps.push(move)

    if(piece.king == true){
        move = Move(startRow, startCol, startRow + 2, startCol + 2);
        if (isValidJump(move, gameBoard, playerTurn) == true)
            validJumps.push(move)

        move = Move(startRow, startCol, startRow + 2, startCol - 2);
        if (isValidJump(move, gameBoard, playerTurn) == true)
            validJumps.push(move)
    }

    return validJumps;

}

function isValidJump(move, board , playerTurn){

    var startR = move.startRow;
    var startC = move.startColumn;
    var destR = move.endRow;
    var destC = move.endColumn;

    var current_piece = board[move.startRow][move.startColumn]

    var dest_piece = board[move.endRow][move.endColumn]

    var temp_piece;

    if(withinLimits(move) != true){
        return "false"
    }

    if (!((destR - startR == 2 || startR - destR == 2) && (destC - startC == 2 || startC - destC == 2)))
        return false; // the parameters are not correct

    if (dest_piece.alive == true)
        return false;	// trying to jump on another checker

    if(current_piece.player  != playerTurn)
        return false; //cant move opponents checker

    //cannot move in the same row or column
    if (move.startRow == move.endRow|| move.startColumn == move.endColumn){
        return "invalid";
    }

    if (startR - destR == 2){
        if (destC - startC == 2){
            temp_piece = board[startR - 1][startC + 1];
            if(temp.alive == false || temp.player != playerTurn){
                return false;  // there's no checker to eat or I'm trying to eat one of my checkers
            }

        }
        else if (startC - destC == 2){
            temp_piece = board[startR - 1][startC - 1];
            if(temp.alive == false || temp.player != playerTurn){
                return false;  // there's no checker to eat or I'm trying to eat one of my checkers
            }
        }
    }
    else if (destR - startR == 2){
        if (board[startR][startC].king == false){
            return false;  // has to be king to move backwards
        }
        if (destC - startC == 2){
            temp_piece = board[startR + 1][startC + 1];
            if(temp.alive == false || temp.player != playerTurn){
                return false;  // there's no checker to eat or I'm trying to eat one of my checkers
            }
        }
        else if (startC - destC == 2){
            temp_piece = board[startR + 1][startC - 1];
            if(temp.alive == false || temp.player != playerTurn){
                return false;  // there's no checker to eat or I'm trying to eat one of my checkers
            }
        }
    }
    return true;

}


function gameOver(board, playerTurn){
    var temp_piece;

    for(var i = 0; i < 8; i++){

        for(var j = 0; j < 8; j++){
            temp_piece = board[i][j];
            if (temp_piece.alive == true && temp_piece.player == playerTurn && findValidMoves(temp, gameBoard) == []){
                return false;
            }
        }
    }
    return true;
}

function findValidMoves(piece, board, playerTurn){
    var validMoves = []
    var startRow = piece.row;
    var startCol = piece.column;

    var move = Move(startRow, startCol, startRow - 1, startCol + 1);
    if (isValidMove(move, gameBoard, playerTurn) == "valid"){
        validMoves.push(move);
    }

    move = Move(startRow, startCol, startRow - 1, startCol - 1);
    if (isValidMove(move, gameBoard, playerTurn) == "valid"){
        validMoves.push(move);
    }

    move = Move(startRow, startCol, startRow - 2, startCol + 2);
    if (isValidMove(move, gameBoard, playerTurn) == "valid"){
        validMoves.push(move);
    }

    move = Move(startRow, startCol, startRow - 2, startCol - 2);
    if (isValidMove(move, gameBoard, playerTurn) == "valid"){
        validMoves.push(move);
    }


    if(piece.king == true){
        move = Move(startRow, startCol, startRow + 1, startCol + 1);
        if (isValidMove(move, gameBoard, playerTurn) == "valid"){
            validMoves.push(move);
        }

        move = Move(startRow, startCol, startRow + 1, startCol - 1);
        if (isValidMove(move, gameBoard, playerTurn) == "valid"){
            validMoves.push(move);
        }

        move = Move(startRow, startCol, startRow + 2, startCol + 2);
        if (isValidMove(move, gameBoard, playerTurn) == "valid"){
            validMoves.push(move);
        }

        move = Move(startRow, startCol, startRow + 2, startCol - 2);
        if (isValidMove(move, gameBoard, playerTurn) == "valid"){
            validMoves.push(move);
        }
    }
    return validMoves

}


