export function Welcome({ nombre, edad}){
    return (
        <div>
            <p>Welcome, {nombre}</p>
            <Edad edad={edad}/>
        </div>
    )
}

export function Edad({edad}){
    return(

        <p>
            Your age is <strong>{edad}</strong>
        </p>

    )
}