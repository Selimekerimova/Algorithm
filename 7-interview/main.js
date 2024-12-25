///  1

function user(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
}

user.prototype.funksiya=()=>{
    console.log(this.name,this.surname);  // undefined
    
}
const person1=new user("John ", "Doe",70)
person1.funksiya()


/// 2
// null xüsusi bir dəyərdir və növə görə "obyekt" sayılır. Ancaq aritmetik əməliyyat zamanı JavaScript null-u rəqəmə çevirir.
// null rəqəm çevrilməsi zamanı 0 dəyərinə çevrilir.
console.log(null+1); // 1

// undefined çevrilmədə daha fərqli davranır. JavaScript-də undefined rəqəmə çevrilməyə çalışanda nəticə NaN (Not a Number) olur.
console.log(undefined+1); //NaN
