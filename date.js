// 1. Get the Current Date (MM/DD/YYYY format)
const getCurrentDate = () => {
  const currentDate = new Date();
  return `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
};
console.log("1. Current Date (MM/DD/YYYY):", getCurrentDate());

// --------------------------------------------------------------------------------
// 2. Find the Day of the Week
const getDayOfWeek = () => {
  const currentDay = new Date().toLocaleString("en-us", { weekday: "long" });
  return currentDay;
};
console.log("2. Day of the Week:", getDayOfWeek());

// --------------------------------------------------------------------------------
// 3. Get the Number of Days in a Month (Leap Year Consideration)
const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};
console.log("3. Days in February 2024:", getDaysInMonth(2, 2024)); // 29 for leap year

// --------------------------------------------------------------------------------
// 4. Find the Difference Between Two Dates (in days)
const dateDifference = (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // days
};
const today = new Date();
const futureDate = new Date("2025-01-01");
console.log(
  "4. Difference in Days between today and 01/01/2025:",
  dateDifference(today, futureDate),
);

// --------------------------------------------------------------------------------
// 5. Add Days to a Date
const addDaysToDate = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
console.log("5. Date 10 days from now:", addDaysToDate(new Date(), 10));

// --------------------------------------------------------------------------------
// 6. Check if a Date is a Leap Year
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log("6. Is 2024 a Leap Year?", isLeapYear(2024)); // true
console.log("6. Is 2023 a Leap Year?", isLeapYear(2023)); // false

// --------------------------------------------------------------------------------
// 7. Format a Date to `YYYY-MM-DD` format
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
console.log("7. Formatted Date (YYYY-MM-DD):", formatDate(new Date()));

// --------------------------------------------------------------------------------
// 8. Find the Last Day of the Previous Month
const lastDayOfPreviousMonth = () => {
  const today = new Date();
  today.setDate(0); // Set to the last day of the previous month
  return today;
};
console.log("8. Last Day of Previous Month:", lastDayOfPreviousMonth());

// --------------------------------------------------------------------------------
// 9. Get the Time Left Until a Future Date
const timeRemaining = (futureDate) => {
  const now = new Date();
  const diff = futureDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};
const futureDateForTime = new Date("2025-01-01");
console.log(
  "9. Time Remaining until 01/01/2025:",
  timeRemaining(futureDateForTime),
);

// --------------------------------------------------------------------------------
// 10. Set the Time to Midnight (00:00:00)
const setTimeToMidnight = (date) => {
  date.setHours(0, 0, 0, 0); // Set time to 00:00:00
  return date;
};
console.log(
  "10. Date with Time Set to Midnight:",
  setTimeToMidnight(new Date()),
);
