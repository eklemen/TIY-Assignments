$(document).ready(function(){
   function Piece(color, name, position){
       this._color = color;
       this._name = name;
       this._position = position;
   }
    
    var whiteQueen = new Piece('white', 'queen', "D1");
    
    console.log(whiteQueen);
    
});