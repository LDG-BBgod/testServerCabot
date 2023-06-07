// @ts-check
/* eslint-disable no-console */
const cluster = require('cluster')
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {

  console.log(`마스터 프로세스가 시작되었습니다. CPU 코어 개수: ${numCPUs}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // 워커 종료 시 처리
  cluster.on('exit', (worker, code, signal) => {
    console.log(`워커가 종료되었습니다. PID: ${worker.process.pid}, 종료 코드: ${code}, 종료 신호: ${signal}`);
    // 종료된 워커 다시 생성
    cluster.fork();
  })}else {
    
  console.log(`워커 프로세스가 시작되었습니다. PID: ${process.pid}`);

  const express = require('express')
  const cors = require('cors')
  const userRouter = require('./routers/user')
  
  const app = express()
  const PORT = 5000
  const corsOptions = {
    origin: '*',
  }
  
  app.use(express.json())
  app.use(cors(corsOptions))
  
  app.use('/api', userRouter)
  app.use((err, req, res, next) => {
    res.statusCode = err.statusCode || 500
    res.send(err.message)
  })
  
  app.listen(PORT, () => {
    console.log(`PORT = ${PORT}`)
  })
}



