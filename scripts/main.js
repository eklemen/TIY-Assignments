var _ = require('lodash')
function print(board){
    
    console.log('<tabel class="chessboard">');
    
    _.forEach(board, function(row, rank){
        var array = new Array(8);
        for (var i = 0; i < 8; i++){
            array[i] = [' '];
        }
      // Before any cells are printed...

      _.forEach(row, function(square, file){

          // In here, we have `rank`, `file`, and `square`...

      }); // END foreach(row)

      // After all the cells are printed...

  }); // END foreach(board)

  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} // END print


























//var board = [
//['R','N','B','Q','K','B','N','R'],
//['P','P','P','P','P','P','P','P'],
//[' ',' ',' ',' ',' ',' ',' ',' '],
//[' ',' ',' ',' ',' ',' ',' ',' '],
//[' ',' ',' ',' ',' ',' ',' ',' '],
//[' ',' ',' ',' ',' ',' ',' ',' '],
//['p','p','p','p','p','p','p','p'],
//['r','n','b','q','k','b','n','r'],
//];
//
//var printBoard = function() {console.log(board.join('\n') + '\n\n');}
//
//function move (toY, toX, fromY, fromX){
//    toX = toX -1;
//    toY = toY - 1;
//    fromX = fromX - 1;
//    fromY = fromY -1;
//    board[toY][toX] = board[fromY][fromX];
//    board[fromY][fromX] = ' ';
//    printBoard();
//}
//
//// toY X frmY X
//move(5, 5, 7, 5);
//move(4, 4, 2, 4);
//move(4, 4, 5, 5);
//move(3, 8, 2, 8);
//move(6, 2, 7, 2);

// This is the code to manually move each piece, which the code block of the function move was based on.

// move kings's pawn forward 2
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n'));

//console.log('\n\n');
//
//
//board[3][3] = board[1][3];
//board[1][3] = ' ';
//console.log(board.join('\n'));
//
//console.log('\n\n');
//
//board[3][3] = board[4][4];
//board[4][4] = ' ';
//console.log(board.join('\n'));