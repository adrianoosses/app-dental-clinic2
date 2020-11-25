import axios from 'axios'
import React, {useState} from 'react';
import '../getappointments/getappointments.css'

const DeleteAppointment = () => {
    const [idAppo, setIdAppo] = useState('');
    const handleSubmit = async (event) => {
        try{
            //const emailUsr = localStorage.getItem('email');
            const token = localStorage.getItem('tokenUsr');
            const url = 'https://app-dental-clinic.herokuapp.com/appointment/delete';
            console.log("id appo: "+ idAppo);
            axios.delete(url, { params: { id: idAppo },
                        headers: {authorization: token} })
                .then(() => console.log("Deleted"))
                .catch(()=> console.log("Error"))
        }catch{
            console.error("error");
        }
    }
    return (
        <div className="contentStyle">
            <form className="register" onSubmit={handleSubmit}>
                <h2>Delete:</h2>
                <p>Id: <input type="text" onChange={event=>setIdAppo(event.target.value)} name="idappo" placeholder="idappo [1]" /></p>
                <button type="submit">Delete</button>
                <p/>
            </form>
        </div>
    )
}

export default DeleteAppointment;
    

