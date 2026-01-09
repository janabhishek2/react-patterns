const Sizes = Object.freeze({
    small: "small",
    medium: "medium",
    large: "large"
});

const Colors = Object.freeze({
    green: "green",
    blue: "blue",
    red: "red"
})

class Product {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
}

const tree = new Product(Sizes.large, Colors.green);
const toy = new Product(Sizes.medium, Colors.green);
const phone = new Product(Sizes.small, Colors.red);

const products = [tree, toy, phone];

class ColorSpecification {
    constructor(color) {
        this.color = color;
    }
    isSatisfied(item) {
        return item.color === this.color
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
};

class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(item) {
        return this.specs.every((spec) => spec.isSatisfied(item));
    }
}

const greenSpec = new ColorSpecification(Colors.green);
const largeSpec = new SizeSpecification(Sizes.large);

const greenAndLargeSpec = new AndSpecification(greenSpec, largeSpec);

class ProductsFilter {
    filter(products, spec){
        return products.filter((product) => {
            return spec.isSatisfied(product);
        })
    }
}

const pf = new ProductsFilter();
const greenAndLargeProducts = pf.filter(products, greenAndLargeSpec);

console.log(greenAndLargeProducts);

export default {};
