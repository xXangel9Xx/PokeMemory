import React, {useState,useEffect} from 'react';
import '../assets/board.scss'
import Letters from './letters'
import Table from './table'
import Form from './form'

const Board = (props) => {

    return(
        <div className="container-board">

            <div className="container-image-game-memory">
                <Letters  
                    arrayPokemons={props.arrayPokemons}
                />
            </div>

        </div>
    )

}
export default Board