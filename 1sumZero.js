// Sum Zero

let addToZero = (array) => {
    let left = 0;
    let right = array.length -1;
    while(left < right) {
        sum = array[left] + array[right];
        if (sum == 0) {
            return [array[left], array[right]];
        }else if (sum>0) {
            right--
        }else {
            left++;
        }
    }
}

const result = addToZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);

// the runtime is O(n) and space is O(1)