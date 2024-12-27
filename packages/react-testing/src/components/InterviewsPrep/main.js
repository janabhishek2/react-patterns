// Add link back to source of text: https://forcemipsum.com/

const body = document.body;

const link = document.createElement("a");
link.href = "https://forcemipsum.com/";
link.target = "_blank";

link.innerHTML = "Go on, click me!"

body.append(link);

