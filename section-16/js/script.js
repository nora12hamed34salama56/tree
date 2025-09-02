
// var fristName="Nora"
// var lastName="Hamed"
// var fullName=
// console.log()
// a=30
// b=50
// sum=a+b
// console.log(sum)
// console.log(a==b)
// a+=30
// console.log(a)
// console.log(fristName=="Nora"&& a==60)
// console.log(fristName=="Ahmed" ||b==40)
// console.log(!(a==30))
// sum=a**2
// console.log(sum)
// console.log(++b)
// console.log(--a)
//var degree = prompt("enter your degree");

     //if(degree<=100 && degree>0){
        //if(degree>=90) console.log("A")
           // else if(90>degree || degree>=80) console.log("B")
        //else if(80>degreev || degree>=70)console.log("c")
   // else if(70>degree || degree>=60) console.log("d")
//else if(degree<60) console.log("f")
   // }
//else console.log("numberInvalid")
//var p =prompt ("enter your number")
//var d =prompt("enter number")
//for(p;d;p++){
    //if(p==7) break
    //if(p==2) continue
    //console.log(p)
//}
//function sum(n1 ,n2){
   // var num1 =n1
    //var num2=n2
   // var result=num1+num2
    //return result

//}
//var r1=sum(50,70)
//var r4 = sum(40,10)
//console.log(r1)
//console.log(r4)
// function looping(start,end ,p ,c){
// for(var i= start ; i<=end ; i++){
//     if(i==p) break;
//     else if (i==c) continue;
//     else console.log(i);
        
//     }
// }
// looping(1,10,9,3);

// 
//  var a=[
//    {
//    name : "nora",
//    lastName:"hamed",
//    age:21,

//  },
// {
//    name: "mohamed",
//    lastName:"hamed",
//    age:17,
// }
// ]
// console.log(a)
// var p=prompt()
// var index=a.findIndex((ele)=> ele>p)
// a.splice(index,1)
// console.log(a)
var a=[]
function addUser( name,id,balance){
user={name,id,balance}
a.push(user)

}
function internumber(){
   var num=prompt("enter number")
   return num
}

   for(i=0 ; i<internumber(); i++){
var name=prompt("enter name")
var id=prompt("enter id")
var balance=prompt("enter balance")
addUser(name,id,balance)
   }

var i=prompt("enter id")
var index=a.findIndex((ele)=>ele>i)
a.splice(index ,1)
console.log(a)