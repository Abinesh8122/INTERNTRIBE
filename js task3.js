let i;
for(i=1;i<=10;i++){
  console.log(i+i+1);
}
console.log('\n');
let even=0;
let odd=0;
for(i=10;i<=55;i++){
  if(i%2==0){
    even=even+1;
    
  }
  else{
    odd=odd+1;
    
}
}
console.log('even numbers:',even);
console.log('odd numbers:',odd);