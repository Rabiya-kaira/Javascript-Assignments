let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j <n- i; j++) {
    string += (String.fromCharCode(65+j));
  }
  string += "\n";
}
console.log(string);