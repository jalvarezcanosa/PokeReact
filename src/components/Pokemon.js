import { useState } from "react"

const Pokemon = (props) => {
    const[nivel,setNivel]=useState(1);

    const onSubirNivel = (event) => {
        setNivel( n => n + 1 )
    }

    const onBajarNivel = (event) => {
        setNivel( n => n - 1 )
    }

    const calcularHP = () => {
        return 76 + (nivel*3)
    }

    const calcularAtaque = () => {
        return 104 + (nivel*2)
    }

    const calcularDefensa = () => {
        return 71 + (nivel*2)
    }

    return <div>
        <h1>Infernape</h1>
        <h2>Nivel: {nivel} </h2>
        <button onClick={ onSubirNivel}>Subir Nivel</button>
        <button onClick={ onBajarNivel}>Bajar Nivel</button>
        <p>HP: { calcularHP(76)} </p>
        <p>Ataque: { calcularAtaque(104)}</p>
        <p>Defensa: { calcularDefensa(71)}</p>
    </div>

}

export default Pokemon;