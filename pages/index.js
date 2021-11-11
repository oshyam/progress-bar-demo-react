//lightnews homepage
import Link from 'next/link'

function HomePage(){
  return(
    <div>
      <h1>LightNews</h1>
     <ul>
       <li>
       <Link href="/news/">Goto News Page</Link>
       </li>
     </ul>


    </div>
  )
}

export default HomePage;