

function task(){
    var y = prompt ("Enter your age")
    if(y >= 17){
        document.write("welcome to the page");
    }else if (y < 18){
        document.write('ur not eligible to enter in the page');
    }else{
        document.write("invalid input")
        document.getElementById("task").innerHTML ;
    }
    // var variable
    var abc = 129
    abc = 150;
    abc = 175;
    abc = 180;
    var x = "himanshu";
  
    console.log("variable value = " , abc , x  );
// //  let variable
//    let z = 120
//     z = 230;
//     z = 235 ;
//     z = 240 ;
//     let e;
//     e = "string value"

//     console.log('variable value = ',z ,e)
//     // /const varaible
//     const v = 50 ; 
//     //  v = 55;
//      console .log("variable value = ", v)
//      const tim = {
//         "age": 20 ,
//         "address":"mohali",    
//     }
//     console.log (tim);
//      tim.address="chandigarh";
//     console.log(tim)


    // var k = 12;
    //   var o = 2;
    //   console.log(k*o,k+o,k-o,k/o,o%k,);

}  

// switch cases
 function task2(){
    const abc = document.getElementById("on").value  ;
    let price = 0;
    switch (abc) {
        case "science":
        price = 150;
        break;

        case"hindi":
        price=200;
        break;

        case"maths":
        price=250;
        break;
        case"punjabi":
        price=350;
        break;
        case"english":
        price=450;
        break;
        case"evs":
        price=550;
        break;

        default :
        price=0;
        break;
    }
      document.getElementById("price").value = price;
}

     


// while loop
// function loop(a,b){
//     while(a<=b){
//         document.getElementById("a").innerHTML += a + "<br>";
//         console.log(a);
//         a++;
// }
// }
function whileloop(){
    var a = 1;
    var b = 10;
    while(a<=b){
        document.getElementById('loop').innerHTML += a+ '<br>' ;
          console.log(a);
          a++;
    }
};
// forloop
function loo2(myno){
    for(let i = 1; i<=10 ; i++){
        let result=myno*i;
        document.getElementById('loops').innerHTML+= result +"<br>";
        console.log (result);
    };
}

function myloop(){
    for(let i = 1 ; i<=10; i++){
       let result = 2*i;
       document.getElementById('forl').innerHTML += result+ '<br>';
       console.log(result);
       
    }
   
}
 // for in loop



    
function task3(){
  alert('warning');

//   let t = confirmation("do u want to continue")

let p = prompt("enter your age ");
if(p >= 18){
   document.write('eligible for vote');

}else if (p<18){
  document.write("not eligible ")
}else {
  document.write('enter your age');
  document.getElementById("task3"). innerHTML;
}
const objname={
    "name":"himanshu",
    age:20, 
    "country":"India"
};
for(let key in objname){
    console.log(objname.age)
}
// loop control 
// break
for(let i =1; i<=15; i++){
    console.log("i=",i)
    if(i==8){
        break;
        }
        console.log("ii=",i)
}
 for(let i =1; i<=15; i++){
    console.log("i=",i)
    if(i==9){
        continue;
    }
   console.log('ii=',i)
};
}


// page redirect
function task4(){
     window.location.href = "https://www.tutorialspoint.com"
}
// void keyword

function task5(){
    var  a,b,c;
     a=void  (b=22 ,c=33)
     document.write(" a = "+a+  " b = " +b+ " c = "+c)
     
};


      