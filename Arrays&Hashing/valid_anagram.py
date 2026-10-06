def is_anagram(s, t):
    if len(s) != len(t):
        return False

    count_container = {}

    for everychar in s:
        count_container[everychar] = count_container.get(everychar, 0) + 1

    for everychar in t:
        if everychar not in count_container or count_container[everychar] == 0:
            return False
        count_container[everychar] -= 1

    return True

print(is_anagram("rat", "raa"))
