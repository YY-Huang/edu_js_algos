// Find the second largest element in the array
// O(n) time since array is traversed once only
const arr1 = [9,2,3,6, 4];

function secondMax(arr) {
	let max = 0;
	let secondMax;

	for (let value of arr) {
		if (value > max) {
			secondMax = max;
			max = value;
		} else if(value > secondMax && value != max) {
			secondMax = value;
		}
	}
    
	return secondMax;
}

console.log(secondMax(arr1));