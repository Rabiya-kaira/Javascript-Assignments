function Valid(a,  b,  c)
    {
        if (a + b + c == 180 && a != 0 && b != 0 && c != 0)
            return 1;
        else
            return 0;
    }
   
        var a = 60, b = 40, c = 80;
        if ((Valid(a, b, c)) == 1){
            console.log("Valid");
            }
        else{
            console.log("Invalid");
          }