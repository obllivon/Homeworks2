// Chess Board

var board = "";
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        board += (j % 2) == (i % 2) ? "#" : " ";
    }
    board += "\n";
}
console.log(board);