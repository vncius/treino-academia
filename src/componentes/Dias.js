import React from 'react'
import treinosFile from '../bd/treinos.json';
import { useState } from 'react'
import { If, Then } from 'react-if';
import Treinos from './Treinos';

export default function Dias({ diasSelecionados }) {
  const ObtenhaTreinoSelecionado = (workoutSheetId) => {
    return treinosFile.filter(x => x.workoutSheetId === workoutSheetId && x.programId === 37).sort(x => x.order);
  }

  const ObtenhaClassesBtn = (diaSelecionado) => {
    if (!diaSelecionado.sheet)
    return 'btn btn-secondary w-100';

    return 'btn btn-info w-100';
  }

  return (
    <>
      <If condition={diasSelecionados.length > 0}>
        <Then>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {diasSelecionados?.map(x => {
                return <div key={x.id}>
                  <li className='mb-3' >
                    <button className={ObtenhaClassesBtn(x)} type="button" data-bs-toggle="collapse" data-bs-target={"#idCollapse" + x.id} aria-expanded="false" aria-controls={"idCollapse" + x.id}>
                      {x.name}
                    </button>
                    <div className="collapse" id={"idCollapse" + x.id}>
                      <div className="card card-body">
                        <Treinos treinoSelecionado={ObtenhaTreinoSelecionado(x.workoutSheetId)}></Treinos>
                      </div>
                    </div>
                  </li>                  
                </div>
            })}
          </ul>
        </Then>          
      </If>        
    </>)
}