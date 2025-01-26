"use client"
import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2025-1-31");

const CountDown = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
    if (!isClient) return null;
  

  return (
    <Countdown className='font-bold text-5xl md:text-7xl text-yellow-300' date={endingDate}/>
  )
}

export default CountDown