let A="naman"
function checkpalindrome(str){
let rev="";
for(let i=str.length-1;i>=0;i--){
  rev+=str[i];
}
return rev;
}
let ans=checkpalindrome(A);
if(A===ans){
console.log(A,"Palindrome");
}
else{
console.log("Not Palindrome");
}