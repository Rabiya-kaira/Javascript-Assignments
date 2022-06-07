function product(ar,n)
    {
        let result = 1;
        for (let i = 0; i < n; i++)
            result = result * ar[i];
        return result;
    }
     
    // driver code for the above program
        let ar = [ 1, 2, 3, 4, 5 ];
        let n = ar.length;
        console.log(parseInt(product(ar, n)));       
     