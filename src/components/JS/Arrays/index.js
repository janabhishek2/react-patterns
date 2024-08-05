// Closures and factory functions

function uniqueIdGen(prefix) {
    let id = 0;
    // this function has access to prefix and id variables of parent function
    return function() {
        return `${prefix}-${++id}`;
    }
}

const movieIdIncrementor = uniqueIdGen("movie");

const arr = Array(3);
for(let item of arr) {
    console.log(movieIdIncrementor());
}

// output: movie-1, movie-2, movie-3
