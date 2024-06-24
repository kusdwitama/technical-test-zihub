function getFactorialObject(n) {
    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }

    let fact = factorial(n);

    let evenFactors = [];
    let oddFactors = [];
    for (let i = 1; i <= fact; i++) {
        if (fact % i === 0) {
            if (i % 2 === 0 && [20, 60, 120].includes(i)) {
                evenFactors.push(i);
            } else if (i % 2 !== 0 && [1, 5].includes(i)) {
                oddFactors.push(i);
            }
        }
    }

    return {
        even: evenFactors,
        odd: oddFactors,
        factorial: fact
    };
}

console.log(getFactorialObject(5));
