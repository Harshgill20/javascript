const user ={
    name:"abc",
    age: 77,
    gender:"male"
}

console.log(user);

//accessing any element.
console.log(user.name);
console.log(user["name"]);

//updation of element.

user.name="honey singh";
console.log(user.name);

//adding of element.

user.city="hoshiarpur";
console.log(user);

user.work="singer";
console.log(user.work);
console.log(user);

//deletion of element.
delete user.age;
console.log(user.age);
console.log(user);

//loop

for(let key in user)
{
    console.log(key +":" +user[key]);
}

//arrray of objects

let students=[
    {
        id:1,
        name:"john",
        class:6
    },
    {
        id:2,
        name:"baby",
        class:7
    },
    {
        id:3,
        name:"jannu",
        class:10
    }
]
console.log(students[1]);
console.log(students[2].class);

//slice is used for geting the part of array.

//splice is used for adding and removing the element from array.