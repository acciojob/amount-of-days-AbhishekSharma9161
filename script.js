//your JS code here. If required.
function daysOfAYear(year) {
  // A year is a leap year if:
  // 1. It's divisible by 400, OR
  // 2. It's divisible by 4 AND not divisible by 100
  const isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  
  return isLeapYear ? 366 : 365;
}