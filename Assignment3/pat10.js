

/*for (i = 0; i <= 5; i++) {
    if (i == 1) {
        console.log('*');
    } else if (i == 2) {
        console.log('* *');

    } else if (i == 3) {
        console.log('* * *');
    } else if (i == 4) {
        console.log('* * * *');
    }
} */

let n = 15;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);