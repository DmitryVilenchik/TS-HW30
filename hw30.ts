function shiftCipher(str: string, shift: number):string {
    let arr=str.split('');
    arr.forEach(function(v,i,a) {
        if (a[i].charCodeAt(0)>=97 && a[i].charCodeAt(0)<=122)
        {let ss=v.charCodeAt(0)+shift;
                 if (ss>122) {
                    //while (ss>122)
                    a[i]=String.fromCharCode(ss-122+96)}   
                 else {a[i]=String.fromCharCode(ss)};
        }
    });
    return arr.join('');
}
function shiftDecipher(str: string, shift: number):string {
    let arr=str.split('');
    arr.forEach(function(v,i,a) {
        if (a[i].charCodeAt(0)>=97 && a[i].charCodeAt(0)<=122)
        {let ss=v.charCodeAt(0)-shift;
                 if (ss<97) {
                    
                    a[i]=String.fromCharCode(122-97+ss)}   
                 else {a[i]=String.fromCharCode(ss)};
        }
    });
    return arr.join('');
}

console.log(shiftCipher('abc', 2));
console.log(shiftCipher('zyw', 2));
console.log(shiftCipher('zyw', 25));
console.log(shiftDecipher('abc', 2));
