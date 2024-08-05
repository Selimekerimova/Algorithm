// 6 1+2+3+6=12
// Yəni ədədin bölənlərinin cəmi özünün 2 qatına bərabərdir.
let number=6;
// let number=Number(prompt("enter number"))
let sum=0
for(let i=0;i<=number;i++){
if(number%i===0){
sum+=i
}
}
if(sum===number*2){
console.log(`${number} mukemmel ededdir`);
}else{
console.log(`${number} mukemmel eded deyil`);

}