// Find the first unique integer in an Array

// O(n)^2 since iterating inside a for loop and then using a while loop inside the same data - element

const arr1 = [1, 1, 3, 3, 3, 4, 4, 2];

function findFirstUniq(arr) {
	let index2;
	for (let index1 = 0; index1 < arr.length; index1++) {
		index2 = 0;
		while (index2 < arr.length) {
			if ((index1 != index2) && (arr[index1] == arr[index2])) {
				break;
			}
			index2+=1;
		}
		if (index2 == arr.length) 
			return arr[index1];
	}
    
	return null;

}

console.log(findFirstUniq(arr1));