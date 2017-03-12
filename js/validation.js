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


    function mandatoryCapture(board, playerTurn) {
        var moves = [];

        for (var i = 0; i < board.length; i++) {
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j];
                if (piece.player == playerTurn) {
                    var temp = [];
                    if (i + 2 < 8 && j + 2 < 8) {
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if ((board[xAxis][yAxis]).player != playerTurn && board[xAxis][yAxis] != 0) {
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
                        if ((board[xAxis][yAxis]).player != playerTurn && board[xAxis][yAxis] != 0) {
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
                if (piece.player == playerTurn) {
                    var temp = [];
                    if (i - 2 >= 0 && j + 2 < 8) {
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if ((board[xAxis][yAxis]).player != playerTurn && board[xAxis][yAxis] != 0) {
                            if (board[xAxis - 1][yAxis + 1] == 0) { // this is assuming the empty spaces are integers like 0
                                temp.push(xAxis - 1);
                                temp.push(yAxis + 1);
                                moves.push(temp);
                            }
                        }
                    }
                }
                else if(piece == 4){
                    var temp = [];
                    if (i - 2 >= 0 && j + 2 < 8) {
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if ((board[xAxis][yAxis]).player != playerTurn && board[xAxis][yAxis] != 0 ) {
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
                if (piece.player == playerTurn) {
                    var temp = [];
                    while(i+2 < 8 && j+2 < 8) {
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if ((board[xAxis][yAxis]).player != playerTurn ) {
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
                        if ((board[xAxis][yAxis]).player != playerTurn ) {
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

        var length = moves.length;
        var returnArray = [];

        returnArray.push(moves[length - 2]);
        returnArray.push(moves[length - 1]);

        return returnArray; // return only last position where the piece should be
    }

    function multipleCaptureBackward(board, playerTurn) {
        var moves = []; // contains all the multiple capture moves.

        for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
            var temp_board = board[i];

            for (var j = 0; j < board.length; j++) {
                var piece = board[i][j]; // gets each checker piece or an empty space.
                //console.log("piece here" + piece);
                if (piece.player == playerTurn) {
                    var temp = [];
                    while(i-2 >= 0 && j+2 < 8) {
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if ((board[xAxis][yAxis]).player != playerTurn ) {
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
                        if ((board[xAxis][yAxis]).player != playerTurn) {
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

        var length = moves.length;
        var returnArray = [];

        returnArray.push(moves[length - 2]);
        returnArray.push(moves[length - 1]);

        return returnArray; // return only last position where the piece should be
    }


    function mandatoryCaptureKing(board,playerturn){
        var moves = [];
        var temp_b =[];
        var temp_f =[];
        if(playerturn == 1){
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
        }
        else if(playerturn == 2){
            for (var i = 7 ; i >= 0; i--){
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++){
                    var piece = board[i][j];
                    if (piece == 4){
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
        }

        return moves;

    }


    function multipleCaptureKing(board,playerturn){
        var moves = [];
        var temp_b =[];
        var temp_f =[];
        if(playerturn == 1){
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
        }

        else if(playerturn == 2){
            for (var i = 7 ; i >= 0; i--){
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
        }

        var length = moves.length;
        var returnArray = [];

        returnArray.push(moves[length - 2]);
        returnArray.push(moves[length - 1]);

        return returnArray;

    }


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
                                window.alert("Piece became a King");
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
                                window.alert("Piece became a King");
                            }
                        }
                    }
                }
            }

        }

    }


    function winningCheckKingsforward(board,playerTurn){
        var result = true;
        if(playerTurn == 1) {
            // check board for the pieces of player 2
            for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j]; // gets each checker piece or an empty space.
                    // console.log(piece);
                    if (piece == 4){ // check if other player still has a piece
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if(board[xAxis] [yAxis] == 1){
                            if(board[xAxis -1] [yAxis + 1] == 0){
                                result = false;
                                break;
                            }
                        }
                    }
                }
                break;
            }

            return result;
        }

        else if(playerTurn == 2) {

            // check board for the pieces of player 2
            for (var i = 0; i< board.length; i++) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j]; // gets each checker piece or an empty space.
                    if (piece == 3){ // check if other player still has a piece
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if(board[xAxis] [yAxis] == 2){
                            if(board[xAxis + 1] [yAxis + 1] == 0){
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

    function winningCheckKingsbackward(board,playerTurn){
        var result = true;
        if(playerTurn == 2) {
            // check board for the pieces of player 2
            for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j]; // gets each checker piece or an empty space.
                    // console.log(piece);
                    if (piece == 3){ // check if other player still has a piece
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if(board[xAxis] [yAxis] == 2){
                            if(board[xAxis -1] [yAxis + 1] == 0){
                                result = false;
                                break;
                            }
                        }
                    }
                }
                break;
            }

            return result;
        }

        else if(playerTurn == 1) {

            // check board for the pieces of player 2
            for (var i = 0; i< board.length; i++) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j]; // gets each checker piece or an empty space.
                    if (piece == 4){ // check if other player still has a piece
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if(board[xAxis] [yAxis] == 1){
                            if(board[xAxis + 1] [yAxis + 1] == 0){
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

    function winningCheckforKings(board, playerTurn){
        var result = true;
        if(playerTurn == 1){
            var forward = winningCheckKingsforward(board, 1);
            var backward = winningCheckKingsforward(board, 1);

            if(forward == true && backward == true){
                result = true;
            }
            else{
                result = false
            }
        }
        if(playerTurn == 2){
            var forward = winningCheckKingsforward(board, 2);
            var backward = winningCheckKingsforward(board, 2);

            if(forward == true && backward == true){
                result = true;
            }
            else{
                result = false
            }
        }
        return result;
    }

    function winningCheckForBlocks(board, playerTurn){ // implement for king
        var result = true;
        if(playerTurn == 1) {
            // check board for the pieces of player 2
            for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j]; // gets each checker piece or an empty space.
                    // console.log(piece);
                    if (piece == 2){ // check if other player still has a piece
                        var xAxis = i - 1;
                        var yAxis = j + 1;
                        if(board[xAxis] [yAxis] == 1){
                            if(board[xAxis -1] [yAxis + 1] == 0){
                                result = false;
                                break;
                            }
                        }
                    }
                }
                break;
            }
            if(result == true){
                console.log("Player 1 has won the game by blocking all of player 2's pieces");
            }
            return result;
        }

        else if(playerTurn == 2) {

            // check board for the pieces of player 2
            for (var i = 0; i< board.length; i++) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j]; // gets each checker piece or an empty space.
                    if (piece == 1){ // check if other player still has a piece
                        var xAxis = i + 1;
                        var yAxis = j + 1;
                        if(board[xAxis] [yAxis] == 2){
                            if(board[xAxis + 1] [yAxis + 1] == 0){
                                result = false;
                                break;
                            }
                        }
                    }
                }
                break;
            }
            if (result == true) {
                console.log("Player 2 has won the game by blocking all of player 1's pieces");
            }
        }
        return result;
    }

    function winCheckByCapture(board, playerTurn){
        console.log("yolo" + playerTurn); 
        
        var result = true;
        if(playerTurn == 2){
            for (var i = 7; i >= 0; i--) { //nested for loop to navigate to each box in a board
                var temp_board = board[i];

                for (var j = 0; j < board.length; j++) {
                    var piece = board[i][j];
                    //console.log(piece);
                    if(piece == 1){
                        //console.log("set false");
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
                    //console.log("entering second for loop ");
                    //console.log("piece"+piece);
                    if(piece == 2){
                        result = false;
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

    function validateMovement(piece, move, board){
       var xAxis = move[0];
       var yAxis = move[1];
       var validate = true;
       var reason;
       var returnArray = [];

       if(board[xAxis][yAxis] == -1){  // make sure the non white spaces are -1 .
           console.log("You can only move diagonally");
           validate = false;
           reason = "You can only move diagonally";
           returnArray.push(validate);
           returnArray.push(reason);
           return returnArray;
       }

       var wincapture = winCheckByCapture(board, piece.player);

       var winblock = winningCheckForBlocks(board, piece.player);

       var winKing = winningCheckforKings(board, piece.player);

       var mandatory;
       var multipleCapture;

       if (wincapture == false || (winblock == false && winKing == false)){
           if(piece.player == 1){
               mandatory = mandatoryCapture(board, piece.player);
               multipleCapture = multipleCaptureForward(board, piece.player);
           }
           else{
               mandatory = mandatoryCapturePlayer2(board, piece.player);
               multipleCapture = multipleCaptureBackward(board, piece.player);
           }

           var multipleCaptureKingReturn = multipleCaptureKing(board, piece.player);

           // var kinging = kinging(board, piece.player);


           for(var i = 0; i< mandatory.length ; i++){
               var temp = mandatoryCapture[i];
               console.log("temp array " + temp);
               if(temp[0] ==  xAxis && temp[1] == yAxis){
                   validate = true;
                   reason = "validated";
                   break;
               }
               else {
                   validate = false;
                   reason = "There is a mandatory capture that should be made";
               }
           }

           if(validate == false){
                returnArray.push(validate);
                returnArray.push(reason);
                return returnArray;
           }

           //check multiple capture
           if(xAxis == multipleCapture[0] && yAxis == multipleCapture[1]){
               validate = true;
               reason = "validated";
           }
           else{
               validate = false;
               reason = "A multiple capture can be made";
           }

           if(validate == false){
                returnArray.push(validate);
                returnArray.push(reason);
                return returnArray;
           }

           //check multiple capture for king
           if(xAxis == multipleCaptureKingReturn[0] && yAxis == multipleCaptureKingReturn[1]){
               validate = true;
           }
           else{
               validate = false;
               reason = "A multiple capture can be made";
           }

           if(validate == false){
                returnArray.push(validate);
                returnArray.push(reason);
                return returnArray;
           }
           else{
                returnArray.push(validate);
                returnArray.push(reason);

                return returnArray;

           }
       }
    }

// }
