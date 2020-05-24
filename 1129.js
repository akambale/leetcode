const shortestAlternatingPaths = (n, redEdges, blueEdges) => {
  if (n === 0) return [];
  const graph = createGraph(n, redEdges, blueEdges);
  const results = new Array(n);
  results.fill(Infinity);

  const memo = {};

  const dfs = (nodeNum, lastColor, steps = 0, path = []) => {
    //sets results to minimum path value
    results[nodeNum] = Math.min(results[nodeNum], steps);
    const nextColor = lastColor === 'red' ? 'blue' : 'red';
    const options = graph[nodeNum].filter(ele => ele[1] === nextColor);
    // increment steps for record in traversing the rest of the graph
    steps++;
    options.forEach(ele => {
      // string representation for node and colored verticie
      const visitedStr = `${ele[0]}-${nextColor}`;
      // prevents infinite loops
      if (path.includes(visitedStr)) return;
      // if this path has more or equal steps, we don't need to explore it
      // and can just cancel the rest of the DFS
      if (memo[visitedStr] && memo[visitedStr] <= steps) return;
      memo[visitedStr] = steps;
      path.push(visitedStr);
      dfs(ele[0], nextColor, steps, path.slice(0));
    });
  };
  dfs(0, 'blue');
  dfs(0, 'red');
  return results.map(num => (num === Infinity ? -1 : num));
};

const createGraph = (n, red, blue) => {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  red.forEach(edge => {
    const [l, r] = edge;
    graph[l].push([r, 'red']);
  });
  blue.forEach(edge => {
    const [l, r] = edge;
    graph[l].push([r, 'blue']);
  });
  return graph;
};
