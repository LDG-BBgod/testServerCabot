// @ts-check
/* eslint-disable no-console */
const { Worker } = require('worker_threads');

const express = require('express')
const path = require('path');

const router = express.Router()


router.get('/', async (req, res) => {

  try{
    const worker = new Worker(__dirname + '/worker.js')

    worker.on('message', (result) => {
      res.send(`계산완료: ${result}`);
    })

    worker.postMessage('start')

    worker.on('error', (err) => {
      res.status(500).send('에러 발생');
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('에러 발생');
  }
})

// router.get('/', async (req, res) => {
//   try {
//     await performAsyncTask(); // 비동기 작업 수행
//     res.send('계산완료~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('에러 발생');
//   }
// })

async function performAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 시간이 걸리는 계산 수행
      const result = Math.random() * Math.random();
      resolve(result); // 작업 완료 후 resolve 호출
    }, 5000);
  });
}

module.exports = router




