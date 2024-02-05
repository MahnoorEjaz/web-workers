document.getElementById('processButton').addEventListener('click', processData);

function processData() {
  const n = parseInt(document.getElementById('fibonacciInput').value);
  const worker = new Worker('worker.js');
  worker.postMessage(n);
  worker.onmessage = function(event) {
    document.getElementById('result').textContent = 'Fibonacci(' + n + ') = ' + event.data;
  };
}
