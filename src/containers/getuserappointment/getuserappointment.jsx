import axios from 'axios'
import React, { useState, useEffect } from 'react';
import '../getappointments/getappointments.css'
import { useHistory, useParams } from 'react-router-dom';

export default class GetAppointments extends React.Component{
    constructor(props){
        super();
        this.state = {
            arrayAppos: []
        };
    }
    componentDidMount() {
        //const history = useHistory();
        console.log("Showing appos");
        console.log("Token 2: " + localStorage.getItem('tokenUsr'));
        const emailUsr = localStorage.getItem('email');
        const token = localStorage.getItem('tokenUsr');
        //let [arrayAppos, setArrayAppos] = useState([]);
        //const url = `https://app-dental-clinic.herokuapp.com/appointment/getMy?email=${filemon@tia.com}`; // site that doesn’t send Access-Control-*
        //const url = `https://app-dental-clinic.herokuapp.com/appointment/getMy?email=filemon@tia.com`
        const url = 'https://app-dental-clinic.herokuapp.com/appointment/getMy';
        //const appointmentsRes = await axios.get(url, {headers: {authorization: token}});

        axios.get(url, { params: { email: emailUsr } })
            .then(appo => {
                console.log("JSON.stringify(appo.data[0]): " + JSON.stringify(appo.data[0]));
                this.setState( {
                    arrayAppos: appo.data
                } );
            } );
    }
    render(){
        return(
            <section className="contentStyle">
                <h1>Appointments</h1>
                <table className="tableAppointments">
                    <tr>
                        <th>Patient ID</th>
                        <th>Doctor ID</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Hour</th>
                    </tr>
                    
                { this.state.arrayAppos.map((appo, index) => {
                    return (
                        <tr>     
                            <td>{appo.useremail}</td>
                            <td>{appo.docemail}</td>
                            <td>{appo.service}</td>
                            <td>{appo.status}</td>
                            <td>{appo.hour}</td> 
                        </tr>
                    );
                })
                }
                
                </table>
            </section>
        )
    }
    
}
