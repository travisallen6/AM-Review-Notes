
// ######################################################## //
// #-------------------- DOT NOTATION --------------------# //
// #------------------ BRACKET NOTATION ------------------# //
// #------------------ NESTED FOR-LOOPS ------------------# //
// ######################################################## //


// ==================== //
// === Dot notation === //
// ==================== //

// Dot notation can be used to access values on objects.
// Dot notation only works if you know the exact name of the property. You cannot use variables with dot notation, as it will not evaluate the variable.

    const homer = {
        name: 'Homer',
        sound: 'Doh',
        chokeBart: true
    }

    const prop = 'name';

    homer.prop === undefined // Since there is no key on the object named prop, and using dot notation will not evaluate a variable.
    // To evaluate a key as a variable, use bracket notation
    homer[prop] === 'Homer'


// You can also use dot notation to assign a key value pair to an object, but you cant use a variable to refer to the key 

    const prop2 = 'name'

    const obj = {}
    obj.prop2 = 'Duke Silver'

    // - obj will **NOT** look like this:

        {
            name: 'Duke Silver'
        }

    // - instead obj will look like this:

        {
            prop: 'Duke Silver' 
        }
    
    // This is probably not what you want...

    // To do this, you use bracket notation

    obj[prop2] = 'Duke Silver'

    // BINGO - Now we finally get
    {
        name: 'Duke Silver'
    }


// ======================== //
// === Bracket notation === //
// ======================== //

// Bracket notation can also be used to access numerical keys on an object, this looks similar to an array but don't be fooled

    const shoeSize = {
        0: 'What?',
        1: 'Baby',
        25: 'Shaq',
        29: 'Bigfoot is real',
        100: 'Get out'
    }
    // You cant use shoeSize.0 - ERROR: Unexpected token. 
    // Instead, you must use

    shoeSize[25] // >> Shaq

    // This looks like an array, but its not. Probably not a good idea to use numbers as keys in an object in your code.



// -- Write a function called objCreator that takes in two parameters, an array of object keys as strings, and an array of object values as strings. objCreator should return a new object with the combined key value pairs. 


    function objCreator(keyArray, valArray) {

        let newObj = {}

        for(let i=0; i<keyArray.length; i++) {
            newObj[ keyArray[i] ] = valArray[i]
            // use bracket notation to assign the key to the current value in the key array to the value at the same index in the value array
        }

        return newObj
    }

    let keyArr = ['Name', 'Age', 'Weapon']
    let valArr = ['Gandalf', 806, 'Boom Staff']

    console.log(objCreator(keyArr, valArr)) // >> ​​​​​{ Name: 'Gandalf', Age: 806, Weapon: 'Boom Staff' }​​​​​

// ======================== //
// === Nested for loops === //
// ======================== //

    ////////// PROBLEM 5 //////////

    /*
    Write a function called uniq that takes in an array and a callback function.
    Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
    */

    //Code Here

    function uniq(arr, cb) {
        let newArr = arr.slice()
    
        for(let i=0; i<newArr.length; i++) {
        // Start with an outer for loop. The inner for loop will run its entire loop  before the outer for loop advances to the next index.
            for(let j=newArr.length-1; j>i; j--) {
                // This loop is starting at the end of the array moving in a backwards.
                // This loop will stop at the index of I since we don't want to check if a value is equal to itself, which it always is
                if(newArr[i] === newArr[j]) {
                // If the value at index i matches the value at index j, we will remove the value at index j since it is a duplicate
                newArr.splice(j)
                }
            }
        }
        return cb(newArr)
    }
    
    // Do not edit the code below.
    var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

    uniq(names, function(uniqArr){
        console.log('The new names array with all the duplicate items removed is ', uniqArr);
    });


