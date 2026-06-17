/*
==
===  //Mismo tipo numerico y mismo valor
!=
!==
<
>
<=
>=
AND
&&
OR
||
NOT
!
*/

const a = 10
const b = 20
const c = "30"

a == b // false
a === b // false
a === c // true
a == c // true

console.log(a == b) // false
console.log(a === b) // false
console.log(a === c) // false
console.log(a == c) // true