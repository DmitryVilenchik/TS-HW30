const char_a: number=97;
const char_z: number=122;

function shiftCipher(str: string, shift: number=1):string {
    let arr=str.split('');
    if (shift%(char_z - char_a)==0) {shift=char_z - char_a} else {shift=shift%(char_z - char_a)}
    arr.forEach(function(v,i,a) {
        if (a[i].charCodeAt(0)>=char_a && a[i].charCodeAt(0)<=char_z)
        {let ss=v.charCodeAt(0)+shift;
                 if (ss>char_z) {      
                    
                    a[i]=String.fromCharCode((char_a - 1)+(ss%char_z))
                }
                 else {a[i]=String.fromCharCode(ss)};
        }
    });
    return arr.join('');
}
function shiftDecipher(str: string, shift: number=1):string {
    let arr=str.split('');
    if (shift%(char_z - char_a)==0) {shift=char_z - char_a} else {shift=shift%(char_z - char_a)}
    arr.forEach(function(v,i,a) {
        if (a[i].charCodeAt(0)>=char_a && a[i].charCodeAt(0)<=char_z)
        {let ss=v.charCodeAt(0)-shift;
                 if (ss<char_a) {                 
                    
                    a[i]=String.fromCharCode((char_z + 1)-(char_a % ss))}
                 else {a[i]=String.fromCharCode(ss)};
        }
    });
    return arr.join('');
}

console.log(shiftCipher('abc', 2));
console.log(shiftDecipher('cde', 2));
console.log("-----------");
console.log(shiftCipher('zyw', 2));
console.log(shiftDecipher('bay', 2));
console.log("-----------");
console.log(shiftCipher('zyw', 25));
console.log(shiftDecipher('yxv', 25));
console.log("-----------");
console.log(shiftCipher('abc.!A', 1000));
console.log(shiftDecipher('zab.!A', 1000));
