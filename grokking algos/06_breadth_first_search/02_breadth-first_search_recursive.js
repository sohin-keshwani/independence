const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const personIsSeller = (name) => {
    return name[name.length - 1] === "m";
}
/*
1. look at the first network and check if they are mango sellers
1a. add alice, bob, claire to my queue
1b. check if they are the mango sellers?
1c. if not
1d. if yes then terminate
2. add alice, bob, and claire contacts to queue and repeat 1a to 1d
*/

const searchRecursive = (q, searched) => {
    if (q.length == 0) return false
    console.log(q)
    console.log(JSON.stringify(searched))
    let person = q.shift()
    if (!(person in searched)) {
        searched[person] = true
        if (!personIsSeller(person)) {
            // console.log(`${person} is not a mango seller`)
            return searchRecursive(q.concat(graph[person]), searched)
        } else {
            console.log(`${person} is a mango seller`)
            return true;
        }   
    }
    return searchRecursive(q, searched)
}

const search = (name) => {
    let q = []
    q = q.concat(graph[name]);

    searchRecursive(q, {});
    
}

search("you"); // thom is a mango seller!