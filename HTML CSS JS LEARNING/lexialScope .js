//lexical scoping 

const myVar = "value of global scope"; // myVar on global scope 

function myApp(){// declaring variuos function under a function
     //const myVar = "value1";

     function myFunc(){  //funtion declaration
                 var myVar1 = "value of MyFunc declaration";
                 const myFunc2 =()=>{
                        console.log("inside myFunc \n",myVar1); 
                }
                //myFunc2()
                console.log( "inside the myFunc",myVar1);
             }

      

     const myFunc2= function(){}    // funtion assigment expression
     
     const myFunc3= () => {}        // arrow fnction
    
     console.log(myVar) 
     myFunc()
}


myApp();        //function calling
