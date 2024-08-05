function change(number){
    let binary=''
while(true){
    binary+=(number%2).toString()
    number=Math.floor(number/2)
    if(number===1){
        binary+=1
        break
    }
}
let result=reverse(binary)
return result
}


function reverse(binary){
    let reverseBinary=binary.split("").reverse().join("")
    return reverseBinary
}


console.log(change(10));