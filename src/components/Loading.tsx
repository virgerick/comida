import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Loading(props: Props): ReactElement {
    return (
        <div className="p-5 m-auto text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">cargando...</span>
            </div>
            <p>Cargando...</p>
          </div>
    )
}
