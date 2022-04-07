const { expect } = require("@jest/globals");
const operations = require("./operations");
//Add
test("ADD - two int values (Pass)", () =>{
    let x = 4;
    let y = 6;
    let z = operations.add(x,y);
    expect(z).toEqual(10);
})
test("ADD - two float values (Pass)", () =>{
    let x = 4.3;
    let y = 6.8;
    let z = operations.add(x,y);
    expect(z).toEqual(11.1);
})
test("ADD - two string float values equal 0 (Pass)", () =>{
    let x = "banana";
    let y = "apple";
    let z = operations.add(x,y);
    expect(z).toEqual(0);
})
//Subtract
test("SUBTRACT - two int values (Pass)", () =>{
    let x = 4;
    let y = 6;
    let z = operations.subtract(x,y);
    expect(z).toEqual(-2);
})
test("SUBTRACT - two float values (Pass)", () =>{
    let x = 4.3;
    let y = 6.8;
    let z = operations.subtract(x,y);
    expect(z).toEqual(-2.5);
})
test("SUBTRACT - two string float values equal 0 (Pass)", () =>{
    let x = "banana";
    let y = "apple";
    let z = operations.subtract(x,y);
    expect(z).toEqual(0);
})
//multiplier
test("MULTIPLY - two int values (Pass)", () =>{
    let x = 4;
    let y = 6;
    let z = operations.multiply(x,y);
    expect(z).toEqual(24);
})
test("MULTIPLY - two float values (Pass)", () =>{
    let x = 4.3;
    let y = 6.8;
    let z = operations.multiply(x,y);
    expect(z).toEqual(29.24);
})
test("MULTIPLY - two string float values equal 0 (Pass)", () =>{
    let x = "banana";
    let y = "apple";
    let z = operations.multiply(x,y);
    expect(z).toEqual(0);
})
//divide
test("DIVIDE - two int values (Pass)", () =>{
    let x = 6;
    let y = 2;
    let z = operations.divide(x,y);
    expect(z).toEqual(3);
})
test("DIVIDE - two float values (Pass)", () =>{
    let x = 8.2;
    let y = 4;
    let z = operations.divide(x,y);
    expect(z).toEqual(2.05);
})

