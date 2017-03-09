/**
 * Created by kashyap1 on 3/9/17.
 */
function mandatoryCapture(board, playerTurn) {
    var moves = [];

    for(var i = 0; i < board.length; i++){
        var temp_board = board[i];

        for(var j = 0; j < board.length; j++){
            var piece = board[i][j];
            if(piece.player == playerTurn){
                if(piece.type == "king"){
                    var temp = [];
                    if((i+2 < 8  && j+2 < 8) && (i-2 >= 0 && j-2 >= 0)){
                        var xAxis = i+1;
                        var yAxis = j+1;
                        var back_xAxis = i-1;
                        var back_yAxis = j-1;

                        if((board[xAxis][yAxis].player !=  playerTurn) || (board[back_xAxis][back_yAxis].player !=  playerTurn)){
                            if(board[xAxis+1][yAxis+1]== 0){
                                temp.add(xAxis+1);
                                temp.add(yAxis+1);
                                moves.add(temp);
                            }
                            else if (board[back_xAxis-1][back_yAxis-1]== 0){
                                temp.add(back_xAxis-1);
                                temp.add(back_yAxis-1);
                                moves.add(temp);
                            }
                        }


                    }
                }
                else{
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