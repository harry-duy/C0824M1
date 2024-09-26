//1
let year = parseInt(prompt("Enter a year"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " is a leap year");
        } else {
            alert(year + " is NOT a leap year");
        }
    } else {
        alert(year + " is a leap year");
    }
} else {
    alert(year + " is NOT a leap year");
}
//2
let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
//3
    let year = parseInt(prompt("Enter a year"));
    let isLeapYear = false;

    let isDivisibleBy4 = year % 4 == 0;
    if (isDivisibleBy4) {
        let isDivisibleBy100 = year % 100 == 0;
        if (isDivisibleBy100) {
            let isDivisibleBy400 = year % 400 == 0;
            if (isDivisibleBy400) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }

    if (isLeapYear) {
        alert(year + " is a leap year");
    } else {
        alert(year + " is NOT a leap year");
    }}


if (thang === 1) {
    document.write("Tháng 1 có 31 ngày");
} else if (thang === 2) {
    document.write("Tháng 2 có 28 hoặc 29 ngày");