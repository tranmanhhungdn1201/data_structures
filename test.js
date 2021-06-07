class Dog {
    // Tạo các thuộc tính (property)
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type
    }

    // Thêm vào các phương thức (method)
    bark() {
        console.log(`${this.name} barks: Go Go Go`)
    }
}

// Khởi tạo 1 instance object
let milu = new Dog('Milu','Black','Becgie');
let milu1 = new Dog('Milu1','Black1','Becgie1');
console.log(milu.bark === milu1.bark);
milu.bark() // Milu barks: Go Go Go
milu1.bark() 