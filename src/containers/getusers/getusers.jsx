import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
const token = "hola";

const GetAppointments = () => {
    const history = useHistory();
    const handleGet =  async(event) => {
        console.log("Showing users");
        try {
            event.preventDefault();
            const form = event.target;
            const url = "https://app-dental-clinic.herokuapp.com/user/getAll"; // site that doesn’t send Access-Control-*
            const res = await axios.get(url, {headers: {authorization: token}});
            console.log("res" + res);
            console.log("res[0]" + res[0]);
            console.log("JSON.stringify(res)" + JSON.stringify(res));
            history.push('/')
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <div>
            <button onClick={handleGet}>GET USERS</button>
        </div>
    )
}
export default Getusers;