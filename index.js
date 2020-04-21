function writeCards(array, event){
let otherArray = [];
for(let i = 0; i<array.length; i++ ){
    otherArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
}
return otherArray 
}

function countDown(num) {
    let countDown = num
    while (countDown >= 0) {
        console.log(countDown--)
    }
}

