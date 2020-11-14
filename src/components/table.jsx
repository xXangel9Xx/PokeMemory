import React, {useState,useEffect} from 'react';
import '../assets/table.scss'
const Table = (props) =>{
    return (
        <div className="container-table">
            <table>
                <caption>Tabla de Posiciones</caption>
                <thead className="table-thead">
                    <tr>
                        <th className="table-th-positions">Name</th>
                        <th className="table-th-positions">LastName</th>
                        <th className="table-th-positions">Time</th>
                    </tr>                    
                </thead>

            </table>
        </div>
    )
}
export default Table