// Biến dữ liệu var
var name1 = "Tuan";
console.log(name1)

// Biến dữ liệu let
let age = 25;
age = 30; // age ban đầu 25 khi set age lại thì thành 30.
console.log(age)

//Biến dữ liệu const (hằng số)
const myAge = 30;
//myAge = 31; ---> báo lỗi.
console.log(myAge)

//Phân biệt var và let
var foo = "Foo";
let bar = "Bar";
console.log(foo, bar)// Foo Bar
//----------------
{
    var moo = "Moo";
    let baz = "Baz";
    console.log(moo) //Moo
    console.log(baz) //Baz           
}
console.log(moo) //Moo
//console.log(baz) --> error