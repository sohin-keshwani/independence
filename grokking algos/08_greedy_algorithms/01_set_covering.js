// set up the data

let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations.kone = new Set(["id", "nv", "ut"]);
stations.ktwo = new Set(["wa", "id", "mt"]);
stations.kthree = new Set(["or", "nv", "ca"]);
stations.kfour = new Set(["nv", "ut"]);
stations.kfive = new Set(["ca", "az"]);

const finalStations = new Set();



// iterate over every states where we want to launch

while (statesNeeded.size) {
    let bestStation = null;
    let statesCovered = new Set();
    Object.keys(stations).forEach(station => {

        const states = stations[station];
        // intersect between states the station is available in vs states where we want to broadcast
        const covered = new Set([...statesNeeded].filter(x => states.has(x)))

        // if we have better coverage for this state, we consider this as best station and replace statesCovered
        if (covered.size > statesCovered.size) {
            bestStation = station;
            statesCovered = covered;
        }

    });

    // if the coverage matches we remove those states from our original list of states we want to broadcast
    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
    // and add this as beststation
    finalStations.add(bestStation);
}

console.log(finalStations);