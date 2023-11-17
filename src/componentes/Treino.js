import React, { useEffect, useState } from 'react'
import { If, Then } from 'react-if'

export default function Treino({treino}) {
    const [openModal, setOpenModal] = useState(false);
    const [url, setUrl] = useState('');
    const [descricaoVideo, setDescricaoVideo] = useState('');
    
    const cleanAfterClose = () => {
        setUrl('');
        setDescricaoVideo('');
        setOpenModal(false);
    }

    const redirect = () => {        
        setUrl(treino.workout.metadata.mediaHd);
        setDescricaoVideo(treino.workout.name);
        setOpenModal(true);
    }

    const redirectSuperSet = (treino) => {        
        setUrl(treino.workoutSuperset.metadata.mediaHd);
        setDescricaoVideo(treino.workoutSuperset.name);
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
                        <div className="modal-dialog" style={{margin: '5px 5px 0px 5px'}}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{descricaoVideo}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {cleanAfterClose()}}></button>
                                </div>
                                <div className="modal-body" style={{height: '90vh', padding: '0px'}}>
                                    <video id='videoId' style={{width: '100%', marginTop: '30%'}} on src={url} controls autoPlay={true} muted={true} webkit-playsinline playsinline></video>                          
                                </div>
                            </div>
                        </div>
                    </div> 
                </Then>
            </If>                        
        </div>
    )
}
