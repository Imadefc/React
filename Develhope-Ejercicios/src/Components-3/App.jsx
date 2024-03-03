import { Hello } from "./Hello";

 export function App(){
    return(
        <div>
            <Hello/>
            <Hello></Hello>
            <Hello></Hello>
        </div>
    )
    //El componente se renderizaa todas las veces que tu lo pongas
}