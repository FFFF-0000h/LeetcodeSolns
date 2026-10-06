function two_sum(nums, target) {
    const seen = new Map();

    for (let index = 0; index < nums.length; index++) {
        const current_number = nums[index];
        const complement = target - current_number;

        if (seen.has(complement)) {
            return [seen.get(complement), index]
        }
        seen.set(current_number, index);
    }
}

console.log(two_sum([2,3,4,5,6,7,8], 6));
