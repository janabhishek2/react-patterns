const regex = /(\d{3})-(\d{4})/g;

const str = "111-2222 and 222-3344 and 444-2231 and 123-12332";

let result = regex.exec(str);

while(result !== null) {
    console.log(result);
    result = regex.exec(str);
}
