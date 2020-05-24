var carPooling = function (trips, capacity) {
  // we will use an array to store which people need to go where
  // if 3 people need to go to location 5, we set car[5] = 3
  const car = [];
  trips.sort((a, b) => a[1] - b[1]);
  let lastVisted = 0;

  for (let i = 0; i < trips.length; i++) {
    const [people, startLoc, endLoc] = trips[i];

    // drops off all passengers between our previous start location
    // and our current start location
    for (let j = lastVisted + 1; j <= startLoc; j++) {
      if (car[j] !== undefined) {
        capacity += car[j];
      }
    }

    // sees what capacity is left, returns false if below capacity
    capacity -= people;
    if (capacity < 0) return false;

    // adds current riders for next destination
    if (car[endLoc] === undefined) car[endLoc] = 0;
    car[endLoc] += people;

    // updates last visted position
    lastVisted = startLoc;
  }

  return true;
};
