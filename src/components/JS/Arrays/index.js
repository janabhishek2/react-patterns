function test() {
    if(false) {
        var message = "abcd";
    }
    // this wont throw error as message has function scope: var keyword does not have block scope.
    // we will get message as undefined which is not expected.
    console.log(message);
}

test();