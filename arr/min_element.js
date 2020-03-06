// Find the minimum element in an array
const arr1 = [2, 1, 5, 8, 9, 0];

function findMin(arr) {
	let minimum = arr[0];

	for (let value of arr) {
		if (value < minimum) 
			minimum = value;
	}
	return minimum;
}

console.log(findMin(arr1));
