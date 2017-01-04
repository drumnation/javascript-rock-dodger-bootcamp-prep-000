const DODGER = document.getElementById('dodger') // DODGER is 20px high
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400 // GAME_HEIGHT - 20 - 20 = 360px;
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []   // rocks are 20px high
const START = document.getElementById('start')

var gameInterval = null

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)

  if (top < 360) {
    return false // rock not at collision height so false
  } else { // rock is at collision height of the dodger
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    const dodgerRightEdge = positionToInteger(DODGER.style.left) + 40
    const rockLeftEdge = positionToInteger(rock.style.left)
    const rockRightEdge = positionToInteger(rock.style.left) + 20

    if (rockLeftEdge < dodgerLeftEdge && rockRightEdge > dodgerLeftEdge) {
      return true // partial hit left
    } else if (rockLeftEdge < dodgerRightEdge && rockRightEdge > dodgerRightEdge) {
      return true // partial hit right
    } else if (rockLeftEdge < dodgerRightEdge && rockRightEdge > dodgerLeftEdge) {
      return true // full hit
    } else {
      return false // complete miss
    }
  }
}

function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `${x}px`

  var top = 0 // declare local var top

  rock.style.top = top

  GAME.appendChild(rock)
  moveRock(rock)

  function moveRock(rock) {
    function fall() { // callback function
      rock.style.top = `${top += 2}px` // move rock down 2px
      if (checkCollision(rock)) {
        endGame() // collides with rock
      } else if (positionToInteger(rock.style.top) < GAME_HEIGHT) {
        window.requestAnimationFrame(fall) // fall if no collision
      } else if (positionToInteger(rock.style.top) >= GAME_HEIGHT) {
        rock.remove(0) // remove rock if it hits the bottom and doesn't collide
      }
     }

    window.requestAnimationFrame(fall) // animate rock
    ROCKS.push(rock) // add rock to array so all rocks can be removed at once at endgame
    return rock
  }
}

function endGame() {
  window.clearInterval(gameInterval)
  window.removeEventListener('keydown', moveDodger)
  const ROCKS = []
  alert('YOU LOSE!')
}

function moveDodger(e) {
  switch (e.which) {
    case LEFT_ARROW:
      moveDodgerLeft(e)
      e.preventDefault()
      e.stopPropagation()
      break
    case RIGHT_ARROW:
      moveDodgerRight(e)
      e.preventDefault()
      break
    default:
      break
  }
}

function moveDodgerLeft() {
  var leftNumbers = DODGER.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 4}px`
  }
}

function moveDodgerRight(e) {
   var leftNumbers = DODGER.style.left.replace('px', '')
   var left = parseInt(leftNumbers, 10)

   if (left < 360) {
     dodger.style.left = `${left + 4}px`
   }
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'
  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
