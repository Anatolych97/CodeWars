var isAnagram = function (test, original) {

    if (test.length === original.length)
        return comparer(counter(test.toLowerCase()), counter(original.toLowerCase()));

    return false;

    function comparer(object1, object2) {
        for (let key in object1) {
            if (object1[key] !== object2[key]) return false;
        }
        return true;
    }

    function counter(str) {
        let obj = {};
        for (let i = 0; i < str.length; i++) {
            if (obj[str[i]]) {
                obj[str[i]]++;
            } else {
                obj[str[i]] = 1;
            }
        }
        return obj;
    }
};