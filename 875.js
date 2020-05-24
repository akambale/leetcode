var minEatingSpeed = function (piles, hours) {
  const ratio = hours / piles.length;
  const max = Math.max(...piles);
  if (ratio <= 1) return max;
  let num = 1;
  let timeLeft;
  let numOfHours;

  while (num > 0) {
    timeLeft = hours;
    for (let i = 0; i < piles.length; i++) {
      numOfHours = Math.ceil(piles[i] / num);
      timeLeft -= numOfHours;
    }
    if (timeLeft >= 0) return num;
    num++;
  }
};
