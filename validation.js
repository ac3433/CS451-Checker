/**
 * Created by kashyap1 on 3/9/17.
 */
function mandatoryCapture(board, playerTurn) {
    var moves = [];

    for(var i = 0; i < board.length; i++){ // nested forloop for moving to each square of the board
        var temp_board = board[i];

        for(var j = 0; j < board.length; j++){
            var piece = board[i][j];
            if(piece.player == playerTurn){ // checks if the piece on the board belongs to the player making the move.
                if(piece.type == "king"){
                    var temp = [];      // stores all the mandatory capture moves on the board for the player(playerturn) 
                    if((i+2 < 8  && j+2 < 8) && (i-2 >= 0 && j-2 >= 0)){ // checks to see if the board is out of bounds
                        var xAxis = i+1;
                        var yAxis = j+1;
                        var back_xAxis = i-1;
                        var back_yAxis = j-1;
                        
                        //checks to see if the next diagonal space forward/backward is a checker piece of the opponent. 
                        if((board[xAxis][yAxis].player !=  playerTurn) || (board[back_xAxis][back_yAxis].player !=  playerTurn)){
                            if(board[xAxis+1][yAxis+1]== 0){ // checks to see if two diagonal spaces forward is an empty space (0)
                                temp.add(xAxis+1); // this is a tuple array since JS doesnt have tuples.
                                temp.add(yAxis+1); // this is a tuple array since JS doesnt have tuples. 
                                moves.add(temp); // adds this tuple to the mandatory capture array of tuples. 
                            }
                             
                            else if (board[back_xAxis-1][back_yAxis-1]== 0){// checks to see if two diagonal spaces backward is an empty space (0)
                                temp.add(back_xAxis-1);
                                temp.add(back_yAxis-1);
                                moves.add(temp);
                            }
                        }


                    }
                }
                else{ // this is for a non king type piece that uses the same algorithm as the one above but just checks for forward movement.
                    var temp = [];
                    if(i+2 < 8  && j+2 < 8){
                        var xAxis = i+1;
                        var yAxis = j+1;
                        if(board[xAxis][yAxis].player !=  playerTurn){
                            if(board[xAxis+1][yAxis+1]== 0){ // this is assuming the empty spaces are integers like 0
                                temp.add(xAxis+1);
                                temp.add(yAxis+1);
                                moves.add(temp);
                            }
                        }
                    }
                }
            }
        }

    }
    return moves;
}
