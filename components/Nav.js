import Link from 'next/link'

function Nav(){
    return(
        <ul>
            <li>
                <Link href='/'>
                    <a>home</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a>about</a>
                </Link>
            </li>
        </ul>
    )
}

export default Nav
