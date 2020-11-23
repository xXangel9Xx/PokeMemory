import React, {useState,useEffect} from 'react';
import {firebase} from '../firebase'
import 'firebase/firestore';
//import '../assets/form.scss'
const Form = (props) => {
    const [nameForm, setNameForm] = useState("");
    function onChangeInputName(e,setNameForm){return setNameForm(e.target.value)}

    async function postData(e,nameForm){
        e.preventDefault()
        try{
            const db = firebase.firestore()
            const data = await db.collection('positions').add({
                name:nameForm,
                seconds:5
            })
            console.log(data)
        }catch(e){
            console.error(e)
        }
    }
    return (
        <div className="container-form">
            <form id="form" onSubmit={(e)=>{postData(e,nameForm)}}>
                <input type="text" className="getNameUser" placeholder="Name" onChange={(e)=>onChangeInputName(e,setNameForm)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Form