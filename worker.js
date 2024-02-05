function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  onmessage = function(event) {
    const n = event.data;
    const result = fibonacci(n);
    postMessage(result);
  };
  