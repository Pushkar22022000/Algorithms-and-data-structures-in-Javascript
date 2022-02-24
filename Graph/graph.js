function bfs(graph, root) {
   
    let nodesLen = {}

    // start every element with infinity
    for (let i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity
    }
    
    nodesLen[root] = 0 
    
    // this keeps the track of nodes
    let queue = [root] 
   
    let current
  
    // check if empty if not remove a node. as queue first in first out we use shift
    while (queue.length != 0) {
      current = queue.shift()
      
     
      let curConnected = graph[current]
      
      let neighborIdx = []
    
      let idx = curConnected.indexOf(1)
      while (idx != -1) {
        
        neighborIdx.push(idx)
        
        idx = curConnected.indexOf(1, idx + 1)
      }
      

      
      for (let j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] == Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1
          queue.push(neighborIdx[j])
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