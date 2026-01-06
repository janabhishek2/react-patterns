const url = "./template.html";

fetch(url).then(response => {
    // response has a readable stream inside response.body.
    // it contains method like json which returns a json response of body.
    response.text().then((html) => {

       const randomElement = document.getElementById("random");
       randomElement.innerHTML = html
    })
}).catch(err => {
    console.log(err);
})