//program that takes in array of numbers multiply first 4 by itself and last two added by 10 
//return array of new values
let numbers = [3, 4, 5, 6, 7, 8, 9, 10]
function multiplication() {
    let newNumbers = numbers.slice(0, 4);
    newNumbers.forEach(i => {
        console.log(i * i)
    }

    )
    let newNumbers2 = numbers.slice(-2);
    newNumbers2.forEach(i => {
        console.log(i + 10);
    })


}

multiplication()

// programme that takes in array and use a while loop and break when item is equal to index 4


function arrayOfNumbers() {
    let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8,]
    arrayNum.forEach(k => {

        while (arrayNum< 4) { break; }
        console.log(arrayNum);

    })

}
arrayOfNumbers();

//function taking array of string an use continue statement when the item is on the second index

let fruits = ['Apple', 'Plam', 'Banana', 'strawberry', 'Kiwi']
function arrayOfFruits() {

    for (let i = 0; i < fruits.length; i++) {

        if (fruits[2] === "Banana") {
            continue;
        }


    }
    console.log(fruits);

}
arrayOfFruits();


// function that accepts an array of strings and console.logs each element using a for loop

let color = ["Blue", "purple", "Grey", "Pink"]
function arrayString() {

    for (let i = 0; i < color.length; i++) {
        console.log(color[i]);
    }

}
arrayString();

// function that takes a string as input and reverses it using a while loop.

function reverseString(subject) {
    const reversedString = 
    subject.split("").reduce((acc,char)=> char + acc, "")
    console.log(reversedString)
    

    

}
reverseString("science");