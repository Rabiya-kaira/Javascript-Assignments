function removeDuplicate(arr) {        
    var c;        
    var len = arr.length;        
    var result = [];        
    var obj = {};                
    for (c = 0; c<len; c++)  {            
       obj[arr[c]] = 0;        
    }  
    for (c in obj) {            
       result.push(c);        
    }            
    return result;      
 }              
 var myArr = [10, 20, 30, 40, 10, 40, 70, 80, 70, 90];      
 console.log(removeDuplicate(myArr));