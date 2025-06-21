let a= [5, 2, -7, 3, -2, -1];
let i;
    console.log('negative elements from the array:' );

for(i=0;i<=a.length-1;i++){
  if(a[i]<0){
    console.log(a[i]);
  }
}
console.log('\n');
let b= [5, 10, 15, 20, 22, 23];
console.log('the odd numbers changed into zero:');
for(i=0;i<b.length;i++){
  if(b[i]%2!=0){
    b[i]=0;
  }
}
console.log(b);
