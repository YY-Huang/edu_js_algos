// Given an array, return an array where each index stores the product of all numbers in the array except the number at the index itself.
const arr1 = [1, 2, 3, 4, 5, 6];
// [1] *2 * 3* 4 * 5 * 6 = [720]
// 1 * [2] * 3 * 4 * 5 * 6 = [720, 360]
// 1 * 2 * [3] * 4 * 5 * 6 = [720, 360, 240]
// 1 * 2 * 3 * [4] * 5 * 6 = [720, 360, 240, 180]
// 1 * 2 * 3 * 4 * [5] * 6 = [720, 360, 240, 180, 144]
// 1 * 2 * 3 * 4 * 5 * [6] = [720, 360, 240, 180, 144, 120]

// left =  [1,    1,   2, 6, 24, 120]
// right = [720, 360, 120,30, 6, 1]
// total = 720, 360, 240, 180, 144, 120]


// N^2 Complexity
// n + (n+1) / 2 times
function findProduct(arr) {
	let result =[];
	let left = 1, currentProduct;

	for (let i = 0; i < arr.length; i++) {
		currentProduct = 1;

		for (let j = i+ 1; j < arr.length; j++) {
			currentProduct = currentProduct * arr[j];
		}
		result.push(currentProduct * left);
		left = left * arr[i];
	}
	return result;
}

// O(n) complexity iterating over the same values (n+n)

function findProduct2(arr) {
	let left = 1;
	let right = 1;
	const product = [];

	for (let ele of arr) {
		product.push(left); 
		left *= ele;
	}
    
	for (let i = arr.length - 1; i >= 0; i--) {
		product[i] *= right;
		right *= arr[i];
	}

	return product;
}

console.log(findProduct(arr1));
console.log(findProduct2(arr1));

