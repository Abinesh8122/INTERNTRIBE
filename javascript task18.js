let a=[2,3,4,9,7];
let sum=0;
let avg;
for(let i=0;i<a.length;i++){
  sum=sum+a[i];
}
  avg=sum/a.length;
console.log('average:',avg);



let n=8;
let fact=1;
for(i=1;i<=n;i++){
fact*=i;  
}
console.log(`factorial of ${n} is ${fact}`);