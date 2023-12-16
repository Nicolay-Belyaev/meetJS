class Book {
    title;
    author;
    pages;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(' Книга "', this.title, '" от ', this.author, ' содержит ', this.pages, ' страниц.');
    }
}

const theLordOfTheRing = new Book("The Lord of The Ring", "J.R.R. Tolkien", 1000);
theLordOfTheRing.displayInfo();


class Student {
    name;
    age;
    grade;

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(' Name:', this.name, '\n','Age:', this.age, '\n', 'Grade:', this.grade, '\n');
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
