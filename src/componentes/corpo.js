import React from 'react'
import Dados from './dados'

//nome dos atributos que eu to criando e "passando" para o props
export default function Corpo(){
    const Aluna = 'Kathelyn'
    return (
        <>
            <Dados curso= 'Curso de React' 
                    Youtube= 'https://www.youtube.com/watch?v=CsCP8ZFySg4&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=6'/>
                    Aluna = {Aluna}
            
            
        </>
    )
}