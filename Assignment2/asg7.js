function checkValidity(a, b, c)
{
    if (a + b <= c || a + c <= b || b + c <= a)
        return false;
    else
        return true;
}
 
    let a = 7, b = 10, c = 5;
     
    if (checkValidity(a, b, c))
        console.log("Valid");
    else
        console.log("Invalid");    