/*
Check if destination is valid
*/
function validBlock(board,tile) {
	dest = tile.position
	if (board[dest[0]][dest[1]]) == 0{
		return true;
	}
	return false
}

function validateMove(board,piece,tile){
	validBlock(board,piece)
}