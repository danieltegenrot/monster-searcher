const doorImage1 = document.getElementById("door1")
const doorImage2 = document.getElementById("door2")
const doorImage3 = document.getElementById("door3")
const startButton = document.getElementById("start")

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

let numClosedDoors = 3
let openDoor1 
let openDoor2
let openDoor3
let currentlyPlaying = true

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.round(Math.floor(Math.random() * Math.floor(3)))
  if (choreDoor === 0) {
    openDoor1 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = spaceDoorPath
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath
    openDoor1 = beachDoorPath
    openDoor3 = spaceDoorPath
  } else {
    openDoor3 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor1 = spaceDoorPath
  }
}

let isBot = (door) => {
  if (door.src === botDoorPath) {
    return true
  } else {
    return false
  }
}

function isClicked(door,openDoor) {
  if (door.src === closedDoorPath && currentlyPlaying === true) {
    door.src = openDoor
    playDoor(door)
  }
}

let playDoor = (door) => {
  numClosedDoors --;
  if (numClosedDoors === 0) {
    gameOver('win')
  } else if (isBot(door)) {
    gameOver()
  }
}

doorImage1.onclick = () => {
  isClicked(doorImage1,openDoor1)
}

doorImage2.onclick = () => {
  isClicked(doorImage2,openDoor2)
}

doorImage3.onclick = () => {
  isClicked(doorImage3,openDoor3)
}

startButton.onclick = () => {
  startRound()
}

let startRound = () => {
  if (currentlyPlaying === false) {
    numClosedDoors = 3
    doorImage1.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
    doorImage2.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
    doorImage3.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
    startButton.innerHTML = "Good luck!"
    currentlyPlaying = true;
    randomChoreDoorGenerator()
  }
}

function gameOver(status) {
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?"
  } else {
    startButton.innerHTML = "You lost. Play again?"
  }
  currentlyPlaying = false;
}

randomChoreDoorGenerator()

