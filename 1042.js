var gardenNoAdj = function (n, paths) {
  if (paths.length === 0) {
    return new Array(n).fill(1);
  }
  const graph = generateGraph(paths);
  const placement = [];

  for (let i = 1; i <= n; i++) {
    const numsTaken = new Set();
    // if routes between gardens exist
    if (graph[i]) {
      graph[i].forEach(num => {
        // gets flower numbers in each adjacent garden
        const flowerNum = placement[num];
        if (flowerNum) numsTaken.add(flowerNum);
      });
    }

    // loop through whichever flowers are left
    // once the first is found, set that flower
    // to the current garden
    for (let j = 1; j <= n; j++) {
      if (!numsTaken.has(j)) {
        placement[i] = j;
        break;
      }
    }
  }
  placement.shift();
  return placement;
};

const generateGraph = paths => {
  const graph = {};
  for (let i = 0; i < paths.length; i++) {
    if (!graph[paths[i][0]]) graph[paths[i][0]] = [];
    if (!graph[paths[i][1]]) graph[paths[i][1]] = [];
    if (!graph[paths[i][0]].includes(paths[1]))
      graph[paths[i][0]].push(paths[i][1]);
    if (!graph[paths[i][1]].includes(paths[1]))
      graph[paths[i][1]].push(paths[i][0]);
  }
  return graph;
};
