let number =50;
// Method 1
for(let i=2;i<number;i++){
    if(number%i===0){
        console.log(`${number} sade eded deyil`);
        break
    }else{
       console.log(`${number} sade ededdir `);
       break
    }
}

//Method 2
let result=true
for(let i=0;i<Math.floor(number/2);i++){
    if(number%2===0){
        result=false;
        break
    }
}
if(result){
    console.log(`${number} sade ededdir `);

}else{
    console.log(`${number} sade eded deyil`);
    
}