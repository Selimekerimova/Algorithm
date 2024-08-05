let binary= "1010"
function change(binary){
    let sum=0
    let pow=0
    for(let i=binary.length-1;i>=0;i--){
        sum+=Number(binary.charAt(i))*Math.pow(2,pow)
        pow++
    }
    console.log(sum);
    
}
change(binary)