import Nav from '../components/Nav'
import Link from 'next/link'

export default function About(){

    return(
        <>
        <Nav />
        <h1>this is about</h1>
        </>
    ) 
}

// function Nav(){
//     return(
//         <ul>
//             <li>
//                 <Link href='/'>
//                     <a>home</a>
//                 </Link>
//             </li>
//             <li>
//                 <Link href='/about'>
//                     <a>about</a>
//                 </Link>
//             </li>
//         </ul>
//     )
// }