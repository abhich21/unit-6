Array.prototype.mymap = function(logic){
    let output = [];
    for (let i = 0; i < this.length; i++){
       // console.log(this)
        output.push(logic(this[i]))
    }
    return output;
}

const arr = [1, 2, 3, 98]
// arr.mymap((a) => 5*a)
// console.log(arr)
// let x = function (i) {
//     return i*5;
// }

let binary = (i) => {
    return i.toString(2)
}

console.log(arr.mymap(binary));



