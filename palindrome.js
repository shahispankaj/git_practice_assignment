let str="madam";
let bag=1;
for(i=0; i<=str.length; i++){
    bag+=str[i]
}

if(bag==str){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}