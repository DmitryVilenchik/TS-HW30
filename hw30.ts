function shiftCipher(str: string, shift: number):string {
    let arr=str.split('');
    arr.forEach(function(v,i,a) {
        if (a[i].charCodeAt(0)>=97 && a[i].charCodeAt(0)<=122)
        {let ss=v.charCodeAt(0)+shift;
                 if (ss>122) {a[i]=String.fromCharCode(ss-122+96)}   
                 else {a[i]=String.fromCharCode(ss)};
        }
    });
    return arr.join('');
}

console.log(shiftCipher('abc', 2));
