import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { notification } from 'antd'
//localStorage.setItem('myData', data);

const Login = () => {
    const history = useHistory();
    const handleSubmit = async (event) => {
        console.log("Logging");
        try {
            event.preventDefault();
            const form = event.target;
            
            const user = {         
                "password": form.password.value,
                "email": form.email.value,
            }
 
            let msgReceived = await axios.post('https://app-dental-clinic.herokuapp.com/user/login', user);
            //console.log("token??" + JSON.stringify(msgReceived));
            //console.log("auth" + JSON.stringify(msgReceived.headers));
            
            //console.log("msgReceived[0]:" +  msgReceived[0]);
            //console.log("JSON.stringify(msgReceived)" +  JSON.stringify(msgReceived.data));
            
            //console.log("Token: " + msgReceived.data.tokenSend);
            //console.log("stringify(msgReceived): " + JSON.stringify(msgReceived));
            localStorage.setItem('tokenUsr', msgReceived.data.tokenSend);
            notification.success({ message: 'Logged!', description: 'User logged' })
            history.push('/login')
        } catch (error) {
            console.error(error)
            notification.error({ message: 'Login failed', description: 'there was a problem loging' })
        }

    }
    return (
        <div className="contentStyle">
            <form className="register" onSubmit={handleSubmit}>
                <h2>Login:</h2>
                <p>Email: <input type="text" name="email" placeholder="user@domain.com" /></p>
                <p>Password: <input type="password" name="password" placeholder="8 or more characters" /></p>
                <button type="submit">Login</button>
                <p/>
            </form>
        </div>
    )
}

export default Login