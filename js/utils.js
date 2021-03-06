function initJson(){
	 var gameBoard = [
        [  -1,  1,  -1,  1,  -1,  1,  -1,  1 ],
        [  1,  -1,  1,  -1,  1,  -1,  1,  -1 ],
        [  -1,  1,  -1,  1,  -1,  1,  -1,  1 ],
        [  0,  -1,  0,  -1,  0,  -1,  0,  -1 ],
        [  -1,  0,  -1,  0,  -1,  0,  -1,  0 ],
        [  2,  -1,  2,  -1,  2,  -1,  2,  -1 ],
        [  -1,  2,  -1,  2,  -1,  2,  -1,  2 ],
        [  2,  -1,  2,  -1,  2,  -1,  2,  -1 ]
    ];

    var data = {};
    data.board = gameBoard;
    data.currentPlayer = 1;
    data.players = [localStorage.getItem("playername")];
    data.win = false;
    return data;
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
    return localStorage.getItem("playe2rname")
}