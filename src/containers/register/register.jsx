import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { notification } from 'antd'
import '../../App.css'

const Register = () => {
    const history = useHistory();
    const handleSubmit = async (event) => {
        console.log("Registring");
        try {
            event.preventDefault();
            const form = event.target;
            const user = {         
                "name": form.name.value,
                "password": form.password.value,
                "token": "",
                "last_name": form.last_name.value,
                "email": form.email.value ,
                "role": form.role.value,
                "address": form.address.value,
                "dni": form.dni.value,
                "born": form.born.value,
                "covid": form.covid.value,
                "history_id": form.history_id.value,
                "comment": form.comments.value,
                "defaulter": "FALSE",
                "allergies": form.allergies.value
            }
            console.log("user: " + user.name);
            await axios.post('https://app-dental-clinic.herokuapp.com/user/register', user)
            notification.success({ message: 'Registered!', description: 'User successfully registered' })
            history.push('/login')
        } catch (error) {
            console.error(error)
            notification.error({ message: 'Register failed', description: 'there was a problem trying to register the user' })
        }

    }
    return (
        <div className="contentStyle">
            <form className="register" onSubmit={handleSubmit}>
                <h2>Register:</h2>
                <h3>Personal data</h3>
                <p>Name: <input type="text" name="name" placeholder="Name" /></p>
                <p>Last name: <input type="text" name="last_name" placeholder="Last name" /></p>
                <p>Address: <input type="text" name="address" placeholder="Address" /></p>
                <p>DNI/Passport: <input type="text" name="dni" placeholder="DNI" /></p>
                <p>Born date: <input type="text" name="born" placeholder="Born date" /></p>
                <p>Comments: <input type="text" name="comments" placeholder="Comments" /></p>
                <h3>Account data:</h3>
                <p>Email: <input type="email" name="email" placeholder="Email" /></p>
                <p>Password: <input type="password" name="password" placeholder="Password" /></p>
                <p>Role: <input type="text" name="role" placeholder="Role" /></p>
                <h3>Medical data:</h3>
                <p>Did you suffer COVID-19?: <input type="text" name="covid" placeholder=" (TRUE/FALSE)" /></p>
                <p>History identifier number: <input type="text" name="history_id" placeholder="History identifier number" /></p>
                <p>Allergies: <input type="text" name="allergies" placeholder="Do you have allergies?" /></p>
                <button type="submit">Register</button>
                <p/>
            </form>
        </div>
    )
}

export default Register
