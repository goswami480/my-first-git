     // if-else vs switch case
     function findAge(){
        const familyMember = document.getElementById("family_member_name").value;
        console.log("familyMember: ", familyMember);
        let age = 0;
        // if(familyMember == "himanshu"){
        //     console.log("first if");
        //     age = 20;
        // }else if(familyMember == "amit"){
        //     console.log("2nd if");
        //     age = 35;
        // }else if (familyMember == "hushanpal"){
        //     console.log("3rd if");
        //     age = 45;
        // }

        // if(familyMember == "amit" && address == "kurali" && fathername == "abc"){
        //     console.log("Yes its true");
        // }
        switch (familyMember) {
            case "himanshu":
                age = 20;                
                break;
            case "amit":
                age = 35;
                break;
            case "hushanpal":
                age = 45;
                break;
            default:
                age = 0;
                break;
        }
    
        document.getElementById("age").value = age;
    }

    // while loop
    // 1, 10
    function whileLoopDemo(firstNo, secondNo){
        while(firstNo < secondNo){
            document.getElementById("whileloop").innerHTML += firstNo + "\n";
            console.log("first no: ", firstNo);
            firstNo++;
        }
    }

    // for loop 
    // syntax, 
    // for (initialization, test condition , iteartion){    }

    // print table of any number
    let startingNo = 1;
    function forLoop(myNo){
        let length = 10;
        for(let startingNo = 1; startingNo <= length; startingNo++){
            let result = myNo * startingNo;
            document.getElementById("forloop").innerHTML += result + "<br>";
            
        }
    }
    

        //  for(let i = 1; i<=1; i++){
        //     for(let j = i; j<=i; j++){
        //     document.write(i)
        // }
        //     document.writeln("<br>")
        //  }
        // function forloop(myval){
        //      for(let i = 1; i<=1 ; i++){
        //         for(let j = i; j<=i; j++){
                    
        //         }
        //      }
        
        // }



    /*

    *
    **
    ***
    ****
    *****

    *****
    ****
    ***
    **
    *
 
    *
   ***
  *****
 *******

 */
// function pattern_maker(){
//     let tempNo = 4;
//     for(let i=1; i<=4; i++){
//         // 1 = i-1; 1-1 = 0
//         // i(1)+0 = 1
//         // 2-1 = 1
//         // i(2)+1 = 3
//         // i = 2+1 = 3
//         // 3 = 3+2
//         // 4 = 4+3
//         // 1+2 = 3 -- 3
//         // 2+2 = 4 -- 2
//         // 3+2 = 5 -- 1
//         // 4+2 = 6 -- 0
//         let x = 0;
//         if(i < tempNo){
//             x = tempNo-i;
//         }
//         const flag = 1;
//         let result = i-flag;
//         let counter = result+i;
//         for(let k = 1; k <= x; k++){
//             document.write('&nbsp;')
//         }
//         for(let j=1; j<=counter; j++){            
//             document.write("*")
//         }
//         document.write('<br/>')
//     }

// }
// pattern_maker();

// playlist (spotify)
// billion dollor code (google earth)
// social network (facebook)
/*
****
****
****
****
*/
function pattern(){
for(let i = 1; i<=4; i++){
    // console.log('i=', i)
    for (let j = 1; j<=4; j++)
    // console.log('j=',  j)
{
    document.write ("*")
}
document.write("<br/>")
}
}
pattern();

// for-in loop, its used to iterate on object
// objects is a datatype, which stores data in the form on key:value pairs
// for eg: {key: value}

// what is the difference between multile types of loops
// for loop
// while loop
// for-in loop

// const navObj = navigator;
const navObj = { 'name': "john", 'age': 24, 'country':"US" };
for(let key in navObj){
    console.log(navObj.age);

}
// Task: print only age from the above object

// loop control  

// Task: break the loop if you find number 68, when a loop is iterating from 1 - 100
for(let i=1; i<=100; i++){
    // console.log("i=", i);
    if(i==68){
        console.log("iiii==", i);
        break;
    }
}

// continue
for(let i=1; i<=10; i++){
    console.log("i=", i);
    if(i==5){
        continue;
    }
    console.log("iiii==", i);
    
}
//javascript {cookies} for beginners in hindi

for(let i = 1 ; i<=20; i++){
    console.log('i=', i);
    if(i == 12){
        break;
    }
    console.log('ii=', i)
};

for(let i = 1; i<=30; i++){
    console.log('i=', i)
    if(i == 14){
        continue;
    }
    console.log('ii=',i33636)
}