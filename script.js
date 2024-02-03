document.getElementById('processButton').addEventListener('click', processData);

function processData() {
  const n = parseInt(document.getElementById('fibonacciInput').value);

  // Start Web Worker for processing
  const worker = new Worker('worker.js');
  
  // Send data to Web Worker
  worker.postMessage(n);

  // Receive result from Web Worker
  worker.onmessage = function(event) {
    document.getElementById('result').textContent = 'Fibonacci(' + n + ') = ' + event.data;
  };
}
