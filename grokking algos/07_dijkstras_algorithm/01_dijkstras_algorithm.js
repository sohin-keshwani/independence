// the graph
const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.fin = 1;

graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;

graph.fin = {};

// the cost table
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

// the parents table
const parents = {};
parents.a = "start";
parents.b = "start";
parents.fin = null;

// map tot store processed nodes
let processed = {};

const findLowestCostNode = (costs) => {
    let lowestCode = Infinity;
    let lowstCodeNode = null;

    Object.keys(costs).forEach(node => {
        const currCost = costs[node];
        if (currCost < lowestCode && !(node in processed)) {
            lowestCode = currCost;
            lowstCodeNode = node;
        }
    });

    return lowstCodeNode;

};

let node = findLowestCostNode(costs);

while(node != null) {

    const currCost = costs[node];
    const neighbors = graph[node];
    Object.keys(neighbors).forEach(n => {
        const newCost = currCost + neighbors[n];
        // If it's cheaper to get to this neighbor by going through this node
        // in our e.x. reaching to "A" from "B" will cost only 2, but from "Start" it will cost 6, and hence in 
        // cost table we update it
        if (costs[n] > newCost) {
            costs[n] = newCost;
            // now since cost to "A" is 2 from "B", in parent table, we update "A's" parent to B rather than "start" which
            // it was initially set
            parents[n] = node;
        }
    });

    // Mark the node as processed
    processed[node] = true;
    //console.log(costs)
    // Find the next node to process, and loop
    node = findLowestCostNode(costs);

}



// console.log(graph)
console.log(costs);
//console.log(parents);