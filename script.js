const mergeArrays= (firstArray, secondArray) => {
    return [...firstArray, ...secondArray]
}

const removeDuplicates = (...args) => {
    return args.filter((element, index) => args.indexOf(element) === index);
}

const getEvenNumbers = (array) => {
    return array.filter(element => element % 2 === 0);
}

const calculateAverage = (array) => {
    return array.reduce((acc, currentValue) => acc + currentValue, 0) / array.length;
}

const capitalizeFirstLetter = (string) => {
    return string.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

const createCalculator = (incomingNumber) => {
    return {
        add: (arg) => {incomingNumber += arg},
        subtract: (arg) => {incomingNumber -= arg},
        getNumber: () => {return incomingNumber}
    }
}

const createGreeting = (name) => {
    return () => {
        console.log(`Hello, ${name}`)
    }
}

const createPasswordChecker = (passLength) => {
    return (password) => {
        return password.length >= passLength;
    }
}

const sumDigits = (number) => {
    if (number < 10) {return number}
    return number % 10 + sumDigits(Math.trunc(number / 10))
}



