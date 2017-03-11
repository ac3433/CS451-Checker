/**
 * Created by zoltangercsak1 on 3/9/17.
 */

// move validations

function test(){
    var gameBoard = [
        [  0,  1,  0,  1,  2,  1,  0,  1 ],
        [  1,  0,  1,  0,  1,  0,  0,  0 ],
        [  0,  1,  0,  1,  0,  2,  0,  1 ],
        [  0,  0,  0,  0,  0,  0,  0,  0 ],
        [  0,  0,  0,  2,  0,  0,  0,  0 ],
        [  2,  0,  0,  0,  2,  0,  2,  0 ],
        [  0,  2,  0,  2,  0,  2,  0,  2 ],
        [  3,  0,  2,  0,  2,  0,  2,  0 ]
    ];

    for(i=0; i < gameBoard.length; i++)
    {
        var word = "";
        var k = gameBoard[i];
        for (j = 0; j < gameBoard.length; j++){
            word += (gameBoard[i][j] + " ");
        }
        console.log(word);

    }


    /**
     * Created by kashyap1 on 3/9/17.
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
                }
                else if( piece == 3){
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
        return moves;
    }

    function mandatoryCapturePlayer2(board, playerTurn) {
        var moves = [];

        for (var i = board.length - 1 ; i >= 0; i--) {
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
                }
                else if(piece == 3){
                    var temp = [];
                    if (i - 2 >= 0 && j + 2 < 8) {
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis] != playerTurn && board[xAxis][yAxis] != 0 ) {
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
        return moves;
    }

    function multipleCaptureForward(board, playerTurn) {
        var moves = []; // contains all the multiple capture moves.

        for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                //console.log("piece here" + piece);
                if (piece == playerTurn) {
                    var temp = [];
                    while(i+2 < 8 && j+2 < 8) {
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis].player != playerTurn ) {
                            if (board[xAxis + 1][yAxis + 1] == 0) {
                                //i+2;
                                //j+2;
                                i = xAxis + 1;
                                j = yAxis + 1;
                                temp.push(i);
                                temp.push(j);
                            }
                            else {
                                break;
                            }
                        }
                    }
                    if (temp.length > 2) {
                        moves.push(temp);
                    }  // see if the checker piece is one of the player. Note: check for empty space
                }
                else if(piece == 3){
                    var temp = [];
                    while(i+2 < 8 && j+2 < 8) {
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis].player != playerTurn ) {
                            if (board[xAxis + 1][yAxis + 1] == 0) {
                                //i+2;
                                //j+2;
                                i = xAxis + 1;
                                j = yAxis + 1;
                                temp.push(i);
                                temp.push(j);
                            }
                            else {
                                break;
                            }
                        }
                    }
                    if (temp.length > 2) {
                        moves.push(temp);
                    }  // see if the checker piece is one of the player. Note: check for empty space

                }
                //console.log(i,j);
            }
        }
        return moves; // return only last position where the piece should be
    }

    function multipleCaptureBackward(board, playerTurn) {
        var moves = []; // contains all the multiple capture moves.

        for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                //console.log("piece here" + piece);
                if (piece == playerTurn) {
                    var temp = [];
                    while(i-2 >= 0 && j+2 < 8) {
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis].player != playerTurn ) {
                            if (board[xAxis - 1][yAxis + 1] == 0) {
                                //i+2;
                                //j+2;
                                i = xAxis - 1;
                                j = yAxis + 1;
                                temp.push(i);
                                temp.push(j);
                            }
                            else {
                                break;
                            }
                        }
                    }
                    if (temp.length > 2) {
                        moves.push(temp);
                    }  // see if the checker piece is one of the player. Note: check for empty space
                }
                else if(piece == 3){
                    var temp = [];
                    while(i-2 >= 0 && j+2 < 8) {
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis].player != playerTurn) {
                            if (board[xAxis - 1][yAxis + 1] == 0) {
                                //i+2;
                                //j+2;
                                i = xAxis - 1;
                                j = yAxis + 1;
                                temp.push(i);
                                temp.push(j);
                            }
                            else {
                                break;
                            }
                        }
                    }
                    if (temp.length > 2) {
                        moves.push(temp);
                    }  // see if the checker piece is one of the player. Note: check for empty space

                }
                //console.log(i,j);
            }
        }
        return moves; // return only last position where the piece should be
    }


    // var x = mandatoryCapture(gameBoard, 2);
    // console.log("Mandatory capture Player 2 results-------------");
    // for(i = 0; i < x.length; i++){
    //     var board = x[i];
    //
    //     console.log(x[i].toString());
    //
    // }
    //
    // var x = mandatoryCapturePlayer2(gameBoard, 1);
    // console.log("Mandatory capture Player 1 results-------------");
    // for(i = 0; i < x.length; i++){
    //     var board = x[i];
    //
    //     console.log(x[i].toString());
    //
    // }

    // var y = multipleCaptureKing(gameBoard, 1);
    // console.log("Multiple capture King results--------------");
    // for(i = 0; i < y.length; i++){
    //     var board = y[i];
    //
    //     console.log(y[i].toString());
    //
    // }

    function mandatoryCaptureKing(board,playerturn){
        var moves = [];
        var temp_b =[];
        var temp_f =[];
        for (var i = 0 ; i < board.length; i++){
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++){
                var piece = board[i][j];
                if (piece == 3){
                    temp_b = mandatoryCapture(board,playerturn);
                    temp_f = mandatoryCapturePlayer2(board,playerturn);
                }
            }
            for(var x = 0; x < temp_b.length; x ++){
                moves.push(temp_b[x]);
            }
            for(var y = 0; y < temp_f.length; y ++){
                moves.push(temp_f[y]);
            }
        }
        return moves;

    }


    function multipleCaptureKing(board,playerturn){
        var moves = [];
        var temp_b =[];
        var temp_f =[];
        for (var i = 0 ; i < board.length; i++){
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++){
                var piece = board[i][j];
                if (piece == 3){
                    temp_b = multipleCaptureBackward(board,playerturn);
                    temp_f = multipleCaptureForward(board,playerturn);
                }
            }
            for(var x = 0; x < temp_b.length; x ++){
                moves.push(temp_b[x]);
            }
            for(var y = 0; y < temp_f.length; y ++){
                moves.push(temp_f[y]);
            }
        }
        return moves;

    }

    // var x = mandatoryCaptureKing(gameBoard, 1);
    // console.log("Mandatory capture King results-------------");
    // for(i = 0; i < x.length; i++){
    //     var board = x[i];
    //
    //     console.log(x[i].toString());
    //
    // }

    function kinging(board, playerTurn){

        if(playerTurn == 1) {
            var position = [[7,0], [7,1], [7,2],[7,3],[7,4],[7,5],[7,6],[7,7]];
            for (var i = 0; i < board.length; i++) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j]; // gets each checker piece or an empty space.

                    if (piece == 1) {
                        for (var k = 0; k < position.length; k++) {

                            if ((position[k][0] == i ) && (position[k][1] == j )) {
                                piece == 3;
                                console.log("Piece became a King");
                            }
                        }
                    }


                }
            }
        }
        else if(playerTurn == 2){
            var position = [[0,7], [0,6], [0,5],[0,4],[0,3],[0,2],[0,1],[0,0]];
            for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j]; // gets each checker piece or an empty space.

                    if (piece == 2) {
                        for (var k = 0; k < position.length; k++) {

                            if ((position[k][0] == i ) && (position[k][1] == j )) {
                                piece == 4;
                                console.log("Piece became a King");
                            }
                        }
                    }
                }
            }

        }

    }

    console.log("Kinging results-------------");
    var x = kinging(gameBoard, 2);

    // for(i = 0; i < x.length; i++){
    //     var board = x[i];
    //
    //     console.log(x[i].toString());
    //
    // }

}
