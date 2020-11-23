
// example adjacent list
// node = array index
// const graph = [[2], [2,3], [0,1,3]]
// or using object
// const graph = {
//     0: [2],
//     1: [2, 3],
//     2: [0, 1, 3],
//     3: [1, 2]
// }

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        if (!this.adjacentList.hasOwnProperty(node)) {
            this.adjacentList[node] = [];
            this.numberOfNodes++;
        }
        return this.adjacentList;
    }

    addEdge(node1, node2) {
        // a node node can't have connection to itself
        if (node1 == node2) return false;

        // if there is no node, then create the node
        if (!this.adjacentList.hasOwnProperty(node1))
            this.addVertex(node1);
        
        if (!this.adjacentList.hasOwnProperty(node2))
            this.addVertex(node2);
        
        // as long as it does not have any edge in the list
        // it adds the new edge
        if (!this.adjacentList[node1].includes(node2))
            this.adjacentList[node1].push(node2);
        
        if (!this.adjacentList[node2].includes(node1))
            this.adjacentList[node2].push(node1);

    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}


module.exports = () => {
    const myGraph = new Graph();

    myGraph.addVertex('0');
    myGraph.addVertex('1');
    myGraph.addVertex('2');
    myGraph.addVertex('3');
    myGraph.addVertex('4');
    myGraph.addVertex('5');
    myGraph.addVertex('6');
    myGraph.addEdge('3', '1');
    myGraph.addEdge('3', '4');
    myGraph.addEdge('4', '2');
    myGraph.addEdge('4', '5');
    myGraph.addEdge('1', '2');
    myGraph.addEdge('1', '0');
    myGraph.addEdge('0', '2');
    myGraph.addEdge('6', '5');

    myGraph.showConnections();
    //Answer:
    // 0-->1 2 
    // 1-->3 2 0 
    // 2-->4 1 0 
    // 3-->1 4 
    // 4-->3 2 5 
    // 5-->4 6 
    // 6-->5
}

