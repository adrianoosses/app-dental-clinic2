import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { useHistory, useParams } from 'react-router-dom';
//const token = "hola";
//import {localStorageFunction} from './localstorage/localstoragefunction.jsx'
import GetAllAppointments from '../getallappointments/getallappointments.jsx'

const GetAppointments = () => {
    const history = useHistory();
    const handleGet =  async(event) => {
        console.log("Showing users");
        console.log("Token 2: " + localStorage.getItem('tokenUsr'));
        const token = localStorage.getItem('tokenUsr');
        try {
            event.preventDefault();
            const form = event.target;
            const url = "https://app-dental-clinic.herokuapp.com/appointment/getAll"; // site that doesn’t send Access-Control-*
            const appointmentsList = await axios.get(url, {headers: {authorization: token}});
            //console.log("res: " + appointmentsList.data[0]);
            //console.log("res[0]" + res[0]);
            //console.log("JSON.stringify(appointmentsList.data)" + JSON.stringify(appointmentsList.data));
            //console.log("JSON.stringify(appointmentsList.data[0])" + JSON.stringify(appointmentsList.data[0]));
            console.log("JSON.stringify(appointmentsList.data[0].patient_id)" + JSON.stringify(appointmentsList.data[0].patient_id));

            const appoinSent = JSON.stringify(appointmentsList.data[0].patient_id);
            <GetAllAppointments appoin={appoinSent} />
            history.push('/getallappointments')
            return appoinSent;
        } catch (error) {
            console.error(error)
        }
    }
    //console.log("lista: " + (await this.handleGet()));
    return(
        <div>
            <button onClick={handleGet}>GET APPOINTMENTS</button>
            <BrowserRouter>
          <Switch >
            <Route path='/getallappointments' exact component={GetAllAppointments} />
          </Switch>
        </BrowserRouter>
        </div>
    )
}
export default GetAppointments;