//o que sao vetores ou arrays


// como declarar um array
/*let array1 = ['string', 1, true];
console.log(array1); */

// guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
console.log(array);

// forEach

/* array.forEach(function(item, index){console.log(item, index)}); */

// push
/* array.push('novo item');
console.log(array); */

// pop
/*array.pop();
console.log(array); */

// shift
/*array.shift();
console.log(array); */

//inshift
/*array.unshift('novo item no incio');
console.log(array); */

//index
/*console.log(array.indexOf(true)); */

//splice
/* array.splice(0, 3);
console.log(array); */

//slice
let novoArray = array.slice(0, 3);
console.log(novoArray);