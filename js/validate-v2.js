
// function backwards
function backwardStraight(tile, board,piece){
    if(piece.player == 1){
        var move = tile.position;
        var player = piece.position;

        if((player[0] > move[0]) && (player[1] == move[1])){
            return true;
        }
        else{
            return false;
        }
    }

    else if(piece.player == 2){
        var move = tile.position;
        var player = piece.position;

        if((player[0] < move[0]) && (player[1] == move[1])){
            return true;
        }
        else{
            return false;
        }
    }

    return false
}

function multipleCaptureBackward(board, playerTurn, direction){
    var temp = []
    if(direction == "right"){
        var keep = 0;
        temp = []
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
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis]!=0) {
                        	
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
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis]!=0) {

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

                }
                if (temp.length > 2) {
                    break;
                }
            }
            if (temp.length > 2) {
                break;
            }
        }
    }
    else if(direction == "left"){
        var keep = 0;
        temp = []
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
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis]!=0) {
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
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis]!=0) {
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
    }
    return temp;
}

function multipleCaptureForward(board, playerTurn, direction){
    var temp = [];
    if(direction == "right"){
        var keep = 0;
        temp = []
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
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] !=0 ) {
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
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] !=0 ) {
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
    }
    else if(direction == "left"){
        var keep = 0;
        temp = [];
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
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] !=0 ) {
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
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] !=0 ) {
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
    }
    if (temp.length <= 2){
    	return []
    }
    return temp;
}

/*
MANDATORY
*/
function mandatoryCaptureForward(board, playerTurn, direction){
    var moves = [];

    if(direction == "right"){
        moves = [];

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
                } else if (piece == 4) {
                    var temp = [];
                    if (i + 2 < 8 && j + 2 < 8) {
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis] == 1  && board[xAxis][yAxis] != 0) {
                            if (board[xAxis + 1][yAxis + 1] == 0) { // this is assuming the empty spaces are integers like 0
                                temp.push(xAxis + 1);
                                temp.push(yAxis + 1);
                                moves.push(temp);
                            }
                        }
                    }
                }else if (piece == 3) {
                    var temp = [];
                    if (i + 2 < 8 && j + 2 < 8) {
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis] == 2  && board[xAxis][yAxis] != 0) {
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
    }
    else if(direction == "left"){
       moves = [];
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
                } else if (piece == 4 ) {
                    var temp = [];
                    if (i + 2 < 8 && j - 2 >= 0) {
                        var xAxis = i + 1;
                        var yAxis = j - 1;
                        if ((board[xAxis][yAxis]) == 1 && board[xAxis][yAxis] != 0) {

                            if (board[xAxis + 1][yAxis - 1] == 0) { // this is assuming the empty spaces are integers like 0
                                temp.push(xAxis + 1);
                                temp.push(yAxis - 1);
                                moves.push(temp);
                            }
                        }
                    }
                }else if (piece == 3 ) {
                    var temp = [];
                    if (i + 2 < 8 && j - 2 >= 0) {
                        var xAxis = i + 1;
                        var yAxis = j - 1;
                        if ((board[xAxis][yAxis]) == 2 && board[xAxis][yAxis] != 0) {

                            if (board[xAxis + 1][yAxis - 1] == 0) { // this is assuming the empty spaces are integers like 0
                                temp.push(xAxis + 1);
                                temp.push(yAxis - 1);
                                moves.push(temp);
                            }
                        }
                    }
                }

            }
        }
    }
    return moves;

}

// TODO:- Check that the right pice is being moved
function mandatoryCaptureBackward(board, playerTurn, direction){
    var moves = [];
    // var returnP = []
    if(direction == "right"){
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
                        if (board[xAxis][yAxis] == 1 && board[xAxis][yAxis] != 0) {
                            if (board[xAxis - 1][yAxis + 1] == 0) { // this is assuming the empty spaces are integers like 0
                                temp.push(xAxis - 1);
                                temp.push(yAxis + 1);
                                moves.push(temp);
                            }
                        }
                    }
                }else if (piece == 3) {
                    var temp = [];
                    if (i - 2 >= 0 && j + 2 < 8) {
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis] == 2 && board[xAxis][yAxis] != 0) {
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
    }
    else if(direction == "left"){
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
                        if ((board[xAxis][yAxis]) == 1 && board[xAxis][yAxis] != 0) {
                            if (board[xAxis - 1][yAxis - 1] == 0) { // this is assuming the empty spaces are integers like 0
                                temp.push(xAxis - 1);
                                temp.push(yAxis - 1);
                                moves.push(temp);
                            }
                        }
                    }
                }else if (piece == 3) {
                	console.log("final check")
                    var temp = [];
                    if (i - 2 >= 0 && j - 2 >= 0) {
                        var xAxis = i - 1;
                        var yAxis = j - 1;
                        if ((board[xAxis][yAxis]) == 2 && board[xAxis][yAxis] != 0) {
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
    }
    return moves;
}
function mandatoryCaptureKing(board, playerturn) {
    var moves = [];
    var temp_b = [];
    var temp_f = [];
    var temp_br = []
    var temp_fr = []
    var temp_bl = []
    var temp_fl = []
    if (playerturn == 1) {
        for (var i = 0; i < board.length; i++) {
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece == 3) {
                    temp_br = mandatoryCapture(board, playerturn, "right");
                    temp_fr = mandatoryCaptureBackward(board, playerturn, "right");
                    temp_bl = mandatoryCapture(board, playerturn, "left");
                    temp_fl = mandatoryCaptureBackward(board, playerturn, "left");
                }
            }
            for (var x = 0; x < temp_br.length; x++) {
                moves.push(temp_br[x]);
            }
            for (var y = 0; y < temp_fr.length; y++) {
                moves.push(temp_fr[y]);
            }
            for (var z = 0; z < temp_bl.length; z++) {
                moves.push(temp_bl[z]);
            }
            for (var q = 0; q < temp_fl.length; q++) {
                moves.push(temp_fl[q]);
            }
        }
    } else if (playerturn == 2) {
        for (var i = 7; i >= 0; i--) {
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece == 4) {
                    temp_br = mandatoryCapture(board, playerturn, "right");
                    temp_fr = mandatoryCapturePlayer2(board, playerturn, "right");
                    temp_bl = mandatoryCapture(board, playerturn, "left");
                    temp_fl = mandatoryCapturePlayer2(board, playerturn, "left");
                }
            }
            for (var x = 0; x < temp_br.length; x++) {
                moves.push(temp_br[x]);
            }
            for (var y = 0; y < temp_fr.length; y++) {
                moves.push(temp_fr[y]);
            }
            for (var z = 0; z < temp_bl.length; z++) {
                moves.push(temp_bl[z]);
            }
            for (var q = 0; q < temp_fl.length; q++) {
                moves.push(temp_fl[q]);
            }
        }
    }

    return moves;

}



function checkForKings(board){
    for (var i = 0; i < board.length; i++) {
        var temp_board = board[i];

        for (var j = 0; j < board.length; j++) {
            var piece = board[i][j];
            if (piece == 3 || piece == 4) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
//function forwards
function forwardStraight(tile, board, piece){
    if(piece.player == 1){
        var move = tile.position;
        var player = piece.position;

        if((player[0] < move[0]) && (player[1] == move[1])){
            return true;
        }
        else{
            return false;
        }
    }

    else if(piece.player == 2){
        var move = tile.position;
        var player = piece.position;

        if((player[0] > move[0]) && (player[1] == move[1])){
            return true;
        }
        else{
            return false;
        }
    }
}

//checks for empty block
function emptyBlock(board,tile){

    var destPosition = tile.position;

    if (board[destPosition[0]][destPosition[1]] == 0){
        return true;
    }
    else{
        return false;
    }

}

function multipleMoveDiagonally(piece, tile, playerTurn){
    // returns true if the move is valid, false if the player tries to play a multidiagonal move
    if(playerTurn == piece.player){
        if ((tile.position[0]) - (piece.position[0]) > 1 || (tile.position[1]) - (piece.position[1]) > 1) {
            return false;
        }
        else if((tile.position[0]) - (piece.position[0]) > 1 || (tile.position[1]) - (piece.position[1]) < 1){
            return false;
        }
    }
    else if(playerTurn == piece.player) {
        if ((tile.position[0]) - (piece.position[0]) < 1 || (tile.position[1]) - (piece.position[1]) > 1) {
            return false;
        }
        else if ((tile.position[0]) - (piece.position[0]) < 1 || (tile.position[1]) - (piece.position[1]) < 1){
            return false;
        }
    }
    else{
        return true;
    }
} 


function winCheckByCapture(board, playerTurn){
    var result = true;
    if(playerTurn == 2){
        for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if(piece == 1 || piece == 3){
                    result = false;
                    break;
                }
            }
            if(result == false){
                break;
            }
        }
        if(result == true){
            console.log("PlAYER 2 HAS WON THE GAME BY CAPTURING ALL OF PLAYER 1'S PIECES.")
        }
        return result;
    }

    if(playerTurn == 1){
        for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if(piece == 2 || piece == 4){
                    result = false;
                    console.log(result);
                    break;
                }
            }
            if(result == false){
                break;
            }
        }
        if(result == true){
            console.log("PlAYER 1 HAS WON THE GAME BY CAPTURING ALL OF PLAYER 2'S PIECES.")
        }
        return result;
    }
}
var count = 0  
function validateMovement(board_p,piece,tile){
	board = deepCopy(board_p)
	count+=1
	var returnObject = function(isValid,reason,removePices){
		return {"isValid":isValid,"reason":reason,"removePices":removePices}
	}
	if (!emptyBlock(board,tile)){
		console.log("printing tile")
		console.log(board[tile.position[0]][tile.position[1]])
		console.log(tile.position)
		return returnObject(false,"Tile Not Empty",[])
	}
	if (backwardStraight(tile,board,piece)){
		return returnObject(false,"backward fails",[])
	}
	if (forwardStraight(tile,board,piece)){
		return returnObject(false,"forward fails",[])
	}
	if (forwardStraight(tile,board,piece)){
		return returnObject(false,"forward fails",[])
	}

	// MULTIPLE Capture
	if (piece.player == 1 ){
		board = deepCopy(board_p)
		var mc_right = multipleCaptureForward(board, piece.player, "right")
		var mc_left = multipleCaptureForward(board, piece.player, "left")
		console.log(mc_right)
		console.log("ml_right")
		console.log(mc_left)
		console.log("ml_left")
		if(mc_right.length>0){
			if ((mc_right[mc_right.length-1]==tile.position[1])
				&& (mc_right[mc_right.length-2]==tile.position[0])){
			return returnObject(true,"",[])
			}else{
				return returnObject(false,"multipleCapture on should be made",[])
			}
		}else if (mc_left.length>0){
			if ((mc_left[mc_left.length-1]==tile.position[1])
				&& (mc_left[mc_left.length-2]==tile.position[0])){
			return returnObject(true,"",[])
			}else{
				return returnObject(false,"multipleCapture should be made",[])
			}
		}
	}else if(piece.player == 2 ){
		board = deepCopy(board_p)
		var mc_right = multipleCaptureBackward(board, piece.player, "right")
		var mc_left = multipleCaptureBackward(board, piece.player, "left")
		console.log(mc_right)
		console.log("ml_right")
		console.log(mc_left)
		console.log("ml_left")
		if(mc_right.length>0){
			if ((mc_right[mc_right.length-1]==tile.position[1])
				&& (mc_right[mc_right.length-2]==tile.position[0])){
			return returnObject(true,"",[])
			}else{
				return returnObject(false,"multipleCapture on should be made",[])
			}
		}else if (mc_left.length>0){
			if ((mc_left[mc_left.length-1]==tile.position[1])
				&& (mc_left[mc_left.length-2]==tile.position[0])){
			return returnObject(true,"",[])
			}else{
				return returnObject(false,"multipleCapture should be made",[])
			}
		}

	}
	
	if (piece.player==1 || piece.king){
		board = deepCopy(board_p)
		var playa = piece.player
		if (piece.king){
			playa = 3
		}
		var mc_right = mandatoryCaptureForward(board, playa, "right")
		var mc_left = mandatoryCaptureForward(board, playa, "left")
		console.log(mc_right)
		console.log("mc_right")
		console.log(mc_left)
		console.log("mc_left")
		if(mc_right.length>0){
			for (var i =0;i<mc_right.length;i++){
				var element = mc_right[i]
				if ( element[0]==tile.position[0] && element[1]==tile.position[1] ){
					return returnObject(true,"",[])
				}
			}
			return returnObject(false,"mandatoryCapture on should be made",[])
		}else if (mc_left.length>0){
			for (var i =0;i<mc_left.length;i++){
				var element = mc_left[i]
				if ( element[0]==tile.position[0] && element[1]==tile.position[1] ){
					return returnObject(true,"",[])
				}
			}
			return returnObject(false,"mandatoryCapture should be made",[])
		}
	}else if (piece.player==2 || piece.king){
		board = deepCopy(board_p)
		var playa = piece.player
		if (piece.king){
			playa = 4
		}
		var mc_right = mandatoryCaptureBackward(board, playa, "right")
		var mc_left = mandatoryCaptureBackward(board, playa, "left")
		console.log(mc_right)
		console.log("mc_right")
		console.log(mc_left)
		console.log("mc_left")
		if(mc_right.length>0){
			for (var i =0;i<mc_right.length;i++){
				var element = mc_right[i]
				if ( element[0]==tile.position[0] && element[1]==tile.position[1] ){
					return returnObject(true,"",[])
				}
			}
			return returnObject(false,"mandatoryCapture on should be made",[])
		}else if (mc_left.length>0){
			for (var i =0;i<mc_left.length;i++){
				var element = mc_left[i]
				if ( element[0]==tile.position[0] && element[1]==tile.position[1] ){
					return returnObject(true,"",[])
				}
			}
			return returnObject(false,"mandatoryCapture should be made",[])
		}
	}
	board = deepCopy(board_p)

	if (!multipleMoveDiagonally){
		return returnObject(false,"Cant move more than one block",[])
	}


	// if (checkForKings(board)){
	// 	var mc_right = mandatoryCaptureKing(board, piece.player)
	// 	if(mc_right.length>0){
	// 		for (var i =0;i<mc_right.length;i++){
	// 			var element = mc_right[i]
	// 			if ( element[0]==tile.position[0] && element[1]==tile.position[1] ){
	// 				return returnObject(true,"",[])
	// 			}
	// 		}
	// 		return returnObject(false,"mandatory King Capture should be made",[])
	// 	}
	// }
	return returnObject(true,"",[])
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