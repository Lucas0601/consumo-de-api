import { ReactElement }  from "react"
import { IRepositorio } from "./IRepositorioInterface"

interface iCardUserProps {
    repositorio: IRepositorio
}

const CardUser = (props: iCardUserProps): ReactElement => {   
    return (  
    <div className="card"> 
        <span>Usuário: {props.repositorio.owner.login}</span>
        <span>Repositório: {props.repositorio.name}</span>
    </div>  

    )
    
}

export { CardUser }