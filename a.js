// how we can define object
// two methods of making object


// let member= new Object();
// let user={
//     name:"zain ul abideen"
// }

// // how to add properties in object
// user.name="zain";


// console.log(user);
// console.log(member);

// const user={
//     name:"zain",
//     age:"25",
//     isDeveloper:true,
//     getData:function(){
//         return this.country
//     },
//     innerobj:{
//      name:"inner object" 
//     }
// }
// user.name="adil"
// delete user.innerobj
// delete user.age
// user.country="AMERICA"
// console.log(user.getData())
// console.log(user.innerobj.name)
// console.log(user.getData())

////hoisting
// console.log(a)
// zain()
// function zain(){
//  console.log( "he is very intelligent")
// }
// var a=9;
// console.log(a)

// console.log(a)     undefined
// var a=9
// console.log(a)     9 

// zain()
// function zain(){
//     console.log("he is very intelligent")
// }

//outpiut he is very intelligent

// zain()
// var zain=function(){
//  console.log("he is very intelligent")   
// }

// zain()
// const zain=()=>{
//     console.log(first)
// }


////again objects////
let key="address"
let phone=12121212
let email="123@gmai.com"
const user={
    name:"zain",
    age:"25",
    isDeveloper:"true",
    getdata(){
        return this.city
    },
    innerobj:{
       name:"adil"
    },
    ["pin code"]:"123455",
    [key]:"old mall madni,okara",
    phone,email
}

// user.name="ahmed"
// console.log(user)
//user.city="america"
// console.log(user.getdata())
// // user["pin code"]="123151"
// console.log(user["pin code"])
//console.log(user)
//console.log("city" in user)

// for (item in user){
// console.log(`key is :${item} : is  ${user[item]}`)
// }

let emp={
    zain:100,
    ali:200,
    adil:300,
}
let salary=0;
for (item in emp){
    salary =salary + emp[item]
    
}
console.log(salary);