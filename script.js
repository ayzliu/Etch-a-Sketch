const container = document.querySelector('#container');

function createGrid(num){
  //Clear existing gird
  while(container.firstChild){
    container.removeChild(container.firstChild)
  }

  let squarePerSide = Math.sqrt(num);
  let squareSize = Math.floor(960 / squarePerSide)

  for (i=0; i < num; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }

  applyMouseoverEvent();
}



function applyMouseoverEvent() {
  //each cell will change color when your mouse passes over them, leaving a (pixelated) trail
const cells = document.querySelectorAll('.square');
cells.forEach(cell => {
  cell.addEventListener('mouseover', e =>{
    e.target.classList.add('hover-color');
  });
});
}


//pop out a prompt when user click the botton
const btn = document.querySelector('#btn');
btn.addEventListener('click', () =>{
  let input = prompt("how many rows for the grid?")
  input = parseInt(input)

  if (input > 0 && input <= 100){
    createGrid(input * input);
  }else{
    alert("Please enter a number between 1 and 100")
  };
});