let number=153;
let sum=0;
for(let i=0;i<number.toString().length;i++){
let count=number.toString().charAt(i)
sum+=count*count*count
}
if(sum==number){

    console.log("true");
}else{
    console.log("false");
}



///Sade eded tapmaq
let num=23;
let result=true;
for(let i=2;i<Math.floor(num/2);i++){
    if(num%2==0){
        result=false;
        break;
    }
}
if(result){
    console.log(`${num} sadedir`);
}
else{
    console.log(`${num} sade deyil`);
}