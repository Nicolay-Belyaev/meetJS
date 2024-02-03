function Cook(name, dishes) {
    this.name = name;
    this.dishes = dishes;
}

function Dish(name, kind) {
    this.name = name;
    this.kind = kind;
}

const margarita = new Dish("margarita", "pizza");
const pepperoni = new Dish("pepperoni", "pizza");
const philadelphia = new Dish("philadelphia", "sushi");
const california = new Dish("california", "sushi");
const tiramisu = new Dish("tiramisu", "desert");
const cheesecake = new Dish("cheesecake", "desert");

const Viktor = new Cook("Viktor", ["pizza"]);
const Olga = new Cook("Olga", ["sushi"]);
const Dmitriy = new Cook("Dmitriy", ["desert"]);

const cooksCanMake = new Map();
cooksCanMake.set(Viktor, [margarita, pepperoni]);
cooksCanMake.set(Olga, [philadelphia, california]);
cooksCanMake.set(Dmitriy, [tiramisu, cheesecake])

const orders = new Map();
orders.set("Alexey", [pepperoni, tiramisu]);
orders.set("Maria", [california, margarita]);
orders.set("Irina", [cheesecake]);

console.log(cooksCanMake.get(Viktor))
console.log(orders.get("Alexey"))
