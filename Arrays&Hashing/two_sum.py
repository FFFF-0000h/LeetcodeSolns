def two_sum(nums, target):
    seen = {}

    for index, value in enumerate(nums):
        complement = target - value

        if complement in seen:
            return [seen[complement], index]
        else:
            seen[value] = index

print(two_sum([2,3,4,5,6,7,8], 6))
