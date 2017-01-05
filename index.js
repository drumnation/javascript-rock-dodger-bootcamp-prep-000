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

  if (top > 360) { // rock is not at collision height of the dodger
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
<<<<<<< HEAD
    const dodgerRightEdge = positionToInteger(DODGER.style.left) + 40
    const rockLeftEdge = positionToInteger(rock.style.left)
    const rockRightEdge = positionToInteger(rock.style.left) + 20

    if (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) {
      return true // partial hit left
    } else if (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge) {
      return true // partial hit right
    } else if (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerLeftEdge) {
      return true // full hit
    }
    // else {
    //   return false // complete miss
    // }
=======
    // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
    const dodgerRightEdge = positionToInteger(DODGER.style.left + 40);
    const rockLeftEdge = positionToInteger(rock.style.left)
    // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
    const rockRightEdge = positionToInteger(rock.style.left + 20);

    if (rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) {
      return false;
    } else if (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) {
      return false;
    } else if (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge) {
      return false;
    } 
  }

    if (top <= 360) {
      return false;
    } else {
      return true;
>>>>>>> c92844389ac5bbdf335c166d2e4bdf55d0b3d570
  }
}

function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `${x}px`

  var top = 0 // declare local var top

  rock.style.top = top

<<<<<<< HEAD
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
=======
  /**
   * Now that we have a rock, we'll need to append
   * it to GAME and move it downwards.
   */
   GAME.appendChild(rock)
   moveRock(rock)
  /**
   * This function moves the rock. (2 pixels at a time
   * seems like a good pace.)
   */
  function moveRock(rock) {
    // implement me!
    // (use the comments below to guide you!)
    /**
     * If a rock collides with the DODGER,
     * we should call endGame()
     */
    function fall() {
      var top = 0
      var rock = document.getElementsByClassName('rock')
      rock[rock.length - 1].style.top = `${top -= 2}px`

      if (checkCollision(rock)) {
        endGame()
      } else if (rock.style.top > 0) {
        window.requestAnimationFrame(fall)
      } else {
        ROCKS.splice(ROCKS.length - 1, 1)
      }
     }
    /**
     * Otherwise, if the rock hasn't reached the bottom of
     * the GAME, we want to move it again.
     */

    /**
     * But if the rock *has* reached the bottom of the GAME,
     * we should remove the rock from the DOM
     */

  // We should kick of the animation of the rock around here
  window.requestAnimationFrame(fall)
  // Add the rock to ROCKS so that we can remove all rocks
  // when there's a collision
  ROCKS.push(rock)

  // Finally, return the rock element you've created
  return rock
>>>>>>> c92844389ac5bbdf335c166d2e4bdf55d0b3d570
  }
}

function endGame() {
  window.clearInterval(gameInterval)
  window.removeEventListener('keydown', moveDodger)
<<<<<<< HEAD
  const ROCKS = []
=======
  ROCKS = []
>>>>>>> c92844389ac5bbdf335c166d2e4bdf55d0b3d570
  alert('YOU LOSE!')
}

function moveDodger(e) {
<<<<<<< HEAD
=======
  // implement me!
>>>>>>> c92844389ac5bbdf335c166d2e4bdf55d0b3d570
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
<<<<<<< HEAD
}

function moveDodgerLeft() {
=======
  /**
   * This function should call `moveDodgerLeft()`
   * if the left arrow is pressed and `moveDodgerRight()`
   * if the right arrow is pressed. (Check the constants
   * we've declared for you above.)
   * And be sure to use the functions declared below!
   */
}

function moveDodgerLeft() {
  // implement me!
  /**
   * This function should move DODGER to the left
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
>>>>>>> c92844389ac5bbdf335c166d2e4bdf55d0b3d570
  var leftNumbers = DODGER.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 4}px`
  }
}

function moveDodgerRight(e) {
<<<<<<< HEAD
=======
  // implement me!
  /**
   * This function should move DODGER to the right
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
>>>>>>> c92844389ac5bbdf335c166d2e4bdf55d0b3d570
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
