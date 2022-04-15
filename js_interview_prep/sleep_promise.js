//var arr = [1, 2, 3, 4, 5]

/* */
// for (var i = 0; i < arr.length; i++){
//      setTimeout(()=> console.log(arr[i],i),i*1000)
// }
// console.log('value of i after for loop', i)
/* */

// for(var i=0; i<arr.length; i++){
//   setTimeout(function(i){
//    	return function(){
//       console.log(arr[i],i)
//     }
//   }(i),i*1000)
// }
/* */
 
// function display(i){
//   setTimeout(()=>console.log(this[i],i),i*1000)
// }
let x = "hghg";

const sleep = new Promise((resolve, reject) => {

if ((typeof x) === "number") {
        resolve(`slept for ${x} milli seconds`)
    } else {
        reject(`provide a number`);
    }

})

sleep.then(res => {
    console.log(res)
})
.catch(err=>{
    console.log(err)
})



