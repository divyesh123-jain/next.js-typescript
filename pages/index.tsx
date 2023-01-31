import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import play from './Playground';
export default function Home() {



useEffect(() => {
  return () => {
    play();
  };
}, []);


  return (
    <div className="">
 
      
    </div>
  )
}
