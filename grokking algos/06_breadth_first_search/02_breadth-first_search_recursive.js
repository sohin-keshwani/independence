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

const searchRecursive = (q, searched) => {
    if (q.length == 0) return false
    let person = q.shift();
    console.log(searched);
    if (!(person in searched)) {
        return searchRecursive(q.slice(1), searched);
        if (personIsSeller(person)) {
            console.log(`${person} is a mango seller`)
            return true;
        }
        searched[person] = true;
        return searchRecursive(q.concat(graph[person]), searched);
    }
}

const search = (name) => {
    let q = []
    q = q.concat(graph[name]);

    searchRecursive(q, {});
    
}

search("you"); // thom is a mango seller!