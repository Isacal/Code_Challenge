function SubarrayWithSumOfTargetFound(arr, target) {
    let start = 0; // Initialize the start pointer
    let currentSum = 0; // Initialize the current sum

    // Iterate over the array with the end pointer
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; // Add the current element to the current sum
        console.log(`End: ${end}, Current Element: ${arr[end]}, Current Sum: ${currentSum}`);
        
        // Shrink the window from the left while currentSum is greater than the target
        while (currentSum > target && start <= end) {
            console.log(`Before shrinking: Start: ${start}, Current Sum: ${currentSum}`);
            currentSum -= arr[start]; // Subtract the element at the start pointer from the current sum
            start++; // Move the start pointer to the right
            console.log(`After shrinking: Start: ${start}, Updated Sum: ${currentSum}`);
        }
        
        // Check if the current sum equals the target
        if (currentSum === target) {
            console.log(`Subarray found from index ${start} to ${end}`);
            return true; // If found, return true
        }
    }
    
    // If no subarray is found that sums to the target, return false
    return false;
}

const arr1 = [4, 9, 2, 7, 1, 5];
const target1 = 17;
console.log(SubarrayWithSumOfTargetFound(arr1, target1)); // Output should be true
