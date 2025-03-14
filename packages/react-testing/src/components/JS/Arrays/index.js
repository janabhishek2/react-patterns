function flattenedArray(arr) {
    return arr.reduce((acc, curr) => {
        if(Array.isArray(curr)) {
        return acc.concat(flattenedArray(curr));
        } else {
        return acc.concat(curr);
        }
    }, []);
};

const attributes = [
    {
    id: "system",
    value: "System attributes",
    children: [
    {
        id: "cont_tmz",
        value: "Contact timezone"
    },
    {
        id: "sib_date_added",
        value: "Date Added"
    }
    ]
    },
    {
    id: "custom",
    value: "Custom",
    children: [
    {
        id: "abc",
        value: "system"
    }
    ]
    }
];
const implementSearchFoundFlag = (treeNodes, search) => {
    treeNodes.forEach(node => {
        if(node?.value?.toLowerCase().includes(search)) {
        node.searchFound = true;
        } 
        if(node?.children?.length){
        implementSearchFoundFlag(node?.children, search);
        }
    });
    return treeNodes;
};

function setParentToTrueIfChildHasTheValue(treeNode, parent = {}) {
   if(treeNode?.searchFound && parent?.id) {
        // set parent seachFound true
        parent?.searchFound = true;
        
    }
};

function getFixedTree (treeNodes) {

}
function getSearchedTree(treeNodes, search) {
    // add a flag searchFound on each node.
    const newTree = implementSearchFoundFlag(treeNodes, search);
    
    // check for all top nodes if their children/grand-children have a searchFound true flag
    // if child has a searchFound flag, set topNode searchFound true.
};

const searchedTree = getSearchedTree(attributes, "sys");
console.log(searchedTree);
  