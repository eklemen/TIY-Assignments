// var assert = require('chai').assert;
var vm = new Vue({ /* options */ });
//
// assert.isDefined(vm.$el);
// console.log(vm.$data);
// console.assert(vm.$data);

var assert = require('assert');

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


    Piece.prototype = {
        getPosition: function(){
            return this._position;
    },
        getColor: function(){
            return this._color;
        },
        getName: function(){
            return this._name;
        },
        getAbbrev: function(){
            return this._name.substring(0,1);
        },
        toHTML: function(){
            return this.fromCharCode('&#9815');
        }
    };

    it('should equal position', function(){
        var Bishop = new Piece('white', 'bishop', 'C1');
        assert.equal(Bishop.getPosition(), 'C1');
        assert.equal(Bishop.getColor(), 'white');
        assert.equal(Bishop.getAbbrev(), "b");
        assert.equal(Bishop.toHTML(), "b");
    });

    console.log(whiteQueen);
