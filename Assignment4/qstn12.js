var max1=arr[0];
var max2=arr[0];

for(i=0; i<arr.length; i++)
    {
        if(arr[i] > max1)
        {
        
            max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i] > max2 && arr[i] < max1)
        {
            
            max2 = arr[i];
        }
       
    }
    let arr=[23,45,67,89,34,12];
    console.log(max2);
