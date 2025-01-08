import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokeLista = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
            setPokemons(response.data.results);
        })
    }, [/*si pones nombre cada vez que cambies nombre se vuelve a ejecutar el axios*/]);

    const functionNavegadorASnivy = () => {
        navigate("/pokemon/495");
    }

    const functionNavegar = (p) => {
        navigate("/pokemon/" + p);
    }

    return <div>
        <button onClick={functionNavegadorASnivy}>Navega a Snivy</button>
        <h1>Lista</h1>
        {pokemons.map(p => {
            return <p onClick={() => { navigate("/pokemon/" + p.name); }}>
                Este pokemon es {p.name}
            </p>
        }
        )}
    </div>
}

export default PokeLista;