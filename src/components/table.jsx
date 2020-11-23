import React, {useState,useEffect} from 'react';
import '../assets/table.scss'
import {firebase} from '../firebase'
import 'firebase/firestore';
const Table = (props) =>{
    const [positionsTable,setPositionsTable] = useState([])
    useEffect(()=>{
        const getFirebase = async () =>{
            const db = firebase.firestore()
            try{
                const positions = await db.collection('positions', ref=>
                ref.orderBy('seconds','asc')).get()
                const arrayData = positions.docs.map((doc)=>({
                    name:doc.data().name, 
                    seconds:doc.data().seconds
                }))
                console.log(arrayData)
            }catch(error){
                console.error(error)
            }  
            
        }
        getFirebase()
    },[])

    return (
        <div className="container-table">
            <table border="1"  cellPadding="5">
                <caption>Tabla de Posiciones</caption>
                <thead className="table-thead">
                    <tr>
                        <th className="table-th-positions">Name</th>
                        <th className="table-th-positions">Time</th>
                    </tr>                    
                </thead>

            </table>
        </div>
    )
}
export default Table                     
   //<th className="table-th-positions">LastName</th>