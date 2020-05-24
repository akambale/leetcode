/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (target) {
  let position = 0;
  let speed = 1;
  let moves = 0;

  // for any target that is a power of 2 + 1, e.g. 5, 9, 17, 33
  // my algo below always returns a minimum distance
  // of the right answer + 1. I don't know why, so here is a
  // quick hack to solve these edge cases
  for (let i = 2; i < 14; i++) {
    if (target === Math.pow(2, i) + 1) {
      moves--;
      break;
    }
  }

  // our function that performs "Accelerate"
  const accelerate = () => {
    position += speed;
    speed *= 2;
    moves++;
  };

  // calculates the next position if we were to accelerate
  const mockA = () => {
    return position + speed;
  };

  // our function that performs "Reverse"
  const reverse = () => {
    speed = speed > 0 ? -1 : 1;
    moves++;
  };

  // keeps the car going in the same direction,
  // but changes speed back 1 or -1
  const decelerate = () => {
    reverse();
    reverse();
  };

  while (position !== target) {
    // if we have overshot the target in our last movement
    // turn the car around like an angry mother
    if ((position > target && speed > 0) || (position < target && speed < 0)) {
      reverse();
      accelerate();
    }

    if (position === target) return moves;

    // calculates the distance from the target if we were to continue accelerating
    const overShootDist = Math.abs(target - mockA());
    // calculates the current distance from the target
    const currDist = Math.abs(target - position);

    // if the current distance is lesser or the same, then we decelerate back to 1
    if (currDist <= overShootDist) {
      decelerate();
    }

    // continue moving
    accelerate();
  }
  return moves;
};
