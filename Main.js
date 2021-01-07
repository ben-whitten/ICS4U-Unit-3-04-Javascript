/*
* The Main program is a recreation of the towerOfHanoi program.
*
* @author  Ben Whitten
* @version 1.0
* @since   2021-1-7
*/

///////////////////////////////////////////////////////////////////////////////
/**
 * This function is the recreation of the towers of hanoi program.
 */
function towerOfHanoi(height,  fromPole, toPole, withPole) {
  if (height >= 1) {
    towerOfHanoi(height - 1, fromPole, withPole, toPole);
    moveDisk(height, fromPole, toPole);
    towerOfHanoi(height - 1, withPole, toPole, fromPole);
  }
}

///////////////////////////////////////////////////////////////////////////////

/**
 * This function outputs which disk you're moving from which pole to
 * which pole.
 */
function moveDisk(height, fp, tp) {
  console.log("moving disk " + height + " from pole " + fp + " to pole " + tp);
}

///////////////////////////////////////////////////////////////////////////////

// 1 = A -> C
// 2 = A -> B
// 1 = C -> B
// 3 = A -> C
// 1 = B -> A
// 2 = B -> C
// 1 = A -> C

/**
 * This function handles the input and output of the program.
 */
towerOfHanoi(3, "A", "C", "B");
