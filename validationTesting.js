/**
 * Created by zoltangercsak1 on 3/9/17.
 */

// move validations

function test(){
    var gameBoard = [
        [  1,  1,  0,  1,  0,  1,  0,  0 ],
        [  1,  2,  1,  0,  1,  0,  0,  0 ],
        [  0,  1,  0,  0,  0,  1,  0,  1 ],
        [  0,  0,  0,  2,  0,  0,  0,  0 ],
        [  0,  0,  0,  1,  0,  2,  0,  0 ],
        [  2,  0,  0,  0,  2,  2,  0,  0 ],
        [  0,  1,  0,  2,  0,  0,  0,  2 ],
        [  2,  0,  2,  0,  2,  0,  2,  0 ]
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
    function mandatoryCapturePlayer1(board, playerTurn) {
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
                        if (board[xAxis][yAxis] != playerTurn) {
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
                    // if (i - 2 >= 0 && j - 2 >= 0) {
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if (board[xAxis][yAxis] != playerTurn) {
                            if (board[xAxis - 1][yAxis + 1] == 0) { // this is assuming the empty spaces are integers like 0
                                temp.push(xAxis - 1);
                                temp.push(yAxis + 1);
                                moves.push(temp);
                            }
                        }
                    // }
                }

            }
        }
        return moves;
    }



    function multipleCapture(board, playerTurn) {
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
                         if (board[xAxis][yAxis].player != playerTurn) {
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
         return moves;
     }

    /*var x = mandatoryCapture(gameBoard, 1);
    console.log("Mandatory capture results-------------");
    for(i = 0; i < x.length; i++){
        var board = x[i];

        console.log(x[i].toString());

    }

    var x = mandatoryCapturePlayer2(gameBoard, 2);
    console.log("Mandatory capture results-------------");
    for(i = 0; i < x.length; i++){
        var board = x[i];

        console.log(x[i].toString());

    }*/

     var y = multipleCapture(gameBoard, 1);
     console.log("Multiple capture results--------------");
     for(i = 0; i < y.length; i++){
         var board = y[i];

         console.log(y[i].toString());

     }


}