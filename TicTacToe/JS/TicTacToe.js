// const cellNum = 6;
const documentCells = document.querySelectorAll('.cell');

const documentCellsArray = Array.from(documentCells);

const cellsArray = [];

function userTurn(chosenCell) {
    console.log(`user make his turn at ${chosenCell} cell`);
    if (chosenCell / 3 < 1) {
        console.log('in the 1 row');
        for (let i = 0; i < cellsArray[0].length; i++) {
            if (cellsArray[0][i].cellNum == chosenCell) {
                console.log(`the chosen cell is ${chosenCell}`);
                cellsArray[0][i].cellContent = "X";
            }
        }
    } else if (chosenCell / 3 < 2) {
        console.log('in the 2 row');
        for (let i = 0; i < cellsArray[1].length; i++) {
            if (cellsArray[1][i].cellNum == chosenCell) {
                console.log(`the chosen cell is ${chosenCell}`);
                cellsArray[1][i].cellContent = "X";
            }
        }
    } else {
        console.log('in the 3 row');
        for (let i = 0; i < cellsArray[2].length; i++) {
            if (cellsArray[2][i].cellNum == chosenCell) {
                console.log(`the chosen cell is ${chosenCell}`);
                cellsArray[2][i].cellContent = "X";
            }
        }
    };
    console.log("cellsArray",cellsArray);

    console.log("documentCellsArray chosen",documentCellsArray[chosenCell]);
    documentCellsArray[chosenCell].innerText = "X";
}
function computerTurn() {
    console.log('computer make his turn')
};
let buffer = 0
for (let i = 0; i < 3; i++) {
    const rowArray = [];
    cellsArray.push(rowArray);

    for (let j = 0; j < 3; j++) {
        rowArray.push({
            cellNum: documentCellsArray[j + buffer].id,
            cellContent: null
        }
        )
    }
    buffer += 3;

}

// function display(){
//     for (let i = 0; i < documentCellsArray.length; i++){
//         documentCellsArray[i].innerText = "X";
//     }
// }
for (let i = 0; i < documentCellsArray.length; i++) {
    documentCellsArray[i].addEventListener('click', (e) => {
        userTurn(e.target.id);
        // display();
        computerTurn();
        // display();
    })
}
