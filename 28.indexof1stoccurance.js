function indexOf1stOccurance(haystack, needle) {
    let ans = haystack.search(needle);

    return ans;
};

let haystack = "sadbutsad", needle = "sad";

console.log(indexOf1stOccurance(haystack, needle))