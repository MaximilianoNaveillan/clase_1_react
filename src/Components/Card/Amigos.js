export default function Amigos({amigos}){
    return <>
    {amigos.map((amigo,index) => (
        <p key={index}>
            {index+1} - {amigo}
        </p>
    ))}
    {/* 
    array.map( (arrayItem,index) => (
        < key="index"> {arrayItem} </>
    ))
     */}
    </>
}