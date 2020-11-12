import React, {useState,useEffect} from 'react';
import Board from '../components/board'
const MemoryPokemon = () =>{
    const [arrayPokemons,setArrayPokemons] = useState([]);
    const [showLetters,setShowLetters] = useState(new Array(12).fill(false))
    const [compareLetters,setCompareLetters] = useState([])

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


    
    function showLettersfunction(showLetters,setShowLetters,compareLetters,setCompareLetters,idPokemon,arrayPokemons,setArrayPokemons){
        if(!compareLetters[0]){
            compareLetters[0] = idPokemon
            showLetters[compareLetters[0]] = true
          return setCompareLetters(compareLetters),setShowLetters(showLetters)
            
        }else if(compareLetters[0]){
            compareLetters[1] = idPokemon
            showLetters[compareLetters[1]] = true
           setCompareLetters(compareLetters)
           setShowLetters([showLetters])
        }
            
            
            setTimeout(()=>{
                let arrayPokemonNew = []
                if (arrayPokemons[compareLetters[0]] == arrayPokemons[compareLetters[1]] && compareLetters[0] != compareLetters[1]) {  
                    for(let i = 0; i <= arrayPokemons.length-1;i++){
                            if(arrayPokemons[i]!=arrayPokemons[compareLetters[0]] ){
                                    arrayPokemonNew.push(arrayPokemons[i])
                            }
                    }  
                let showLettersNew = []
                    for(let i = 0; i <= showLetters.length-1;i++){
                        if(showLetters[i]!=true){
                            showLettersNew.push(showLetters[i])
                        }
                    }  
                  return  setArrayPokemons(arrayPokemonNew),setShowLetters(showLettersNew),setCompareLetters([])
                }else{
                    showLetters[compareLetters[0]]=false
                    showLetters[compareLetters[1]]=false
                    setShowLetters(showLetters)
                    setCompareLetters([])
                }
            },5000)

    }

    return (
        <div className="memoryPokemon-container">
            <Board
                arrayPokemons={arrayPokemons}            
                showLetters={showLetters}
                setShowLetters={setShowLetters}
                compareLetters={compareLetters}
                setCompareLetters={setCompareLetters}
                showLettersfunction={showLettersfunction}
                setArrayPokemons={setArrayPokemons}

            />
        </div>
    );
};
export default MemoryPokemon