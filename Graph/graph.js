/* Graphs: Breadth-first search */
function bfs(graph, root) {
   
    let nodesLen = {}

    // start every element with infinity
    for (let i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity
    }
    
    nodesLen[root] = 0 
    
    // this keeps the track of nodes
    let queue = [root] 
   
    let current    //keep track of the current node
  
    // this is to keep traversing nodes until there are no more nodes in the queue
    while (queue.length != 0) {
      current = queue.shift()
      
     
      let curConnected = graph[current]
      
      let neighborIdx = []  // shows what nodes are connected to the root node
    
      let idx = curConnected.indexOf(1) // shows that the node is connected to another node at that index
      while (idx != -1) {
        
        neighborIdx.push(idx) // looks for next connected node
        
        idx = curConnected.indexOf(1, idx + 1)   // searches for the next connected node we look for the next connected one 
      }
      

        // value of lin array at the index of neighbor from the neighbor index array equals infinity, no distance set
      for (let j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] == Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1  // distance setted
          queue.push(neighborIdx[j])       //  loop throught these connecting nodes and get the distance
        }
      }
    }
    return nodesLen
  }
  
  let exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ]
  
  console.log(bfs(exBFSGraph, 1)
