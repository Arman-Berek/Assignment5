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

function addColumn(){

}

