let x = 10;
let b = 10;

let y = ++x // nesse caso o valor ++ é incrementado antes

console.log(y);

y = b++ /* nesse caso o valor de x é incrementado depois,logo o valor inicial mostrado será de 10,não de 11.
pois o valor +1 só será incrementado apos na variavel*/

console.log(y);