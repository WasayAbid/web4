import React from 'react'
import Link from "next/link";
import { blogs } from '@/app/constants';
const findBlogDetail=(id:number)=>{
  return blogs.find((item)=>{ return item.id===id;})
};


function blogdetails({params}:{params:{id:string}}) {
 console.log("BlogDetails params: ",params.id);
 const blog=findBlogDetail(Number(params.id));

  return (

    <div className="flex gap-5 p-20"> 
   <h1 className="font-bold">{blog?.title}</h1>
   <br />
   <h2 className="font-semibold">{blog?.content}</h2>
   <br />
   <p className="font-semibold">Author:{blog?.author} </p>

    </div>
  )
}

export default blogdetails