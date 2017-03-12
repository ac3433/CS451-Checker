var init = false
var FirebaseHandler = function (){
  this.config = {
    apiKey: "AIzaSyDMPRg760qLZsPv7vyXW41BXHSTffciP7k",
    databaseURL: "https://cs-451.firebaseio.com",
  };

  // A sample checkers room
  this.sessionName = "hello2"
  this.App = firebase.initializeApp(config);
  this.session = null
  console.log(App.name);  // "[DEFAULT]"
  this.defaultDatabase = App.database();

  // GET A reference to the firebase-checkers room
  var sessionRef = firebase.database().ref('/sessions/'+sessionName);
  this.main = null
  sessionRef.on('value', function(snapshot) {
        this.session = snapshot.val()
        if (!init){
          start(this.session,this)
          init = true
        }else{
           main.update(session)
        }
        console.log("got firebase update")
  });
  this.appendMove = function(moves){
    // console.log("append move called")
    var updates = {};
    res = firebase.database().ref('/sessions/'+sessionName+'/moves/').set(moves);
  }
  this.updateCurrentPlayer= function(player){
    // console.log("append move called")
    res = firebase.database().ref('/sessions/'+sessionName+'/currentPlayer/').set(player);
  }
}

FirebaseHandler()

var start = function(data,fbaseHandler) { 

  var pieces = [];
  var tiles = []; 
  var moves = []
  fbaseHandler.main = this
  this.session = data
  var Player = 0

  if (getName() == data.players[0]){
     Player = 1
     console.log("p" + Player)
  }else{
     Player = 2
      console.log("p" + Player)
  }

  this.update = function (session){
        this.session = session
        var diff = moves.length - session.moves.length
        if (diff ==0){
          return
        }
        for (var i = moves.length ; i < session.moves.length; i++) {
          console.log("Appending move")
          var mv = session.moves[i]
          moves.push(mv)
          var tile = tiles[mv.tileID];
          var piece = pieces[mv.pieceID];
          piece.move(tile)
        }
    }
  
  //distance formula
  var dist = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
  }
  //Piece object - there are 24 instances of them in a checkers game
  function Piece (element, position) {
    //linked DOM element
    this.element = element;
    //positions on gameBoard array in format row, column
    this.position = position; 
    //which player's piece i it
    this.player = '';
    //figure out player by piece id
    if(this.element.attr("id") < 12)
      this.player = 1;
    else
      this.player = 2;
    //makes object a king
    this.king = false;
    this.makeKing = function () {
      this.element.css("backgroundImage", "url('king.png')");
      this.king = true;
    }
    //moves the piece
    this.move = function (tile) { 
      this.element.removeClass('selected'); 
      //remove the mark from Board.board and put it in the new spot
      Board.board[this.position[0]][this.position[1]] = 0;
      Board.board[tile.position[0]][tile.position[1]] = this.player;
      this.position = [tile.position[0], tile.position[1]];
      //change the css using board's dictionary
      this.element.css('top', Board.dictionary[this.position[0]]);
      this.element.css('left', Board.dictionary[this.position[1]]);
      //if piece reaches the end of the row on opposite side crown it a king (can move all directions)
      if(!this.king && (this.position[0] == 0 || this.position[0] == 7 )) 
        this.makeKing();
      return true;
    };
    
    

    this.remove = function () {
      //remove it and delete it from the gameboard
      this.element.css("display", "none");
      if(this.player == 1) $('#player2').append("<div class='capturedPiece'></div>");
      if(this.player == 2) $('#player1').append("<div class='capturedPiece'></div>");
      Board.board[this.position[0]][this.position[1]] = 0;
      //reset position so it doesn't get picked up by the for loop in the canOpponentJump method
      this.position = [];
    }
  }
  
  function Tile (element, position) {
    //linked DOM element
    this.element = element;
    //position in gameboard
    this.position = position;
    //if tile is in range from the piece
    this.inRange = function(piece) {
      if(dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == Math.sqrt(2)) {
        //regular move
        return 'regular';
      } else if(dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == 2*Math.sqrt(2)) {
        //jump move
        return 'jump';
      }
    };
  }
  
  //Board object - controls logistics of game
  var Board = {
    board: data.board,
    playerTurn: 1,
    tilesElement: $('div.tiles'),
    //dictionary to convert position in Board.board to the viewport units
    dictionary: ["0vmin", "10vmin", "20vmin", "30vmin", "40vmin", "50vmin", "60vmin", "70vmin", "80vmin", "90vmin"],
    //initialize the 8x8 board
    initalize: function () {
      var countPieces = 0;
      var countTiles = 0;
      for (row in this.board) { //row is the index
        for (column in this.board[row]) { //column is the index
          //whole set of if statements control where the tiles and pieces should be placed on the board
          if(row%2 == 1) {
            if(column%2 == 0) {
              this.tilesElement.append("<div class='tile' id='tile"+countTiles+"' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles += 1;
            }
          } else {
            if(column%2 == 1) {
              this.tilesElement.append("<div class='tile' id='tile"+countTiles+"' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles += 1;
            }
          }
          if(this.board[row][column] == 1) {
            $('.player1pieces').append("<div class='piece' id='"+countPieces+"' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
            pieces[countPieces] = new Piece($("#"+countPieces), [parseInt(row), parseInt(column)]);
            countPieces += 1;
          } else if(this.board[row][column] == 2) {
            $('.player2pieces').append("<div class='piece' id='"+countPieces+"' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
            pieces[countPieces] = new Piece($("#"+countPieces), [parseInt(row), parseInt(column)]);
            countPieces += 1;
          }
        }
      }
    },
  }
  
  //initialize the board
  Board.initalize();
  if (data.moves != null){
    this.update(data);
  }
  
  /***
  Events
  ***/
  
  //select the piece on click if it is the player's turn
  $('.piece').on("click", function () {
  var isMyPiece = "player"+Player+"pieces"  == $(this).parent().attr("class").split(' ')[0] 
  // console.log("is my piece " + isMyPiece)
  // console.log("fbPlayer, current",session.currentPlayer,Player)
  var isPlayersTurn = isMyPiece && session.currentPlayer == Player;
var selected
    if(isPlayersTurn) {
      if($(this).hasClass('selected')) selected = true;
      $('.piece').each(function(index) {$('.piece').eq(index).removeClass('selected')});
      if(!selected) {
        $(this).addClass('selected');
      }
    }
  });
  
  //reset game when clear button is pressed
  $('#cleargame').on("click", function () {
    Board.clear();
  });
  
  //move piece when tile is clicked
  $('.tile').on("click", function () {
    //make sure a piece is selected
    if($('.selected').length != 0) {
      //find the tile object being clicked
      var tileID = $(this).attr("id").replace(/tile/, '');
      var tile = tiles[tileID];

      //find the piece being selected
      var pieceID = $('.selected').attr("id")
      var piece = pieces[pieceID];
     
      //check if the tile is in range from the object
      var inRange = tile.inRange(piece);
     
      moveData = {"tileID":tileID,"pieceID":pieceID}
      piece.move(tile);
      moves.push(moveData)
      fbaseHandler.appendMove(moves)
      var temp = 0
      // log.Println(this.session.currentPlayer)
      if (session.currentPlayer == 2){
        temp = 1
      }else{
        temp = 2  
      }
      fbaseHandler.updateCurrentPlayer(temp)
    }
  });
  
}