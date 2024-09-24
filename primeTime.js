let n = 0;
while (n <= 20) {
    if (n < 2) {
        n++;
        continue;
    }
    let isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n);
    }
    n++;
}