import React, {useEstate,useEffect} from 'react';
import hidden from '../assets/images/hidden.gif'
import '../assets/letters.scss'
const Letters = (props) =>{
    
    useEffect(()=>{},[props.arrayPokemons])
    useEffect(()=>{
        console.log(props.show)
    },[props.show])
    useEffect(()=>{},[props.compareLetters])
    return (
        <>
            {props.arrayPokemons.map((pokemons,i)=>
                <div className="container-letters" key={i} id={i} onClick={(e)=>props.showLettersfunction(props.show,props.setShow,props.compareLetters,props.setCompareLetters,i,props.arrayPokemons,props.setArrayPokemons) } >
                    {props.show[i]==true? <img src={"https://pokeres.bastionbot.org/images/pokemon/"+pokemons+".png"} alt="Pokemon" className="pokemons-image"/>:
                    <img src={hidden} alt="Pokemon" className="pokemons-image" />
                    }
                </div>   
            )}
        </>
    )
}
export default Letters