function dfs(graph, node) {
  // get the connections in a node
  // for each connection find the one that leads back to that node
  // if it doesn't lead back set it to infinity
  const connections = graph[node];
  const queue = [node];

  while(queue.length !== 0) {
    var currentNode = queue.pop();
    for (var i = 0; i < connections.length; i++) {
      if (connections[i] === 1) {
          // while (connections)
      }

      console.log('o', queue);
    }
  }
}



// adjacency-matrix graph
const graph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(dfs(graph, 1));


const result = {
  0: 2,
  1: 0,
  2: 1,
  3: 3,
  4: "Infinity"
};
