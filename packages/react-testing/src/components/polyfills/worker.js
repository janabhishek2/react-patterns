self.onmessage = (message) => {

    let k = 0 ;
    for(let i = 0; i < Math.pow(17, 8); i++) k++;
    postMessage(k);
}