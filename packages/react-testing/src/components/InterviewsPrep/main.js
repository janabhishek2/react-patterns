const vdom = {
    type: "div",
    children: [
        {
            type: "h1",
            children: "Hello"
        },
        {
            type: "div",
            children: "World"
        },
        {
            type: "span",
            children: "Good Morning"
        },
        "Random Text"
    ]
};

{/* <div>
    <h1>Hello</h1>
    <div>World</div>
    <span>Good Morning</span>
    "Random Text"
</div> */}

const root = document.getElementById("root");

function createDOMfromVDOM(vdom) {

    if(typeof vdom === "string") {
        return document.createTextNode(vdom);
    }
    const rootEl = document.createElement(vdom?.type);
    // vdom.children as array
    if(Array.isArray(vdom.children)) {
        let children = [];
        const fragment = document.createDocumentFragment();
        vdom.children.map((child) => {
            children.push( createDOMfromVDOM(child));
        })
        fragment.append(...children);
        rootEl.appendChild(fragment);
        return rootEl;
    }
    // vdom.children as a string
    if(typeof vdom.children === "string") {
         rootEl.textContent = vdom.children;
         return rootEl;
    }
}

const dom = createDOMfromVDOM(vdom);

console.log(dom);
root.appendChild(dom);
