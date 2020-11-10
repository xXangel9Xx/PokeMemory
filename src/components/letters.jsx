import React, {useEstate,useEffect} from 'react';
import '../assets/letters.scss'
const Letters = (props) =>{
    useEffect(()=>{},[props.arrayPokemons])
    return (
        <>
            {props.arrayPokemons.map((pokemons,i)=>
                <div className="container-letters" key={i}>
                    <img src={"https://pokeres.bastionbot.org/images/pokemon/"+pokemons+".png"} alt="Pokemon" className="pokemons-image"/>
                </div>   
            )}
        </>
    )
}
export default Letters