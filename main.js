let n = prompt('input n:', '2');
let prime=1;

for(let i=2; i<=n; i++){
  prime=1;
  for(let j=2; j<i; j++){
    if(i%j === 0){
      prime=0;
      break;
    }
  }
  
  if(prime)
    alert(i);
}