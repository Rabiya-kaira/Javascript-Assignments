const getDayName = (dayIndex) =>{
    let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysArray[dayIndex];
}
  
const dayName = getDayName(new Date().getDay());
console.log(dayName); 