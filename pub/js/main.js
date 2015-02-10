$(document).ready(function(){
    var cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
//    function Board(){
//        document.write('<table id="chessboard">');
//        $('#chessboard').appendTo('tr');
//            
//        
//        document.write('</table>');
//    }
    
    function Piece(color, name, position){
       this._color = color;
       this._name = name;
       this._position = position;
       }
    
    var whiteQueen = new Piece('white', 'queen', 'D1');
    var whiteKing = new Piece('white', 'king', 'E1');
    
    
    Piece.prototype.type = 'piece';
    
    
    console.log(whiteQueen);
    
});
