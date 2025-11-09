const btn = document.getElementsByTagName("button")[0];

// Change height and width normally
// btn.style.height = "80px";
// btn.style.width = "150px";

btn.style.color = "red";

// Using cssText
btn.style.cssText += "height: 100px; width: 50px;";
