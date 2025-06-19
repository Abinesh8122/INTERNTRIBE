let x = [23, 4, -6, 23, -9, 21, 3, -45, -8] ;
for(let i=0;i<x.length;i++) {
  if(x[i]<0){
    console.log( `negative numbers from the array${x[i]}`);
  }


  
}
for(let i=0;i<x.length;i++) {
  if(x[i]>0){
    console.log( `positive numbers from the array${x[i]}`);
  }
}

let y=['a','e','i','o','u','A','E','I','O','U'];
let z='e';
let flag=0;
for(let i=0;i<y.length;i++){
  if(y[i]==z){
   flag=1;
}
}
 if(flag){
  console.log('Vowel');
 }
 else{
   console.log('Consonant');
 }

let a= [10, 20, 30, 40, 10] ;
for(let i=0;i<=a.length;i++){
  if(a[0]==a[a.length-1]){
    console.log('true');
    break;
  }  else
  console.log('false');
  break;
}