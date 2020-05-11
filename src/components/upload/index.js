import React from 'react'
import Dropzone from 'react-dropzone'
import {DropContainer, UploadMessage} from './styles'

export default function index() {
    return (
        <div>
            <Dropzone accept="image/*" onDropAccepted={() => {}}>
                {({getInputProps, getRootProps, isDragActive, isDragReject}) => (
                    <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                    >
                        <input {...getInputProps()}></input>

                        insira seus arqvuivos aqui
                    </DropContainer>
                )}
            </Dropzone>
        </div>
    )
}
 