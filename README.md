# CS451-Checker
Checker Project

Project Description by file

### How it works 
#### lobby
  - When a user opens the website he is redirected to a game room.
  - When he leaves the game room is destroyed.
  - @paritosh-gupta will be implementing this with firebase. 
  
#### Main Game
  
- When you are in a lobby with another player the game starts. At this point the base json structure will sync with firebase.
- At this point both players will also see a board and the currentplayer number.

### Now the actual game begins
 - Every Move that a person makes will be validated.
 - If move is invalid then fail the move
 - Valid moves are appended to the database
 - Format of move = {"move":[source-index,dest-index],"player":1}
 - Play game while win==null
 - If a player wins we update the database. And then display a win screen accordingly.

#### Base json structure
```json
{
  "board" : [[0,0,0,0,0,0,0,0,],[1,1,1,1,1,1,1,]],
  "players" : ["1","2"],
  "currentPlayer" : 1,
  "Win" : null
  "Moves" : [{"move":[source-index,dest-index],"player":1},{"move":[source-index,dest-index],"player":1}]
}
```
firebase info
```conf
Project ID:  cs-451
Web API Key:  AIzaSyDMPRg760qLZsPv7vyXW41BXHSTffciP7k
url: https://console.firebase.google.com/project/cs-451

```
