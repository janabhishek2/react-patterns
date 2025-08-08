
const tree = {
    tag: 'body',
    children: [
      { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
      { tag: 'div', children: ['baz'] },
    ],
  };
  
function serializeHTML(element) {
      let returnValue = ``;
      function inner(element) {
        // if children is array of objects then recursively 
        // call the tree
        returnValue = returnValue + `<${element.tag}>\n`;
        if(element.children) {
          element.children.forEach((child) => {
            if(typeof child === "string") {
              returnValue += `  ${child}`;
            } else {
              returnValue += `  ${inner(child)}`;
            }
          })
        }
        returnValue = returnValue + `\n</${element.tag}>`;
        return returnValue;
      }
      return inner(element);
  
  }
  
  const ans= serializeHTML(tree);

  console.log(ans);