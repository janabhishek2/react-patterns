const conan = {
    name: "Conan",
    city: "LA",
    sings: function() {
        console.log(`${this.name} sings LALALALALA....`);
    }
};

const lisa = {
    name: "Lisa"
};

const genericSings = conan.sings;
genericSings.call(lisa);