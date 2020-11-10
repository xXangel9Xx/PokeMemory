import React, {useState,useEffect} from 'react';
import Board from '../components/board'
const MemoryPokemon = () =>{
    const [arrayPokemons,setArrayPokemons] = useState([]);
    
    
    
    useEffect(()=>{
        let random 
        //array item unic
        for(let i = 0; i <= 5; i-=-1){
           random = Math.floor(Math.random() * 6)+1
            if (arrayPokemons.includes(random)) {
                i--
            }else{
                arrayPokemons[i] =  random               
            };
        }
        //shuffle array
        let shuffle = []
        let cartShuffle = []
            for(let i = 0; i <= arrayPokemons.length-1; i-=-1) {
                random = Math.floor(Math.random() * arrayPokemons.length)
                if(shuffle.includes(random)) {
                    i--
                }else{
                    shuffle[i] = random
                    cartShuffle[i] = arrayPokemons[random]
                }
            }
        //save array
            cartShuffle = arrayPokemons.concat(cartShuffle)
            setArrayPokemons(cartShuffle)
    },[])


    return (
        <div className="memoryPokemon-container">
            <Board
                arrayPokemons={arrayPokemons}
            />
        </div>
    );
};
export default MemoryPokemon