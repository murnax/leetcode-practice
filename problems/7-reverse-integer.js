var reverse = function(x) {
    let rev = 0;
    while(x != 0) {
        let pop = x % 10;
        x = parseInt(x / 10);
        console.log(pop, x, Number.MAX_SAFE_INTEGER)
        
        if (rev > Number.MAX_SAFE_INTEGER / 10 ||
            (rev === Number.MAX_SAFE_INTEGER / 10 && pop > 7)) {
            return 0;
        }
            
        if (rev < Number.MIN_SAFE_INTEGER / 10 ||
           (rev === Number.MIN_SAFE_INTEGER / 10 && pop < -8)) {
            return 0;
        }
            
        rev = rev * 10 + pop;
    }
    console.log(rev)
    return rev;
};

var a = reverse(123)
console.log(a)