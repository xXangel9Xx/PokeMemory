import React, {useEstate,useEffect} from 'react';
import '../assets/letters.scss'
const Letters = (props) =>{
    useEffect(()=>{},[props.arrayPokemons])
    useEffect(()=>{},[props.showLetters])
   // useEffect(()=>{},[props.setShowLetters])
    useEffect(()=>{},[props.compareLetters])
   // useEffect(()=>{},[props.setCompareLetters])

    return (
        <>
            {props.arrayPokemons.map((pokemons,i)=>
                <div className="container-letters" key={i} id={i} 
                onClick={ (e)=>props.showLettersfunction(props.showLetters,props.setShowLetters,
                props.compareLetters,props.setCompareLetters,i,props.arrayPokemons,props.setArrayPokemons) }>

                    <img src={"https://pokeres.bastionbot.org/images/pokemon/"+pokemons+".png"} alt="Pokemon" className="pokemons-image"/>
                </div>   
            )}
        </>
    )
}
export default Letters