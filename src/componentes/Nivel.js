import {useEffect, useState } from 'react'
import topicosFile from '../bd/topicos.json';
import { Else, If, Then } from 'react-if';
import Semanas from './Semanas';


export default function Nivel() {
    const [semanasSelecionadas, setSemanasSelecionadas] = useState([]);
  
    const selecioneSemanasDoNivel = (level) => {
      if (level === 0)
        setSemanasSelecionadas([])
      else
        setSemanasSelecionadas(topicosFile.filter(x => x.programId === 37 && x.workoutLevelId === level));      
    }
  
    return (
      <div className='container'>        
        <If condition={semanasSelecionadas?.length > 0}>
          <Then>
            <div>
              <button className='btn btn-secondary mb-3 mt-3' onClick={() => { selecioneSemanasDoNivel(0) }}>Voltar</button>
              <Semanas semanasSelecionadas={semanasSelecionadas}></Semanas>
            </div>
          </Then>
        </If>
       
        <If condition={!semanasSelecionadas?.length > 0}>
          <Then>
            <h3 className='text-center w-100 mb-4 mt-4'>Escolha o nível de treinamento</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li className='m-2'>
                <button onClick={() => { selecioneSemanasDoNivel(1) }} className='btn btn-info w-100'>Iniciante</button>
              </li>
              <li className='m-2'>
                <button onClick={() => { selecioneSemanasDoNivel(2) }} className='btn btn-info w-100'>Intermediário</button>
              </li>
              <li className='m-2'>
                <button onClick={() => { selecioneSemanasDoNivel(3) }} className='btn btn-info w-100'>Avançado</button>
              </li>
            </ul>
          </Then>
        </If>
      </div>
    )
}
