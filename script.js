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

