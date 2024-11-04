export function fibonacci(n) {
    // Base cases
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    // Recursive case
    const series = fibonacci(n - 1);
    const nextVal = series[series.length - 1] + series[series.length - 2];
    series.push(nextVal);
    
    return series;
}

export function isEven(n) {
    return n % 2 == 0;
}

export function add(x, y) { 
    return x + y;
}

