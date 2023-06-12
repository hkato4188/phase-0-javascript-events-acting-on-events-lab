const dodger = document.getElementById("dodger");



function moveDodgerLeft(){
    const leftPos = dodger.style.left.slice(0, -2);
    const leftNum = parseInt(leftPos, 10);
    dodger.style.left = `${leftNum - 5}px`;
}

function moveDodgerRight(){
    const rightPos = dodger.style.left.slice(0, -2);
    const rightNum = parseInt(rightPos, 10);
    dodger.style.left = `${rightNum + 5}px`;
}

function moveDodgerUp(){
    const upPos = dodger.style.bottom.slice(0, -2);
    const upNum = parseInt(upPos, 10);
    dodger.style.bottom = `${upNum + 5}px`;
}

function moveDodgerDown(){
    const downPos = dodger.style.bottom.slice(0, -2);
    const downNum = parseInt(downPos, 10);
    dodger.style.bottom = `${downNum - 5}px`;
}

document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowLeft"){
        moveDodgerLeft();
    }else if (event.key === "ArrowRight"){
        moveDodgerRight();
    }else if (event.key === "ArrowUp"){
        moveDodgerUp();
    }else if (event.key === "ArrowDown"){
        moveDodgerDown();
    }else{
        console.log("That is not an available direction!")
    }
  });