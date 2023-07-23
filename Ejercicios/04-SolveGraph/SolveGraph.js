const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

function SolveGraphDFS(graph, start, end, visited = {}) {
  if (visited[start]) return false;
  visited[start] = true;

  for (let i = 0; i < graph[start].length; i++) {
    if (end === graph[start][i]) return true;
    else if (SolveGraphDFS(graph, graph[start][i], end, visited)) return true;
  }
  return false;
}

function SolveGraphBFS(graph, start, end, queue = [], visited = {}) {
  if (!visited[start]) {
    for (let i = 0; i < graph[start].length; i++) {
      queue.push(graph[start][i]);
    }
  }

  visited[start] = true;

  if (queue.length) {
    return (
      queue[0] === end ||
      SolveGraphBFS(graph, queue.shift(), end, queue, visited)
    );
  } else {
    return false;
  }
}

console.log(SolveGraphBFS(graph, "a", "r")); //(true)
console.log(SolveGraphBFS(graph, "a", "d")); //(true)
console.log(SolveGraphBFS(graph, "s", "b")); //(false)

// module.exports = SolveGraph;
