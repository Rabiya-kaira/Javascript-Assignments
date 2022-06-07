const multiplyAllByK = (arr, K) => {
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        let x = arr[i];
        arr[i] = K * x;
    }

    for (let i = 0; i < N; i++)
        console.log(`${arr[i]} `);
let arr = [];
arr.push(3);
arr.push(4);
let K = 2;
multiplyAllByK(arr, K);}