import React from 'react'
import Link from "next/link";
function languages() {
  return (
    <main className="p-10 ">C++
        <br />

        Python
        <br />
Assembly Language
        <br />
TypeScript
<br />
<br />

<Link className="font-bold" href='/additionalskills'>Additional Skills</Link>
    </main>
  )
}

export default languages