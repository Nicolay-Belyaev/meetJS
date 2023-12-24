class Order {
    orderNumber;
    products;

    constructor(orderName) {
        this.orderNumber = orderName;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        return this.products.reduce((totalPrice, currentProduct) => totalPrice + currentProduct.price, 0);
    }
}

class Product {
    productName;
    price;

    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice());
