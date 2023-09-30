export function djikstra(grid, startNode, finishNode) {
  const visitedInOrder = [];
  startNode.distance = 0;
  const unVisitedNodes = getAllNodes(grid);
  while (!!unVisitedNodes.length) {
    sortNodesByDistance(unVisitedNodes);
    const closestNode = unVisitedNodes.shift();
    if (closestNode.isWall) continue;
    if (closestNode.distance === Infinity) return visitedInOrder;
    closestNode.isVisited = true;
    visitedInOrder.push(closestNode);
    if (closestNode === finishNode) return visitedInOrder;
    updateUnvisitedNeighbours(closestNode, grid);
  }
}

function sortNodesByDistance(unVisitedNodes) {
  unVisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbours(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col > grid[0].length) neighbors.push(grid[row][col - 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

export function getNodesInShortedPathOrder(finishNode) {
  const nodesInShortedPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortedPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortedPathOrder;
}
