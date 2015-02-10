$(document).ready(function(){
    var cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    function Board(){
        
    }
    
    function Piece(color, name, position){
       this._color = color;
       this._name = name;
       this._position = position;
   }
    
    var whiteQueen = new Piece('white', 'queen', "D1");
    Piece.prototype = {
    }; 
    console.log(whiteQueen);
    
});
