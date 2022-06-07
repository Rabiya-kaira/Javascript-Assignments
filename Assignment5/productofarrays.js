function product(ar,n)
    {
        let result = 1;
        for (let i = 0; i < n; i++)
            result = result * ar[i];
        return result;
    }
        let ar = [ 1, 2, 3, 4,  ];
        let n = ar.length;
        console.log(parseInt(product(ar, n))); 