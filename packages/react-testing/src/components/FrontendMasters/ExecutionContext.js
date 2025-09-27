const original = {
    name: "mdn",
}

original.itself = original;

// Structured clone takes care of inner objects and circular references.
const copiedObj = structuredClone(original);

// const copiedObj = {...original}; // Does not modify circular ref, inner objects: uses same references for both

console.log(copiedObj);