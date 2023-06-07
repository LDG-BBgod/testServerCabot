"use client"

import "./reset.scss"
import axios from "axios"
import { useEffect, useState } from 'react';

import Link from "next/link";

import Header from "./header.js"
import MainHome from "./home/home.js"



function Home () {

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/')
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

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