function greed()
{
    console.log("i'm  good");
}

console.log("hii");
console.log("how are you");
greed();

function add(a,b)
{
    console.log(a+b);   
}
add(10,20);

function iseven(num)
{
    if(num%2==0){
        console.log("is even"); 
    }
    else{
        console.log("is odd");  
    }
}
iseven(10);

function isprime(num)
{
    if(num/1 && num/num)
        {
        console.log("is prime");
        }
    else
        {
        console.log("is not a prime number");
        }
}
isprime(7);

function sub(a,b)
{
    return a-b;
}

let result = sub(3,1);
console.log(result);

function sqr(a)
{
    return a*a;
}

result =sqr(5);
console.log(result);


const multi = (a,b) => {console.log(a*b);}; //arrow function becouse of the use of "=>" symbol.
multi(44,66);