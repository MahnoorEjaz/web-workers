function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  onmessage = function(event) {
    const n = event.data;
  
    // Perform heavy data processing (calculate nth Fibonacci number)
    const result = fibonacci(n);
  
    // Send result back to main thread
    postMessage(result);
  };
  