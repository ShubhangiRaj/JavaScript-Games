let numOfMoves = 9;
// after 9 moves call validateFilledBoard()
function validateFilledBoard(board){
    // check rows condition
    let winningSequenceForX = "XXX";
    let winningSequenceForO = "OOO";
    // for(let i = 0; i < board.length; i++){
    //     if(board[i].join("") === winningSequenceForO){
    //         alert("Game won by O");
    //         return;
    //     }
    //     if(board[i].join("") === winningSequenceForX){
    //         alert("Game won by X");
    //         return;
    //     }
    // }
    let row1 = board[0][0] + board[0][1] + board[0][2];
    let row2 = board[1][0] + board[1][1] + board[1][2];
    let row3 = board[2][0] + board[2][1] + board[2][2];
    if(row1 === winningSequenceForO || row2 === winningSequenceForO || row3 === winningSequenceForO){
        console.log("Game won by O");
        return;
    }
    if(row1 === winningSequenceForX || row2 === winningSequenceForX || row3 === winningSequenceForX){
        console.log("Game won by X");
        return;
    }
    // check columns
    let column1 = board[0][0] + board[1][0] + board[2][0];
    let column2 = board[0][1] + board[1][1] + board[2][1];
    let column3 = board[0][2] + board[1][2] + board[2][2];
    if(column1 === winningSequenceForO || column2 === winningSequenceForO || column3 === winningSequenceForO){
        console.log("Game won by O");
        return;
    }
    if(column1 === winningSequenceForX || column2 === winningSequenceForX || column3 === winningSequenceForX){
        console.log("Game won by X");
        return;
    }
    // check diagonals
    let diagnal1 = board[0][0] + board[1][1] + board[2][2];
    let diagnal2 = board[0][2] + board[1][1] + board[2][0];
    if(diagnal1 === winningSequenceForO || diagnal2 === winningSequenceForO){
        console.log("Game won by O");
        return;
    }
    if(diagnal1 === winningSequenceForX || diagnal2 === winningSequenceForX){
        console.log("Game won by X");
        return;
    }

    console.log("Tie! Restart Game.");
    return;
}

validateFilledBoard([["X","X","X"],["X","O","O"],["O","X","O"]]);
validateFilledBoard([["X","-","-"],["X","-","-"],["X","-","-"]]);
validateFilledBoard([["-","-","O"],["-","O","-"],["O","-","-"]]);

// initialize board [["-","-","-"],["-","-","-"],["-","-","-"]];
// a completely filled board will not have any "-"
// if a board is filled check the following
// 1) [["X","X","X"],["X","O","O"],["O","X","O"]] or [["O","O","O"],["X","O","O"],["O","X","O"]]
// 2) [["X","-","-"],["X","-","-"],["X","-","-"]] or [["O","-","-"],["O","-","-"],["O","-","-"]]
// 3) [["X","-","-"],["-","X","-"],["-","-","X"]] or [["-","-","O"],["-","O","-"],["O","-","-"]]