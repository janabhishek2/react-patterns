const btn = document.querySelector("#clickMe");

const conan = {
    name: "Conan",
    sings: function() {
        console.log(`${this.name} sings LALAL`);
    }
};

btn.addEventListener("click", conan.sings.bind(conan));
