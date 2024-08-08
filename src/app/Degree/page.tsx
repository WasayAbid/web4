import React from 'react';
import Link from "next/link";

function Degree() {
  return (
 <div className="font-bold p-20">

    Ongoing Undergraduate Degree in Artificial Intelligence
    <br />
    <br />
  <Link className="bg-orange-100" href='/Degree/Semester'>Find my Current Semester?</Link>
   </div>
  );
}

export 
default Degree;