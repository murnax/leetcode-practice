const fizzBuzz = function(n) {
    let output = []
    
    for (let i = 1; i <= n; i ++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push('FizzBuzz')
            continue
        }
        if (i % 3 === 0) {
            output.push('Fizz')
            continue
        }
        if (i % 5 === 0) {
            output.push('Buzz')
            continue
        }
        output.push(String(i))
    }
    
    return output
};

console.log(fizzBuzz(15))