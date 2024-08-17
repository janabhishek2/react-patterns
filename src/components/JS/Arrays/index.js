function compose(...functions) {
    return function (result) {
      return functions.reduceRight(function (prevResult, fn) {
        return fn(prevResult);
      }, result);
    };
  }
  
  // Your code goes here!
  
  const setSelectedFontSize = function(elementToApplyStyles) {
      const fontElement = document.getElementById("font-size");
      elementToApplyStyles.style.fontSize = fontElement.value;
      return elementToApplyStyles;
  }
  
  const setSelectedColor = function(element) {
    const selectedColor = document.getElementById("color-picker");
    element.style.color = selectedColor.value;
    return element;
  }
  
  const setUpperCase = function(element) {
    const upperCaseElement = document.getElementById("uppercase");
    if(upperCaseElement.checked) {
      element.textContent = element.textContent.toUpperCase();
    }
    return element;
  }
  
  const setFontFamily = function(element) {
    const fontFamilyElement = document.getElementById("font-family");
    element.style.fontFamily = fontFamilyElement.value;
    return element;
  }
  
  const setText = function(element) {
    const textElement = document.getElementById("input-text");
    element.textContent = textElement.value;
    return element;
  }
  
  const handleClick = function() { 
    const ouptutElement = document.getElementById("styled-text");
  
    const newElement = document.createElement("div");
  
    // font size
  
    const composedFunction = compose(setSelectedFontSize, setUpperCase, setFontFamily, setSelectedColor, setText);
    const element = composedFunction(newElement);
  
    // remove all children of output element
    for(let child of ouptutElement.children) {
      child.remove();
    }
  
    // append the new element
    ouptutElement.appendChild(element);
  }
  
  const buttonElement = document.getElementById("apply-styles");
  buttonElement.addEventListener("click", handleClick);