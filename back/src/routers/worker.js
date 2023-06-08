const { parentPort } = require('worker_threads');

async function performAsyncTask() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Perform the computation (e.g., heavy calculations)
        const result = Math.random() * Math.random();
        resolve(result);
      }, 5000);
    });
}

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) { }
}

parentPort.on('message', async (message) => {
if (message === 'start') {
    console.log('워커 스타트')
    try {
      sleep(2000)
      console.log('워커 엔드')
      // const result = await performAsyncTask();
      parentPort.postMessage(51234);
    } catch (err) {
      parentPort.postMessage({ error: err.message })
    }
}
})
