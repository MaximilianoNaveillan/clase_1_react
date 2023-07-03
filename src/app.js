import Componente1 from "./Components/Componente1"
import Componente2 from "./Components/Componente2"
import Personaje from "./Components/personaje"
import Card from "./Components/Card"


export default function App() {
    /* Desfio */
    /* 
    const personajes = [
        {
        nombre: "Simba" ,
        edad: 10 ,
        color: "durazno",
        amigos:["Pumba","Timon","Nala"]
        },
         {
        nombre: "Nala" ,
        edad: 10 ,
        color: "durazno",
        amigos:["Pumba","Timon","Simba"]
        }
        ]
     */
    const personaje = {
        nombre: "Simba" ,
        edad: 10 ,
        color: "durazno",
        amigos:["Pumba","Timon","Nala"]
    }
    const Texto =" Holi Cohorte !"
    return (<>
        <h1>{Texto}</h1>
         <Componente1 />
         <Componente2 />
        <Personaje pers={personaje}/>
       {/*  array.map( (arrayItem,index) => (
            < key="index"> {arrayItem} </>
        )) */}
        <Card pers={personaje}/>
    </>)
}