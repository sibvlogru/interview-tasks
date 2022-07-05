/*
        (C) Denis Bezyzvestnykh
        https://javascript.study
        https://nodejs.guide

        Task:
            https://leetcode.com/problems/palindrome-number/

        Explanation:
            https://javascript.study/palindrome-number-interview-task/
        
*/

var isPalindrome = function (x) {
    return +(x + '').split('').reverse().join('') === x
};

// console.log(isPalindrome(-112233332211));

/*

    Solution 2:

    const num = x + '';
    if (x >= 0) {
        for (let i = 0; i < Math.floor(num.length / 2); i++) {
            
            if (num[i] !== num[num.length - i - 1]) {
                return false;
            }
        }
        return true;
    } else { return false; }

*/


/*
    Solution 3:

    if (x<0) return false;
    const num = (x + '').split('');
    for (let i = 0; i < num.length/2; i++) {
        if (num[i] !== num[num.length - i - 1]) return false;
    }
    return true

*/