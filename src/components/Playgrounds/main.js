// Bind makes a new function and binds its this context to the value provided.

const conan = {
    name: "Conan",
    sings: function() {
        console.log(`${this.name} sings LALALA !!`);
    }
};

const lisa = {
    name: "Lisa"
};

const lisaSings = conan.sings.bind(lisa);

lisaSings();
