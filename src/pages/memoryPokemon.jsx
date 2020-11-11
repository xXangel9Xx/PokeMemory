import React, {useState,useEffect} from 'react';
import Board from '../components/board'
const MemoryPokemon = () =>{
    const [arrayPokemons,setArrayPokemons] = useState([]);
    const [showLetters,setShowLetters] = useState(new Array(12).fill(false))
    const [compareLetters,setCompareLetters] = useState([])

   // const [showLetter1,setShowLetter1] = useState(new Array(6).fill(false));
   // const [showLetter2,setShowLetter2] = useState(new Array(6).fill(false));

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
           setCompareLetters([compareLetters])
           setShowLetters(showLetters)
        }
            
            
            setTimeout(()=>{
                if (arrayPokemons[compareLetters[0]] == arrayPokemons[compareLetters[1]]) {
                    console.log(arrayPokemons.splice(compareLetters[0],1))      
                    console.log(arrayPokemons.splice(compareLetters[1],1))
                    setArrayPokemons(arrayPokemons)  
                    showLetters.splice(compareLetters[0],1)
                    showLetters.splice(compareLetters[1],1)

                    setShowLetters(showLetters)
                    setCompareLetters([])
                    console.log("after "+arrayPokemons)
                }
            },10000)

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