function bfs(graph, node) {
  var distanceToEachNode = {};

  // set all nodes to infinty by default
  for (var i = 0; i < graph.length; i++) {
    distanceToEachNode[i] = 'Infinity';
  };
  // a node should not be connected to itself, so we'll set it to 0
  distanceToEachNode[node] = 0;

  var queue = [node];

  var currentNode;

  while (queue.length !== 0) {
    currentNode = queue.shift();

    var connectedNodes = graph[currentNode];
    var indexOfNeighbour = [];

    // find the left-most connected node
    var indexOfConnectedNode = connectedNodes.indexOf(1);
    while (indexOfConnectedNode !== -1) {
      indexOfNeighbour.push(indexOfConnectedNode);

      // find the right-most connected node if the left-most neigbour ain't found
      indexOfConnectedNode = connectedNodes.indexOf(1, indexOfConnectedNode + 1);
    }

    for (var j = 0; j < indexOfNeighbour.length; j++) {
      if (distanceToEachNode[indexOfNeighbour[j]] === "Infinity") {
        distanceToEachNode[indexOfNeighbour[j]] = distanceToEachNode[currentNode] + 1;
        // change the root to the connecting neighbour find which creates a link to the current node
        queue.push(indexOfNeighbour[j]);
      }
    };
  };
  return distanceToEachNode;
}



// adjacency-matrix graph
const graph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(bfs(graph, 4));


const result = {
  0: 2,
  1: 0,
  2: 1,
  3: 3,
  4: "Infinity"
};
