let amountRows = 1;
let amountColumns = 1; 

// 1 - add rows
function addRow(){
    var matrix = document.getElementById("matrix");
    var row = document.createElement("tr");
    for(let i = 0; i < amountColumns;i++){
        let cell = document.createElement("td");
        cell.classList.add("nocolor")
        row.appendChild(cell);
    }
    amountRows++;
    matrix.appendChild(row);
}


// 3 - remove row
function removeRow(){
    var matrix = document.getElementById("matrix");
    matrix.deleteRow(amountRows-1);
    amountRows--;
}

// 5 - pick color
let color = "red";
function selectColor(){
    color = document.getElementById("color-pick").value;
}

function changeColor(){
   this.style.backgroundColor = color;
   this.classList.remove("nocolor");
}
