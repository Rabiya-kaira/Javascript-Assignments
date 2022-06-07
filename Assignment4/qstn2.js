function PowerOfNumber(b,e){
  
     pow = 1;
   
    for(i=0; i<e; i++){
      pow = pow*b;
    }
   
    return pow;
}
console.log(PowerOfNumber(2,2));