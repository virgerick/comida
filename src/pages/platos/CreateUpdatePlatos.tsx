import React from 'react'
import { useParams } from 'react-router'

interface IParams{
    id?:string
}

export default function CreateUpdatePlatos() {
    const {id} =useParams<IParams>()
    console.log(id);
    
    return (
        <div className="container mt-3">
            <h1>{!id?'Crear nuevo Plato':'Modificar Plato'}</h1>
            <hr />
            
        </div>
    )
}

