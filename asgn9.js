function check_LeapYear(year){
    if((0==year%4)&&(0!==year % 100)||(0!==year %400)){
        console.log(year + 'is a leap year');
    }else{console.log( year + 'is a non leap year');}
}
const year = prompt('Enter a Year:');
check_LeapYear(year);