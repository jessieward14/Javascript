let x = Math.floor(Math.random()*1000)
if(x % 9 == 0 && x % 7 == 0){
    console. log("success");
}else{
    console. log("failed");
} 

let weather = 80;

const weatherState = weather > 90 ? 'too hot':  weather < 60 ? 'too cold' : 'perfect';
console. log(weatherState);

function add(a, b) {
    return a + b; // This will return the sum of a and b
}

let result = add(3, 4); // Calling the function with 3 and 4
console.log(result);


//let myfunction = (a,b) => add(8,10);



let myfunction = () => {
    return add (Math.random()*100,Math.random()*100);
}
console.log(myfunction());

const strings = ["dog","bunny","cat","tiger","horse","cow","catipillar","worm","sheep","butterfly","fish","shark","turtle","giraffe","owl"];
let size = strings.length;
console.log(size);

console.log(strings[0]);
console.log(strings[14]);
console.log(strings[Math.floor(Math.random()*15)])

strings.sort();
console.log(strings);
strings.push("bear");
console.log(strings);
strings.sort();
console.log(strings);
strings.push(1);
console.log(strings);


const numbers = [];
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
numbers.push(Math.floor(Math.random()*58)+29);
console.log(numbers);
