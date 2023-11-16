import React from 'react'
import { If, Then } from 'react-if';
import Treino from './Treino'

export default function Treinos( { treinoSelecionado } ) {

  return (
    <>
      <If condition={treinoSelecionado && treinoSelecionado.length > 0}>
        <Then>
          <>
              {treinoSelecionado?.map(x => {
                return <Treino key={x.id} treino={x}></Treino>
              })}
          </>
        </Then>
      </If>

      <If condition={treinoSelecionado && treinoSelecionado.length <= 0}>
        <Then>
          <div>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <h5>Dia de descanso</h5>
            </ul>
          </div>
        </Then>
      </If>
    </>)
}
