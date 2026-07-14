//Toán tử số học
const a = 5;
const b = 10, c = 15;
//Cộng
console.log(a + b)

//Trừ
console.log(b - a)

//Nhân
console.log(a * b)

//Chia
console.log(b / a)

//Chia lấy dư
console.log(c % b)

//Lũy thừa
console.log(a ** 2)

//Tăng 1
let d1 = 5;
const e1 = d1++; //e1 nhận giá trị cũ của d1, sau đó d tăng lên 1
console.log("trường hợp d++")
console.log("d = ", d1)
console.log("e = ", e1)
let d2 = 5;
const e2 = ++d2; //d tăng lên 1 ngay lập tức, sau đó e2 nhận giá trị của d2
console.log("trường hợp ++d")
console.log("d = ", d2)
console.log("e = ", e2)

//Trừ 1
let d3 = 5;
const f1 = d3--; // f nhận giá trị cũ của d3, sau đó d giảm đi 1
console.log("trường hợp d--")
console.log("d = ", d3)
console.log("f = ", f1)
let d4 = 5;
const f2 = --d4; //d giảm đi 1 ngay lập tức, sau đó f2 nhận giá trị của d4
console.log("trường hợp --d")
console.log("d = ", d4)
console.log("f = ", f2)

//Toán tử so sánh

//Lớn hơn
console.log(5 > 3)

//Bé hơn
console.log(5 < 3)

//Lớn hơn hoặc bằng
console.log(5 >= 5)

//Bé hơn hoặc bằng
console.log(4 <= 3)

//So sánh bằng (lỏng) chỉ so sánh giá trị
console.log(5 == "5")

//So sánh bằng (chặt) do có so sánh thêm biến dữ liệu và giá trị
console.log(5 === "5")

//Khác nhau (lỏng) chỉ so sánh giá trị
console.log(5 != "5")

//Khác nhau (chặt) do có so sánh thêm biến dữ liệu và giá trị
console.log(5 !== "5")