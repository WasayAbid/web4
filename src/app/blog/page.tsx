import React from 'react';
import Link from "next/link";
import { blogs } from '../constants';
function blog() {
  return (
    <div className= "flex gap-20 text-lg p-20 w-30 text-black font-bold">

    {
      blogs.map((item,index)=>(
        <Link key={item.id} href={`/blog/${item.id}`}>{item.title}</Link>

      ))
    }
     {/*<Link href='/blog/blog1'>Blog1</Link>
    <Link href='/blog/blog2'>Blog2</Link>
    <Link href='/blog/blog2'>Blog2</Link>
    */}
    </div>
  )
}

export default blog