//commit 1
//button will change color when clicked
document.querySelector("#set-color").addEventListener("click",changeColor);

function changeColor(e){
  e.preventDefault(); //stops default refreshing
  let colorChoice = document.querySelector("#color-field").value; // When a value is typed into the textbox, it becomes colorChoice.
  document.querySelector(".brush").style.backgroundColor = colorChoice; //Brush will be the new color
}

//commit 2
// previous queries took care of Enter from Refreshing page.

//commit 3
function createSquares(){
  for(let x = 1; x <=8000; x++)
  {
    let squareDiv = document.createElement("div");
    squareDiv.className = "square";
   squareDiv.id = x;
    document.querySelector("body").appendChild(squareDiv);
    document.getElementById(x).addEventListener("mouseover", changeSquareColor);
    //addEventListener("onmouseover", changeSquareColor);
  }
}


function changeSquareColor(x){

  let squareColor = document.querySelector("#color-field").value;
  this.style.backgroundColor = squareColor; //this refers to element in color-field

}
createSquares();
