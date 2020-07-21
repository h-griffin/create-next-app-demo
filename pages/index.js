import Nav from '../components/Nav'
import Link from 'next/link'

function Home(props){
    return(
        <>
        <div className='container'>
            <Nav />
            <h1>this is home</h1>
            <ul>
                {props.snacks.map(snack => <SnackItem snack={snack}/>)}
            </ul>
        </div>

        <style jsx>{`
            container{
                background-color: red;
            }
        `}</style>

        </>
    ) 
}

function SnackItem(props){    //SnackItem({snack}) > snack.id
    return(
        <li key={props.snack.id}>
            <Link href='/snacks/[id]' as={`/snacks/${props.snack.id}`}>
                <a>{props.snack.name}</a>
            </Link>
        </li>
    )
}

export async function getStaticProps(){
    const url = 'http://localhost:3000/api/snacks' //for production use 'http://production-site/api/snacks'
    const response = await fetch(url);
    const snacks = await response.json();
    
    return{
        props: {//passed to page component as props
            snacks : snacks,
        }, 
    }
}


export default Home