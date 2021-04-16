var array = [4, 5, 11, 9];

function arr(array) {
    var newArr = [];
    var first = array[0];
    var last = array[array.length-1];
   for (var i = 0; i < array.length;i++) {
        if (i === 0) {
            newArr[i] = array[i];
        } if (i === array.length-1) {
            newArr[i] = array[i];
        } else {
            newArr[i] = array[i];
        }
    }
    return newArr;
}    

console.log(arr(array));