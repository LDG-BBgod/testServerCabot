"use client"

import "./reset.scss"
import axios from "axios"
import { useEffect, useState } from 'react';

import Link from "next/link";

import Header from "./header.js"
import MainHome from "./home/home.js"

const http = require('http')

function Home () {

  const [data, setData] = useState(null)

  const fetchData = async function () {
    return new Promise( async (resolve, reject) =>   {
      try{
        const response = await axios.get(`http://${window.location.hostname}:5000/api`)
        setData(response.data)
      } catch (error) {
        console.error(error)
      }

    })
    // return new Promise((resolve, reject) => {
    //   const options = {
    //     hostname: 'localhost',
    //     port: 5000,
    //     path: '/api',
    //     method: 'GET',
    //   }
    //   const req = http.request(options, res => {
    //     let data = ''
    //     res.on('data', d => {
    //       data += d
    //     });
    //     res.on('end', () => {
    //       setData(data) // 응답 데이터 출력
    //       resolve(data)
    //     });
    //   })
    //   req.end()
    // })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
      <div className="container">
        <Header></Header>
        <MainHome></MainHome>
        <Link href="/consult">consult</Link>
        <div>{data}</div>
      </div>
  )
}

export default Home