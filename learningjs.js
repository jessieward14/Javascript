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
//6

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

var greastestdistance = 0;
let term1= numbers[0];
let term2 =numbers[2];
for (let i = 0; i < numbers.length - 1; i++) {
    var localdistance = Math.abs(numbers[i+1] - numbers[i]);
 //   console.log("local", localdistance);
  //  console.log("greateszt", greastestdistance);
    if(localdistance > greastestdistance){
        greastestdistance=localdistance;
        term1 = numbers[i+1];
        term2 = numbers[i];
    }
}
console.log(numbers);
console.log(term1);
console.log(term2);
console.log(greastestdistance);

let cars = numbers.map(function(element){
    return element * element;
})
console.log(cars);

let greatestnumber = 0;
for(let x=0; x<cars.length; x++){
    cars[x]
    if(cars[x]>greatestnumber){
        greatestnumber=cars[x];
    }

}
console.log(greatestnumber);
console.log(greatestnumber/2);

let carrots = cars;
carrots = carrots.filter((e)=>{
    return e>greatestnumber/2;
})
console.log(carrots);

let tomatoes = carrots.reduce(getTotal,0);

function getTotal(total, num){
    return total + num;
}
console.log(tomatoes);

numbers.forEach(myFunction);

function myFunction(item, index) {
    console.log( index + ": " + item );
  }
  class beans{
    constructor(name, color, amount){
        this.name = name;
        this.color = color;
        this.amount =amount;

    }
   print(){
    console.log("This bean is a " + this.name+ ". It is " + this.color +" and has " +this.amount + " peas inside of it." ) 
   }
   
  }

const newbean = new beans ("Ice","Blue", 8);
newbean.print();
const bean = [];
bean.push(new beans("garden","yellow",6));
bean.push(new beans("Spring","ashy",6));
bean.push(new beans("Winter","black",8));
bean.push(new beans("Fall","purple",7));
bean.push(new beans("Summer","tan",2));
bean.push(new beans("Sunny","red",5));
bean.push(new beans("Fresh","pink",12));
bean.push(new beans("Organic","orange",4));
bean.push(new beans("Local","green",10));
bean.push(new beans("Processed","gray",1));