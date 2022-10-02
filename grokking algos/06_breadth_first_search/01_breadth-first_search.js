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


const search = (name) => {
    let q = []
    q = q.concat(graph[name]);

    let searched = {};

    while (q.length) {
        let person = q.shift();
        //console.log(person)
        //console.log(!(person in searched))
        if (!(person in searched)) {
            if (personIsSeller(person)) {
                console.log(`${person} is a mango seller`)
                return true;
            } else {
                q = q.concat(graph[person]);
                searched[person] = true
            }
        } else {
            console.log(`${person} was already looked up for mango seller`)
        }
    }
    console.log('no mango sellers')
    return false;
}

search("you"); // thom is a mango seller!