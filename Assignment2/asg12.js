function numberToWords(myNum){
    let ones=[' ','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tens= [' ',' ','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
    let hundred= 'hundred';
    let output = ' ';
    let numberToString = myNum.toString();
    if(myNum===0){
    return 'zero';
    }
    if(myNum<20){
    output= ones[myNum]
    return output;
    }
    if(numberToString.length==3){
    output = ones[parseInt(numberToString.charAt(0))]+' '+ hundred+' ';
        if(parseInt(numberToString.charAt(1))==1){
            output +=ones[(parseInt(numberToString.charAt(2)))+10];
            return output;
        }
        else{
        output += tens[parseInt(numberToString.charAt(1))]+' ';
        output += ones[parseInt(numberToString.charAt(2))];
        return output;
        }
    }
    output = tens[parseInt(numberToString.charAt(0))]+' ';
    output += ones[parseInt(numberToString.charAt(1))];
    return output;
    }
    
    console.log(numberToWords(312));