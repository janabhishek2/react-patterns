// remove all duplicates from arr

const books = [
    {
        author: "Vaibhav Sachdeva"
    },
    {
        author: "Marie Luan"
    },
    {
        author: "Abhishek Jan"
    },
];

books.sort((book1, book2) => {
    console.log( book1?.author.split(" ")[1], book2?.author.split(" ")[1]);
    return book1?.author.split(" ")[1] < book2?.author.split(" ")[1] ? -1 : 1;
});

console.log(books);