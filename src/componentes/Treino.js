import React, { useEffect, useState } from 'react'
import { If, Then } from 'react-if'

export default function Treino({treino}) {
    const [openModal, setOpenModal] = useState(false);
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        setOpenModal(url !== '');
    }, [url])

    const redirect = () => {        
        setUrl(treino.workout.metadata.mediaHd);
        setOpenModal(true);
    }

    const redirectSuperSet = (treino) => {        
        setUrl(treino.workoutSuperset.metadata.mediaHd);
        setOpenModal(true);
    }

    return (
        <div className='mb-3' key={treino.id} style={{ backgroundColor: 'aliceblue', borderRadius: '10px', padding: '5px'}}>
            <div className='mt-2 row ms-2 me-1 mb-2' style={{width: 'fit-content'}}>
                <div onClick={() => { redirect(treino) }}
                    //data-bs-toggle="modal" data-bs-target="#exampleModal"
                    className='col-2' 
                    style={{ background: 'no-repeat center', backgroundSize: 'cover', backgroundImage: `url('https://img.queimadiaria.com/${treino.workout.metadata.imagePreview}')`, width: '80px', height: '70px'}}></div>
                <div className='col ms-1'>
                    <h6 className='row' style={{margin: 0}}>{treino.workout.metadata.name}</h6>
                    <span className='row  ps-3'>{treino.exerciseInstruction}</span>                        
                </div>
            </div>

            <If condition={treino.superset === true}>
                <Then>
                    <div className='mt-2 row ms-2 me-1 mb-2' style={{width: 'fit-content'}}>
                        <div onClick={() => { redirectSuperSet(treino) }} 
                            //data-bs-toggle="modal" data-bs-target="#exampleModal"
                            className='col-2' 
                            style={{ background: 'no-repeat center', backgroundSize: 'cover', backgroundImage: `url('https://img.queimadiaria.com/${treino?.workoutSuperset?.metadata?.imagePreview}')`, width: '80px', height: '70px'}}></div>

                        <div className='col ms-1'>
                            <h6 className='row' style={{margin: 0}}>{treino?.workoutSuperset?.name} - Superset</h6>
                            <span className='row ps-3'>{treino?.supersetInstruction}</span> 
                        </div>
                    </div>
                </Then>
            </If>

            <If condition={openModal === true && url !== ''}>
                <Then>
                    <div className="modal fade show" id="exampleModal" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style={{display: 'block'}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Forma de execução</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {setOpenModal(false)}}></button>
                                </div>
                                <div className="modal-body">
                                    <video style={{width: '100%'}} src={url} controls autoPlay={true}></video>                          
                                </div>
                            </div>
                        </div>
                    </div> 
                </Then>
            </If>                        
        </div>
    )
}
