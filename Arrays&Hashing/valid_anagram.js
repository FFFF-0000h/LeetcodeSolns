function is_anagram(s, t) {
    if (s.length != t.length) {
        return false;
    }

    const count_container = new Map();

    for (const char of s) {
        if (count_container.has(char)) {
            count_container.set(char, count_container.get(char) +1);
        } else {
                  count_container.set(char, 1);
               }
    }

    for (const char of t) {
        if (count_container.has(char) == false || count_container.get(char) == 0)         {
            return false;
        }
        count_container.set(char, count_container.get(char) - 1);
    }
    return true;
}

console.log(is_anagram("listen", "silent"));
