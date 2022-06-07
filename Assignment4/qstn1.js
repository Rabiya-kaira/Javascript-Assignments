const numberOfDigits = (n) => {
    let result = 0;
  
    while (n > 0) {
      n = Math.floor(n / 10);
      result++;
    }
  
    return result;
  }
  console.log(numberOfDigits(2344567));