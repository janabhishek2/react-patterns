const virtualDomExample = {
    type: "div",
    children: [
        {
            type: "h1",
            children: "Hello World"
        },
        {
            type: "p",
            children: [
                {
                    type: "span",
                    children: "I"
                },
                {
                    type: "span",
                    children: "am"
                },
               {
                    type: "span",
                    children: "Abhishek"
                },
            ]
        },
        "abcd"
    ]
};

function convertVirtualDomToRealDom(vDom) {
   let element = null;
   if(vDom.type) {
        const newEl = document.createElement(vDom.type);
        if(typeof vDom.children === "string") {
            newEl.textContent = vDom.children;
            element = newEl;
        } else {
            for(let item of vDom.children) {
                let child = convertVirtualDomToRealDom(item);
                if(typeof child === "string") {
                    const fragment = document.createDocumentFragment();
                    fragment.textContent = child;
                    child = fragment;
                }
                newEl.appendChild(child);
            }
            element = newEl;
        }
   } else {
    element = vDom;
   }

    return element;
};

const ans = convertVirtualDomToRealDom(virtualDomExample);

const bodyChildren = document.body.children;

for(let child of bodyChildren) {
   child.remove();
}

document.body.appendChild(ans);
