function boardToStr(board_g){
  board = deepcopy(board_g)
  var arr = "" 
  for (var i = 0; i < board.length; i++) {
   arr+= "|"
    for (var j = 0; j < board[i].length; j++){
      if (j!=0){
        arr+=" "
      }
      if (board[i][j] == -1 || board[i][j] == 0)
        arr +="-";
      else if (board[i][j] == 2)
        arr +="x";
      else if (board[i][j] == 4)
        arr +="X";
      else if (board[i][j] == 1)
        arr +="o";
      else if (board[i][j] == 3)
        arr +="O";
      else
        console.log("SSSSSSSSSSSSSSSSSs")
      }
  arr+="|"
  }
  return arr
}

function deepcopy(arr){
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