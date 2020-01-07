let amountRows = 1;
let amountColumns = 1; 

// 1 - add rows
function addRow(){
    var matrix = document.getElementById("matrix");
    var row = document.createElement("tr");
    for(let i = 0; i < amountColumns;i++){
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
    amountRows++;
    matrix.appendChild(row);
}

//2-add columns
function addColumn(){
    var matrix = document.getElementById("matrix");

    for(let i = 0; i < amountRows; i++) {
        let cell = document.getElementsByTagName("tr")[i];
        var col = document.createElement("td");
        cell.appendChild(col);
    }
    amountColumns++;
    matrix.appendChild(cell);
}

// 3 - remove row
function removeRow(){
    var matrix = document.getElementById("matrix");
    matrix.deleteRow(amountRows-1);
    amountRows--;
}

// 4 - remove column
function removeColumn(){
    var matrix = document.getElementById("matrix");
    let cells = document.getElementsByTagName("tr"); //rows
    for(let i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.deleteCell(0);
    }
    amountColumns--;
}

//5
let color = "red";
function selectColor(){
    color = document.getElementById("color-pick").value;

}


//8 fill all cells with the currently selected color
function colorAll(){
    var cells = document.getElementsByTagName("td");
    var amountBoxes = amountColumns * amountRows;
    for(let i = 0; i < amountBoxes; i++) {
        cells[i].style.backgroundColor = document.getElementById("color-pick").value;
    }
}
