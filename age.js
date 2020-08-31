// var dob = "28-10-1999";
// var year = Number(dob.substr(0, 4));
// var month = Number(dob.substr(4, 2)) - 1;
// var day = Number(dob.substr(6, 2));
// var today = new Date();
// var age = today.getFullYear() - year;
// if (
//   today.getMonth() < month ||
//   (today.getMonth() == month && today.getDate() < day)
// ) {
//   age--;
// }
// console.log(age);

function getMonthFromString(mon) {
  var d = Date.parse(mon + "1, 2012");
  if (!isNaN(d)) {
    return new Date(d).getMonth() + 1;
  }
  return -1;
}

console.log(getMonthFromString("Aug"));
