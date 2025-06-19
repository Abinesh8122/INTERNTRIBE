function fact(n){
  if(n==1) return 1;
  return fact(n-1)*n;
}
let n=5;
console.log( 'the factorial of',n,'is',fact(n));
