let num=13;
let count=1;

for(i=1; i<=13; i++){
  if(num%i==0){
    count++;
  }

}

if(count==1){
  console.log(num, "is prime")
}else{
  console.log(num,"is not prime")
}