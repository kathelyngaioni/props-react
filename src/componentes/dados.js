import React from 'react'

//para o componente receber dados eu uso como parâmetro da função
export default function Dados(props){
    return (
        <section>
            <p> Curso: {props.curso}</p>
            <p> Canal: {props.Youtube}</p>
        </section>
    )
}