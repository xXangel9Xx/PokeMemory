import React, {useState,useEffect} from 'react';
import '../assets/board.scss'
import Letters from './letters'
import Table from './table'
import Form from './form'

const Board = (props) => {
    useEffect(()=>{
        setTimeout(()=>{
            let time = props.time
            props.setTime(time+=1)
        },1000)
    },[props.time])

    useEffect(()=>{},[props.arrayPokemons])
    useEffect(()=>{
        console.log(props.show)
    },[props.show])
    useEffect(()=>{},[props.compareLetters])

    return(
        <div className="container-board">
            <p>{props.time}</p>
            <div className="container-image-game-memory">
                <Letters  
                    arrayPokemons={props.arrayPokemons}
                    setArrayPokemons={props.setArrayPokemons}                    
                    show={props.show}
                    setShow={props.setShow}
                    compareLetters={props.compareLetters}
                    setCompareLetters={props.setCompareLetters}
                    showLettersfunction={props.showLettersfunction}

                />
            </div>

        </div>
    )

}
export default Board