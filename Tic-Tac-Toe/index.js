let board = [["-","-","-"],["-","-","-"],["-","-","-"]];
let markedTiles = [];
let xMark = "X";
let oMark = "O";
let toggleFlag = false;
let tiles = document.querySelectorAll(".cols");

function play(){
    tilesEventListener();
}

// add event listener to the tiles in the board
function tilesEventListener(){
     // mark X and O alternatively to each tile
    // start with X
    tiles.forEach((tile) => {
        tile.addEventListener('click', (e) => {
            let row = Number(e.target.id[0]);
            let col = Number(e.target.id[2]); 
            if(markedTiles.indexOf(e.target.id) === -1){
                if(!toggleFlag){
                    tile.innerHTML = xMark;
                    board[row][col] = xMark;
                    // console.log(board);
                    markedTiles.push(e.target.id);
                    validateFilledBoard(board);
                    // console.log(markedTiles);
                    toggleFlag = true;
                } else {
                    tile.innerHTML = oMark;
                    board[row][col] = oMark;
                    // console.log(board);
                    markedTiles.push(e.target.id);
                    validateFilledBoard(board);
                    // console.log(markedTiles);
                    toggleFlag = false;
                }
            }
        })
    })
    // call validateFilledBoard() once all the tiles are marked
}
// after 9 moves call validateFilledBoard()
function validateFilledBoard(board){
    // check rows condition
    let winningSequenceForX = "XXX";
    let winningSequenceForO = "OOO";

    let row1 = board[0][0] + board[0][1] + board[0][2];
    let row2 = board[1][0] + board[1][1] + board[1][2];
    let row3 = board[2][0] + board[2][1] + board[2][2];
    if(row1 === winningSequenceForO || row2 === winningSequenceForO || row3 === winningSequenceForO){
        alert("Game won by O");
        board = [["-","-","-"],["-","-","-"],["-","-","-"]];
        markedTiles = [];
        tiles.forEach(tile => {
            tile.innerHTML = "";
        })
        return;
    }
    if(row1 === winningSequenceForX || row2 === winningSequenceForX || row3 === winningSequenceForX){
        alert("Game won by X");
        board = [["-","-","-"],["-","-","-"],["-","-","-"]];
        markedTiles = [];
        tiles.forEach(tile => {
            tile.innerHTML = "";
        })
        return;
    }
    // check columns
    let column1 = board[0][0] + board[1][0] + board[2][0];
    let column2 = board[0][1] + board[1][1] + board[2][1];
    let column3 = board[0][2] + board[1][2] + board[2][2];
    if(column1 === winningSequenceForO || column2 === winningSequenceForO || column3 === winningSequenceForO){
        alert("Game won by O");
        board = [["-","-","-"],["-","-","-"],["-","-","-"]];
        markedTiles = [];
        tiles.forEach(tile => {
            tile.innerHTML = "";
        })
        return;
    }
    if(column1 === winningSequenceForX || column2 === winningSequenceForX || column3 === winningSequenceForX){
        alert("Game won by X");
        board = [["-","-","-"],["-","-","-"],["-","-","-"]];
        markedTiles = [];
        tiles.forEach(tile => {
            tile.innerHTML = "";
        })
        return;
    }
    // check diagonals
    let diagnal1 = board[0][0] + board[1][1] + board[2][2];
    let diagnal2 = board[0][2] + board[1][1] + board[2][0];
    if(diagnal1 === winningSequenceForO || diagnal2 === winningSequenceForO){
        alert("Game won by O");
        board = [["-","-","-"],["-","-","-"],["-","-","-"]];
        markedTiles = [];
        tiles.forEach(tile => {
            tile.innerHTML = "";
        })
        return;
    }
    if(diagnal1 === winningSequenceForX || diagnal2 === winningSequenceForX){
        alert("Game won by X");
        board = [["-","-","-"],["-","-","-"],["-","-","-"]];
        markedTiles = [];
        tiles.forEach(tile => {
            tile.innerHTML = "";
        })
        return;
    }
}

// validateFilledBoard([["X","X","X"],["X","O","O"],["O","X","O"]]);
// validateFilledBoard([["X","-","-"],["X","-","-"],["X","-","-"]]);
// validateFilledBoard([["-","-","O"],["-","O","-"],["O","-","-"]]);
// validateFilledBoard([["-","-","-"],["-","-","-"],["-","-","-"]]);

// initialize board [["-","-","-"],["-","-","-"],["-","-","-"]];
// a completely filled board will not have any "-"
// if a board is filled check the following
// 1) [["X","X","X"],["X","O","O"],["O","X","O"]] or [["O","O","O"],["X","O","O"],["O","X","O"]]
// 2) [["X","-","-"],["X","-","-"],["X","-","-"]] or [["O","-","-"],["O","-","-"],["O","-","-"]]
// 3) [["X","-","-"],["-","X","-"],["-","-","X"]] or [["-","-","O"],["-","O","-"],["O","-","-"]]

play();