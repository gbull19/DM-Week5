// const phoneNumber = (arr) => {
//     let number= `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
//     return number;
// }

const format = (arr, start, end) => arr.slice(start, end).join("");

const phoneNumber = (arr) => {
    let areaCode = format(arr, 0, 3);
    let num1 = format(arr, 3, 6);
    let num2 = format(arr, 6, 10);
    let phone = ("("+areaCode+") "+num1+"-"+num2);
    return phone;
}

console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
