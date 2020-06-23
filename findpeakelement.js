//Objective is to find the index of a peak element in a 1-D array, or an element that is greater
//than its neighbors.

let nums = [1,2,3,1]


//O(n) approach that does a linear scan and finds an element that is greater than its neighbor.

//Case 1: Rising slope (will return last element since loop is never satisfied)
//Case 2: Descending slope (will return first element since first element satisfies loop)
//Case 3: Mountain slope (will return mountain peak due to loop)

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
        return i
    }
}

return nums.length - 1


//O(logn) approach that performs a binary search and returns the 'low' as the peak

let low = 0
let high = nums.length - 1

while (low < high) {
    let mid = Math.floor((low + high)/2)
    //Descending slope
    if (nums[mid] > nums[mid + 1]) {
        high = mid
    //Rising slope
    } else {
        low = mid + 1
    }
}

return low
