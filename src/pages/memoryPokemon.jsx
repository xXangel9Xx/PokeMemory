import React, {useState,useEffect} from 'react';
import Board from '../components/board'
const MemoryPokemon = () =>{
    const [arrayPokemons,setArrayPokemons] = useState([]);
    const [show,setShow] = useState(new Array(12).fill(null))
    const [compareLetters,setCompareLetters] = useState([])
    const [time,setTime] = useState(0)
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


    
    function showLettersfunction(show,setShow,compareLetters,setCompareLetters,idPokemon,arrayPokemons,setArrayPokemons){
        if(typeof(compareLetters[0])=="undefined" ){
            compareLetters[0] = idPokemon
            show[idPokemon] = true
            console.log(compareLetters)
           setCompareLetters(compareLetters)
           setShow(show)
        }else if(typeof(compareLetters[0])=="number" && typeof(compareLetters[1])=="undefined"){
            compareLetters[1] = idPokemon
            show[idPokemon] = true
           setCompareLetters(compareLetters)      
           setShow(show)
        }   

            setTimeout(()=>{
                let arrayPokemonNew = []
                if (arrayPokemons[compareLetters[0]] == arrayPokemons[compareLetters[1]] && compareLetters[0] != compareLetters[1]) {  
                    for(let i = 0; i <= arrayPokemons.length-1;i++){
                            if(arrayPokemons[i]!=arrayPokemons[compareLetters[0]] ){
                                    arrayPokemonNew.push(arrayPokemons[i])
                            }
                    }  
                let showNew = []
                    for(let i = 0; i <= show.length-1;i++){
                        if(show[i]!=true){
                            showNew.push(show[i])
                        }
                    }  
                  return  setArrayPokemons(arrayPokemonNew),setShow(showNew),setCompareLetters([])
                }else if (arrayPokemons[compareLetters[0]] != arrayPokemons[compareLetters[1]] && typeof(compareLetters[1])=="number"){
                    for(let i = 0; i <= show.length-1;i++){
                        if(show[i]==true){
                            show[i]=null
                        }
                    }  
                    setShow(show)
                    setCompareLetters([])
                }
            },3000)

    }

    return (
        <div className="memoryPokemon-container">
            <Board
                arrayPokemons={arrayPokemons}            
                show={show}
                setShow={setShow}
                compareLetters={compareLetters}
                setCompareLetters={setCompareLetters}
                showLettersfunction={showLettersfunction}
                setArrayPokemons={setArrayPokemons}
                time={time}
                setTime={setTime}

            />
        </div>
    );
};
export default MemoryPokemon