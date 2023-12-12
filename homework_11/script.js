const arr = [1, 5, 7, 9];
const minValue = Math.min(...arr);

const createCounter = () => {
    let counter = 0;
    return {
        increment: () => {counter++},
        decrement: () => {counter--},
        getCounter: () => {return counter}
    }
}

const findElementByClass = (domElement, classname) => {
    if (domElement.classList.contains(classname)) {
        return domElement;
    }
    let children = [...domElement.children];
    for (let child of children) {
        const foundElement = findElementByClass(child, classname);
        if (foundElement) {
            return foundElement;
        }
    }
    return null;
}
