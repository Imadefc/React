import {Welcome} from './Welcome'
export function App(){
    return(
        <div>
            <Welcome nombre="Imad" edad={23} />
            <Welcome nombre="Manuel" edad={49} />
        </div>
        
    )
}