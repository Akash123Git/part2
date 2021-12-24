class Students {
    constructor(roll = 0, name = "", age = 0) {
        this.roll = roll;
        this.name = name;
        this.age = age;
    }

}

class CS extends Students {
    constructor(roll, name, age, html = 0, web = 0) {
        super(roll, name, age)
        this.html = html;
        this.web = web;
    }
    create() {
        
        var student = {
            roll: this.roll,
            name: this.name,
            age: this.age,
            marks: {
                html: this.html,
                web: this.web
            }
        }
        return student;
    }
}

class IT extends Students {
    constructor(roll, name, age, aws = 0, java = 0) {
        super(roll, name, age)
        this.aws = aws;
        this.java = java;
    }
    create() {
        var student = {
            roll: this.roll,
            name: this.name,
            age: this.age,
            marks: {
                aws: this.aws,
                java: this.java
            }
        }
        return student;
    }
}

var ob = new CS(20, "hii", 10, 55, 65);
var d1 = ob.create();
var ob1 = new CS(21, "hello", 12, 23, 45);
var d2 = ob1.create();
var ob2 = new IT(22, "who", 13, 65, 70);
var d3 = ob2.create();
var ob3 = new IT(25, "whom", 12, 35, 55);
var d4 = ob3.create();
var ob4 = new IT(24, "say", 12, 54, 75);
var d5 = ob4.create();
var ob5 = new IT(45, "seen", 12, 23, 45);
var d6 = ob5.create();
var ob6 = new IT(56, "hello", 12, 43, 75);
var d7 = ob6.create();

var arr = [d1, d2, d3, d4, d5, d6, d7];
var arr1 = [];

function compile(arr) {
    var per;
    var marks = arr.marks;
    var data = Object.values(marks);
    per = data.reduce((a, b) => { return a + b; })
    per = per / 2;
    if (per >= 45)
        arr1.push(arr);
    per = 0;
}

arr.map(compile)
console.log(arr1)