import React from 'react'
import treinosFile from '../bd/treinos.json';
import topicosFile from '../bd/topicos.json';
import {useEffect, useState } from 'react'
import { Else, If, Then } from 'react-if';
import Dias from './Dias';

export default function Semanas({ semanasSelecionadas }) {
  const [dias, setDias] = useState([]);

  const selecioneDias = (idTopico) => {
    var dias = topicosFile.filter(x => x.id === idTopico);
    setDias(dias[0].days);
  }

  return (
    <>
      <If condition={dias && dias?.length > 0}>
        <Then>
          <div>
            <Dias diasSelecionados={dias}></Dias>
          </div>
        </Then>
      </If>

      <If condition={semanasSelecionadas.length > 0 && dias.length <= 0}>
        <Then>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {semanasSelecionadas?.map(x => {
                return <li className='mb-3' key={x.id}>                  
                    <button onClick={() => { selecioneDias(x.id) }} className='btn btn-info w-100'>{x.name}</button>                  
                  </li>
            })}
          </ul>
        </Then>          
      </If>
        
    </>
  )
}
