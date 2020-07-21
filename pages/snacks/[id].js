import Nav from '../../components/Nav'

export default function SnackDetail(props){
    return(
        <>
        <Nav />
        <h1>i am a single snack {props.snack.name}</h1>
        </>
    ) 
}

export async function getServerSideProps(context){
    const response = await fetch(`http://localhost:3000/api/snacks/${context.params.id}`)
    const snack = await response.json();
    console.log('snack',snack)

    return{
        props:{
            snack
        }
    }
}

