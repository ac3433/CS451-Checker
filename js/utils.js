function initJson(){
	 var gameBoard = 
     [
     [-1,1,-1,1,-1,1,-1,1],
     [1,-1,1,-1,1,-1,1,-1],
     [-1,1,-1,1,-1,1,-1,1],
     [0,-1,0,-1,0,-1,0,-1],
     [-1,0,-1,0,-1,0,-1,0],
     [2,-1,2,-1,2,-1,2,-1],
     [-1,2,-1,2,-1,2,-1,2],
     [2,-1,2,-1,2,-1,2,-1]]

    var data = {};
    data.board = gameBoard;
    data.currentPlayer = 1;
    data.players = [localStorage.getItem("playername")];
    data.win = false;
    return data;
}

function getDiagonal(board,pt1,pt2){
    var arr = []
    x1 = pt1[0]
    y1 = pt1[1]
    x2 = pt2[0]
    y2 = pt2[0]
    var incx = 1
    var incy = 1
    if ((x2-x1)<0)
        incx = -1;
    if ((y2-y1)<0)
        incy = -1;
   for (var i = 1 ; i < Math.abs(x2-x1); i++) {
       arr.push(board[x1+incx][y1+incy])
   }
   return arr
}

function getName(){
	 if (localStorage.getItem("playername") == null){
    	localStorage.setItem("playername", (0|Math.random()*9e6).toString(36));
    }
    return localStorage.getItem("playername")
}
// FOR DEBUGGING ONLY
function getName2(){
	 if (localStorage.getItem("player2name") == null){
    	localStorage.setItem("player2name", (0|Math.random()*9e6).toString(36));
    }
    return localStorage.getItem("player2name")
}

// BASE BOARD
// var bo = [
//      [-1,1,-1,1,-1,1,-1,1],
//      [1,-1,1,-1,1,-1,1,-1],
//      [-1,1,-1,1,-1,1,-1,1],
//      [0,-1,0,-1,0,-1,0,-1],
//      [-1,0,-1,0,-1,0,-1,0],
//      [2,-1,2,-1,2,-1,2,-1],
//      [-1,2,-1,2,-1,2,-1,2],
//      [2,-1,2,-1,2,-1,2,-1]]
     

// MULTIPLE CAPTURE FORWARD RIGHT
// [
//      [-1,1,-1,1,-1,1,-1,1],
//      [1,-1,2,-1,1,-1,1,-1],
//      [-1,1,-1,0,-1,1,-1,1],
//      [0,-1,0,-1,2,-1,0,-1],
//      [-1,0,-1,0,-1,0,-1,0],
//      [2,-1,2,-1,2,-1,2,-1],
//      [-1,2,-1,2,-1,2,-1,2],
//      [2,-1,2,-1,2,-1,2,-1]]

// MULTiPLE CAPTURE FORWARD RIGHT KING
// [
//      [-1,0,-1,1,-1,1,-1,1],
//      [2,-1,1,-1,1,-1,1,-1],
//      [-1,1,-1,0,-1,1,-1,1],
//      [0,-1,0,-1,1,-1,0,-1],
//      [-1,0,-1,0,-1,0,-1,0],
//      [2,-1,2,-1,2,-1,2,-1],
//      [-1,2,-1,2,-1,2,-1,2],
//      [2,-1,2,-1,2,-1,2,-1]]

// MULTIPLE CAPTURE FORWARD LWEFT

// [
//      [-1,1,-1,1,-1,1,-1,1],
//      [1,-1,1,-1,2,-1,1,-1],
//      [-1,1,-1,0,-1,1,-1,1],
//      [0,-1,2,-1,0,-1,0,-1],
//      [-1,0,-1,0,-1,0,-1,0],
//      [2,-1,2,-1,2,-1,2,-1],
//      [-1,2,-1,2,-1,2,-1,2],
//      [2,-1,2,-1,2,-1,2,-1]]